<script setup lang="ts">
const route = useRoute()
const path = `/blog/${route.params.slug}`

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () => queryCollection('blog')
  .where('path', '=', path)
  .first())

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useHead({
  title: `${post.value.title} · thewebbeckons`,
  meta: [
    { name: 'description', content: post.value.description },
  ],
})
</script>

<template>
  <main class="mx-auto min-h-screen w-full max-w-3xl px-6 pb-24 pt-32 sm:px-10">
    <NuxtLink to="/blog" class="font-mono text-xs uppercase tracking-[0.22em] text-blue-400 hover:text-blue-300">
      Back to blog
    </NuxtLink>

    <ContentRenderer v-if="post" :value="post" class="prose mt-10" />
  </main>
</template>
