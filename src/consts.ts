// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SiteTitle = 'HisQu';
export const SiteDescription = 'e-Research Project';
export const GitHubLink = 'https://github.com/HisQu';


import {
    dhiLogo,
    factGridLogo,
    dfgLogoSvg,
    gsLogo,
    mephisto03,
    mephisto04,
} from "./assets";

export type Partner = {
    name: string;
    alt?: string;
    width?: number;
    height?: number;
    // lokale oder externe Quellen – jeweils für Light/Dark
    srcLight: string;
    srcDark?: string;
    // optionale Tailwind-Klassen pro Item
    className?: string;
    // optionaler Link
    href?: string;
};

export const partners: Partner[] = [
    {
        name: "Deutsches Historisches Institut",
        srcLight: dhiLogo,
        srcDark: dhiLogo,
        width: 158,
        height: 48,
        href: "https://dhi-roma.it/"
    },
    {
        name: "FactGrid Initiative",
        srcLight: factGridLogo,
        srcDark: factGridLogo,
        width: 158,
        height: 48,
        href: "https://factgrid.de/"
    },
    {
        name: "Germania Sacra Göttingen",
        srcLight: gsLogo,
        srcDark: gsLogo,
        width: 158,
        height: 48,
        href: "https://adw-goe.de/germania-sacra/"
    },
    {
        name: "MEPHISTO Arbeitsgruppe Jena",
        srcLight: mephisto03,
        srcDark: mephisto03,
        width: 158,
        height: 48,
        href: "https://mephisto.uni-jena.de"
    },
];


export const dfg: Partnter = {
    name: "Deutsche Forschungsgemeinschaft",
    srcLight: dfgLogoSvg,
    srcDark: dfgLogoSvg, // gleiches Asset in Dark erlaubt
    width: 158,
    height: 48,
    href: "https://www.dfg.de/"
};