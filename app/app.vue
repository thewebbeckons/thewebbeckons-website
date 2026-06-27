<script setup lang="ts">
	useHead({
		title: "thewebbeckons",
		meta: [
			{
				name: "description",
				content:
					"Hey, I'm Jesse. The web has always seemed like it beckons to me.",
			},
		],
	});

	const footer = useTemplateRef<HTMLElement>("footer");
	const footerVisible = ref(false);
	let footerObserver: IntersectionObserver | null = null;

	onMounted(() => {
		if (!footer.value) return;

		footerObserver = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return;
				footerVisible.value = true;
				footerObserver?.disconnect();
				footerObserver = null;
			},
			{ threshold: 0.25 },
		);

		footerObserver.observe(footer.value);
	});

	onBeforeUnmount(() => footerObserver?.disconnect());
</script>
<template>
	<UApp>
		<NuxtRouteAnnouncer />
		<div class="min-h-screen bg-stone-950 text-stone-100">
			<header
				class="fixed inset-x-0 top-0 z-20 border-b border-white/5 bg-stone-950/85 backdrop-blur"
			>
				<nav
					class="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 font-mono text-sm sm:px-10"
				>
					<NuxtLink
						to="/"
						aria-label="Home"
						class="group inline-flex items-center gap-3 text-stone-200"
					>
						<svg
							class="h-7 w-9 text-blue-500 transition-colors group-hover:text-blue-400"
							viewBox="0 0 44 32"
							role="img"
							aria-label="thewebbeckons logo"
						>
							<path
								d="M18 7 7 16.5 18 26"
								fill="none"
								stroke="currentColor"
								stroke-width="4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M26 5 37 14.5 26 24"
								fill="none"
								stroke="currentColor"
								stroke-width="4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<span
							class="sr-only sm:not-sr-only sm:text-xs sm:uppercase sm:tracking-[0.24em] sm:text-stone-400"
							>thewebbeckons</span
						>
					</NuxtLink>

					<div
						class="flex items-center gap-5 text-xs uppercase tracking-[0.22em] text-stone-500"
					>
						<NuxtLink
							to="/"
							class="transition-colors hover:text-stone-100"
							>Home</NuxtLink
						>
						<NuxtLink
							to="/blog"
							class="transition-colors hover:text-stone-100"
							>Blog</NuxtLink
						>
						<a
							href="https://github.com/thewebbeckons"
							target="_blank"
							rel="noreferrer"
							class="transition-colors hover:text-blue-400"
							>GitHub</a
						>
					</div>
				</nav>
			</header>

			<NuxtPage />
			<footer
				ref="footer"
				class="border-t border-white/5"
			>
				<div
					class="mx-auto grid w-full max-w-5xl gap-10 px-6 py-14 font-mono transition-all duration-700 ease-out sm:grid-cols-[1fr_auto] sm:px-10"
					:class="
						footerVisible
							? 'translate-y-0 opacity-100'
							: 'translate-y-8 opacity-0'
					"
				>
					<div>
						<p class="text-xs uppercase tracking-[0.28em] text-blue-400">
							thewebbeckons
						</p>
						<p class="mt-4 max-w-xl text-sm leading-7 text-stone-500">
							Builting quietly with
							<a
								href="https://nuxt.com"
								target="_blank"
								rel="noreferrer"
								class="transition-colors hover:text-green-400"
							>
								Nuxt</a
							>,
							<a
								href="https://tailwindcss.com"
								target="_blank"
								rel="noreferrer"
								class="transition-colors hover:text-blue-400"
							>
								Tailwind CSS</a
							>,
							<a
								href="https://supabase.com"
								target="_blank"
								rel="noreferrer"
								class="transition-colors hover:text-green-400"
							>
								Supabase</a
							>, and
							<a
								href="https://cloudflare.com"
								target="_blank"
								rel="noreferrer"
								class="transition-colors hover:text-orange-400"
							>
								Cloudflare</a
							>.
						</p>
					</div>

					<div
						class="flex items-end gap-5 text-xs uppercase tracking-[0.22em] text-stone-500"
					>
						<a
							href="https://github.com/thewebbeckons"
							target="_blank"
							rel="noreferrer"
							class="transition-colors hover:text-blue-400"
							>GitHub</a
						>
						<a
							href="#top"
							class="transition-colors hover:text-stone-100"
							>Top</a
						>
					</div>
				</div>
			</footer>
		</div>
	</UApp>
</template>
