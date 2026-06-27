<script setup lang="ts">
	const { data: posts } = await useAsyncData("home-blog-posts", () =>
		queryCollection("blog")
			.select("title", "description", "date", "path")
			.where("draft", "=", false)
			.order("date", "DESC")
			.limit(3)
			.all(),
	);

	const formatDate = (date: string | Date) => {
		return new Intl.DateTimeFormat("en", {
			month: "short",
			day: "numeric",
			year: "numeric",
			timeZone: "UTC",
		}).format(new Date(date));
	};
</script>

<template>
	<main id="top">
		<section
			class="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pb-20 pt-28 sm:px-10"
		>
			<p
				class="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-blue-400"
			>
				Web Developer - Toronto 🇨🇦
			</p>

			<h1
				class="max-w-3xl font-mono text-5xl font-semibold leading-none tracking-normal text-stone-50 sm:text-7xl"
			>
				Hey, I'm Jesse
			</h1>

			<p
				class="mt-8 max-w-2xl font-mono text-base leading-8 text-stone-300 sm:text-lg"
			>
				The web has always seemed like it beckons to me, whether I'm building
				websites, setting up servers, or following the thread between the two.
			</p>
		</section>

		<section
			id="blog"
			class="border-t border-white/5"
		>
			<div class="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
				<div class="mb-8 flex items-end justify-between gap-6">
					<div>
						<p
							class="font-mono text-xs uppercase tracking-[0.28em] text-blue-400"
						>
							Blog
						</p>
						<h2 class="mt-4 font-mono text-3xl font-semibold text-stone-50">
							Recent writing
						</h2>
					</div>

					<UButton
						to="/blog"
						variant="ghost"
						color="primary"
						class="hidden sm:inline-flex"
					>
						All posts →
					</UButton>
				</div>

				<div class="divide-y divide-white/10 border-y border-white/10">
					<NuxtLink
						v-for="post in posts"
						:key="post.path"
						:to="post.path"
						class="group grid gap-4 px-4 py-7 font-mono transition-colors hover:bg-white/[0.025] sm:grid-cols-[12rem_1fr]"
					>
						<time class="text-xs uppercase tracking-[0.2em] text-stone-500">
							{{ formatDate(post.date) }}
						</time>
						<div>
							<h3
								class="text-2xl font-semibold leading-tight text-stone-100 group-hover:text-blue-300"
							>
								{{ post.title }}
							</h3>
							<p class="mt-3 text-sm leading-7 text-stone-400">
								{{ post.description }}
							</p>
						</div>
					</NuxtLink>
				</div>

				<UButton
					to="/blog"
					variant="ghost"
					color="primary"
					class="mt-8 sm:hidden"
				>
					All posts →
				</UButton>
			</div>
		</section>
	</main>
</template>
