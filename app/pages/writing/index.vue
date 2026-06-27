<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
})

const formatDate = (date: Date | string) => {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

useHead({
  title: 'Writing',
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-20">
    <RevealSection>
      <header class="mb-16">
        <h1 class="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-text">Writing</h1>
        <p class="text-lg text-text-muted leading-relaxed max-w-2xl">
          Thoughts on design, development, and building products that matter.
        </p>
      </header>
    </RevealSection>

    <div class="space-y-6">
      <RevealSection v-for="(post, i) in posts" :key="post.path" :delay="i * 60">
        <article class="group">
          <NuxtLink :to="post.path" class="block p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface hover:shadow-sm active:scale-[0.99] transition-all duration-300">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div class="flex-1">
                <h2 class="text-xl font-medium group-hover:text-accent transition-colors duration-300 mb-2">
                  {{ post.title }}
                </h2>
                <p v-if="post.description" class="text-text-muted leading-relaxed mb-4 line-clamp-2">
                  {{ post.description }}
                </p>
                <div class="flex flex-wrap items-center gap-3">
                  <span v-for="tag in post.tags" :key="tag" class="text-xs px-3 py-1 rounded-full bg-accent-muted text-accent border border-accent/10">
                    {{ tag }}
                  </span>
                </div>
              </div>
              <div class="text-sm text-text-muted shrink-0 md:text-right">
                {{ formatDate(post.date) }}
              </div>
            </div>
          </NuxtLink>
        </article>
      </RevealSection>
    </div>

    <div v-if="!posts?.length" class="text-center py-20">
      <p class="text-text-muted">No posts yet. Check back soon!</p>
    </div>
  </div>
</template>