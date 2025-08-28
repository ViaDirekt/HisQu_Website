// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SiteTitle = 'HisQu';
export const SiteDescription = 'e-Research Project';
export const GitHubLink = 'https://github.com/HisQu';
export const MatrixLink = 'https://matrix.to/#/!PcrBuOrnEqLlUmmMNv:uni-goettingen.de?via=uni-goettingen.de&via=uni-jena.de&via=matrix.org';
export const GitHubIssuesLink = "https://github.com/HisQu/Organisation/issues";


import {
    dhiLogo,
    factGridLogo,
    dfgLogoSvg,
    gsLogo,
    mephisto03,
    mephisto04,
} from "./assets";

export type Partner = {
    key: string;
    unit: string;
    institution: string;
    name: string;
    alt?: string;
    width?: number;
    height?: number;
    // lokale oder externe Quellen – jeweils für Light/Dark
    srcLight: object;
    srcDark?: object;
    // optionale Tailwind-Klassen pro Item
    className?: string;
    // optionaler Link
    href?: string;
    leads?: {name: string, title: string}[];
    summary: string;
};

export const partners: Partner[] = [
    {
        key: "fsu-jena",
        name: "Friedrich-Schiller-Universität Jena",
        unit: "MEPHisto",
        institution: "FSU Jena",
        href: "https://mephisto.uni-jena.de",
        srcLight: mephisto03,
        srcDark: mephisto03,
        width: 158,
        height: 48,
        leads: [
            { name: "Clemens Beckstein", title: "Prof. Dr." },
            { name: "Robert Gramsch-Stehfest", title: "Apl. Prof. Dr." },
        ],
        summary:
            "Methodische Führung in Modellierung, Erklärung und Prozessen historischer Wissenschaften – von semantischer Erschließung bis orchestrierter Workflow-Integration."
    },
    {
        key: "germania-sacra",
        name: "Germania Sacra",
        institution: "Niedersächsische Akademie der Wissenschaften zu Göttingen",
        href: "https://adw-goe.de/germania-sacra/",
        srcLight: gsLogo,
        srcDark: gsLogo,
        width: 158,
        height: 48,
        leads: [
            { name: "Hedwig Röckelein", title: "Prof. Dr." },
            { name: "Bärbel Kröger", title: "M.A." },
            { name: "Christian Popp", title: "Dr." },
        ],
        summary:
            "Fachliche Kuratierung, Editions-Expertise und Qualitätsstandards für historische Quellenkorpora."
    },
    {
        key: "dhi-rom",
        name: "Deutsches Historisches Institut in Rom",
        unit: "Repertorium Germanicum",
        href: "https://dhi-roma.it/",
        srcLight: dhiLogo,
        srcDark: dhiLogo,
        width: 158,
        height: 48,
        leads: [
            { name: "Martin Baumeister", title: "Prof. Dr." },
            { name: "Jörg Hörnschemeyer", title: "Dr." },
        ],
        summary:
            "Leitender Anwendungsfall »Repertorium Germanicum«: praxisnahe Validierung und Zugang zu zentralen Quellen der spätmittelalterlichen Kirchengeschichte."
    },
    {
        key: "factgrid",
        name: "Forschungszentrum Gotha der Universität Erfurt",
        unit: "FactGrid",
        href: "https://factgrid.de/",
        srcLight: factGridLogo,
        srcDark: factGridLogo,
        width: 158,
        height: 48,
        leads: [
            { name: "Martin Mulsow", title: "Prof. Dr." },
            { name: "Olaf Simons", title: "Dr." },
        ],
        summary:
            "Betrieb und Weiterentwicklung von FactGrid/Wikibase als domänenspezifischer Datenspeicher für kollaborative Erschließung und Abfrage."
    },
];

export interface Step {
    title: string
    subtitle: string
    description: string
    image: { src: string; alt?: string }
    caption?: string
}

type RgPoint = { title: string; text: string }

export interface Props {
    title?: string
    description?: string
    eyebrow?: string
    steps: Step[]
    gradientFrom?: string
    gradientTo?: string
    class?: string

    /* New: RG explanation props */
    rgTitle?: string
    rgDescription?: string
    rgImage?: { src: string; alt?: string }
    rgPoints?: RgPoint[]
}


export const dfg: Partner = {
    name: "Deutsche Forschungsgemeinschaft",
    srcLight: dfgLogoSvg,
    srcDark: dfgLogoSvg, // gleiches Asset in Dark erlaubt
    width: 158,
    height: 48,
    href: "https://www.dfg.de/"
};