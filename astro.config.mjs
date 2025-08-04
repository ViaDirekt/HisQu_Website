// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://hisqu.de',
	i18n: {
		locales: ["en", "de"],       // add as many as you need
		defaultLocale: "en",
		routing: { prefixDefaultLocale: false }, // "/about" (EN) and "/de/about"
	},
});
