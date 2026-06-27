// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxt/content"],
	css: ["~/assets/css/main.css"],
	nitro: {
		preset: "cloudflare_module",
	},
	routeRules: {
		"/": { prerender: true },
	},
	content: {
		experimental: {
			sqliteConnector: "native",
		},
		database: {
			type: "d1",
			bindingName: "DB",
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
