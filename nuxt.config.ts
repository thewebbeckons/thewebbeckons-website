// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxt/content", "@nuxthub/core"],
	css: ["~/assets/css/main.css"],
	hub: {
		db: "sqlite",
	},
	content: {
		database: {
			type: "sqlite",
			filename: ".data/content.db",
		},
	},
	ui: {
		fonts: false,
		colorMode: false,
	},
	vite: {
		optimizeDeps: {
			include: [],
		},
	},
	devtools: { enabled: true },
	compatibilityDate: "2026-06-27",
});
