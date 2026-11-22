import classNames from "classnames";

export const handNoteText = classNames(
  "font-script font-semibold leading-[1.1]",
  "[text-shadow:0_1px_10px_rgb(0_0_0/35%)]",
);

export const handNote = classNames("inline-flex items-center", handNoteText);

export const pageSection = classNames(
  "mx-auto grid content-start justify-items-center gap-7 text-center text-sand",
  "w-[calc(100%-32px)] md:w-[min(1000px,calc(100%-48px))]",
);

export const sectionPadding = "py-14 md:py-18";

export const sectionIntro = classNames(
  "-mt-5 max-w-130 leading-[1.7] text-sand/88",
  "text-[13.5px] md:text-[15px]",
);

export const cardTitle = "font-display font-medium text-white";

export const cardText = classNames(
  "text-sand/86",
  "text-[13px] leading-[1.6] md:text-[14px] md:leading-[1.7]",
);

export const pill = classNames(
  "inline-flex items-center gap-1.5 rounded-full border border-sand/30 px-3.5 text-cream",
  "transition-[border-color,background-color] duration-200 hover:border-sand/60 hover:bg-sand/8",
);
