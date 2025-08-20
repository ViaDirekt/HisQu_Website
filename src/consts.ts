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

export type Partner = {
    key: string;                 // stabiler Schlüssel (z.B. 'fsu-jena')
    name: string;                // sichtbarer Name
    unit?: string;               // ggf. Arbeitsgruppe/Projekt
    institution?: string;        // ggf. Trägerinstitution
    href: string;                // Link zur Partnerseite
    srcLight: string;            // Logo (hell)
    srcDark?: string;            // Logo (dunkel) – kann identisch sein
    width?: number;
    height?: number;
    icon?: PartnerIcon;          // steuert das Inline-Icon in AboutPartners
    leads?: PartnerLead[];       // Projektleitung / Kontakt
    summary?: string;            // kurze Rollenbeschreibung
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
        icon: "cloud",
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
        icon: "lock",
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
        icon: "stack",
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
        icon: "list",
        leads: [
            { name: "Martin Mulsow", title: "Prof. Dr." },
            { name: "Olaf Simons", title: "Dr." },
        ],
        summary:
            "Betrieb und Weiterentwicklung von FactGrid/Wikibase als domänenspezifischer Datenspeicher für kollaborative Erschließung und Abfrage."
    },
];


export const dfg: Partner = {
    name: "Deutsche Forschungsgemeinschaft",
    srcLight: dfgLogoSvg,
    srcDark: dfgLogoSvg, // gleiches Asset in Dark erlaubt
    width: 158,
    height: 48,
    href: "https://www.dfg.de/"
};