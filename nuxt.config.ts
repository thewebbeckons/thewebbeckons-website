// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxt/content"],
	css: ["~/assets/css/main.css"],
	nitro: {
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
			wrangler: {
				d1_databases: [
					{
						binding: "DB",
						database_name: "thewebbeckons",
						database_id: "b67b8586-2f0b-4491-873c-0fc1eaaa1237",
					},
				],
			},
		},
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
