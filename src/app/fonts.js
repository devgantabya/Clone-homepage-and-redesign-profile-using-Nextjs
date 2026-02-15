import { DM_Serif_Display, DM_Sans } from "next/font/google";

export const headingFont = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-heading",
});

export const bodyFont = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
});
