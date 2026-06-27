<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => queryCollection('blog')
  .select('title', 'description', 'date', 'path')
  .where('draft', '=', false)
  .order('date', 'DESC')
  .all())

const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}

useHead({
  title: 'Blog · thewebbeckons',
})
</script>

<template>
  <main class="mx-auto min-h-screen w-full max-w-5xl px-6 pb-24 pt-32 sm:px-10">
    <p class="font-mono text-xs uppercase tracking-[0.28em] text-blue-400">Blog</p>
    <h1 class="mt-5 font-mono text-5xl font-semibold leading-none text-stone-50 sm:text-7xl">Writing</h1>

    <div class="mt-14 divide-y divide-white/10 border-y border-white/10">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="group grid gap-4 py-8 font-mono transition-colors hover:bg-white/[0.025] sm:grid-cols-[12rem_1fr]"
      >
        <time class="text-xs uppercase tracking-[0.2em] text-stone-500">{{ formatDate(post.date) }}</time>
        <span>
          <span class="block text-2xl font-semibold leading-tight text-stone-100 group-hover:text-blue-300">{{ post.title }}</span>
          <span class="mt-3 block text-sm leading-7 text-stone-400">{{ post.description }}</span>
        </span>
      </NuxtLink>
    </div>
  </main>
</template>
