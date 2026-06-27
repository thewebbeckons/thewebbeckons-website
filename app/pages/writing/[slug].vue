<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const formatDate = (date: Date | string) => {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

const readingTime = computed(() => {
  const raw = JSON.stringify(post.value)
  const words = raw.split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
})

useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description || post.value.title },
  ],
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-20">
    <RevealSection>
      <header class="mb-12 max-w-3xl mx-auto">
        <NuxtLink
          to="/writing"
          class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-300 mb-8 group"
        >
          <UIcon name="i-lucide-arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to writing
        </NuxtLink>

        <h1 class="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-text">{{ post.title }}</h1>

        <div class="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-6">
          <time :datetime="post.date?.toString()">{{ formatDate(post.date) }}</time>
          <span class="text-border">·</span>
          <span>{{ readingTime }} min read</span>
          <span v-if="post.tags?.length" class="flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 rounded-full bg-accent-muted text-accent border border-accent/10">
              {{ tag }}
            </span>
          </span>
        </div>

        <p v-if="post.description" class="text-lg text-text-muted leading-relaxed">
          {{ post.description }}
        </p>
      </header>
    </RevealSection>

    <RevealSection :delay="100">
      <article class="max-w-3xl mx-auto prose">
        <ContentRenderer :value="post" />
      </article>
    </RevealSection>
  </div>
</template>

<style>
.prose h1 {
  display: none;
}
</style>