"use client";

import { useEffect, useRef } from "react";

const VERTEX = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAGMENT = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;
uniform float uPointerStrength;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 r = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = r * p * 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = uTime;

  vec2 warp = vec2(fbm(p * 1.6 + vec2(t * 0.02, 0.0)),
                   fbm(p * 1.6 + vec2(5.2, 1.3) - vec2(0.0, t * 0.015)));
  float far = fbm(p * vec2(1.1, 3.2) + warp * 1.4 + vec2(t * 0.025, 0.0));
  float near = fbm(p * vec2(1.9, 4.6) + warp * 2.0 + vec2(t * 0.06, t * 0.008));

  float band = smoothstep(0.86, 0.4, uv.y) * smoothstep(0.05, 0.3, uv.y);
  float fog = (smoothstep(0.3, 0.8, far) * 0.75 + smoothstep(0.4, 0.85, near) * 0.6) * band;

  vec2 d = (uv - uPointer) * vec2(aspect, 1.0);
  fog *= 1.0 - smoothstep(0.34, 0.0, length(d)) * uPointerStrength * 0.8;

  vec3 purple = vec3(0.42, 0.3, 0.56);
  vec3 rose = vec3(0.82, 0.46, 0.58);
  vec3 peach = vec3(0.98, 0.7, 0.56);
  float tone = smoothstep(0.35, 0.8, warp.x + (near - far) * 0.9);
  vec3 color = mix(purple, rose, tone);
  color = mix(color, purple, smoothstep(0.42, 0.12, uv.y) * 0.45);
  color = mix(color, peach, smoothstep(0.78, 0.95, near) * 0.45);

  fog = 1.0 - exp(-fog * 1.6);
  float alpha = fog * 0.5;
  gl_FragColor = vec4(color * alpha, alpha);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn("Fog shader failed to compile:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function Fog() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true });
    if (!canvas || !gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uPointer = gl.getUniformLocation(program, "uPointer");
    const uPointerStrength = gl.getUniformLocation(program, "uPointerStrength");

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2) * 0.5;
      canvas.width = Math.max(1, Math.round(window.innerWidth * scale));
      canvas.height = Math.max(1, Math.round(window.innerHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const pointer = { x: 0.5, y: 0.5, strength: 0 };
    const target = { x: 0.5, y: 0.5, strength: 0 };
    const onPointerMove = (event: PointerEvent) => {
      target.x = event.clientX / window.innerWidth;
      target.y = 1 - event.clientY / window.innerHeight;
      target.strength = 1;
    };
    const onPointerLeave = () => {
      target.strength = 0;
    };

    const draw = (time: number) => {
      pointer.x += (target.x - pointer.x) * 0.06;
      pointer.y += (target.y - pointer.y) * 0.06;
      pointer.strength += (target.strength - pointer.strength) * 0.04;
      gl.uniform1f(uTime, time);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.uniform1f(uPointerStrength, pointer.strength);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const start = performance.now();
    const loop = (now: number) => {
      draw((now - start) / 1000 + 12);
      frame = requestAnimationFrame(loop);
    };
    const run = () => {
      cancelAnimationFrame(frame);
      if (reducedMotion.matches) {
        draw(12);
      } else {
        frame = requestAnimationFrame(loop);
      }
    };
    const onResize = () => {
      resize();
      if (reducedMotion.matches) draw(12);
    };

    resize();
    run();
    canvas.dataset.ready = "true";

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    reducedMotion.addEventListener("change", run);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      reducedMotion.removeEventListener("change", run);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return <canvas ref={canvasRef} className="fog-canvas" aria-hidden="true" />;
}
