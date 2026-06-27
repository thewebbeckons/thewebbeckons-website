<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: page.value.title || 'Page',
  meta: [
    { name: 'description', content: page.value.description || '' },
  ],
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-20">
    <RevealSection>
      <article class="max-w-3xl mx-auto prose">
        <ContentRenderer :value="page" />
      </article>
    </RevealSection>
  </div>
</template>