<script setup lang="ts">
interface Props {
  title: string
  description?: string
  action?: {
    label: string
    to: string
  }
}
const props = withDefaults(defineProps<Props>(), {
  description: '',
  action: undefined,
})
</script>

<template>
  <header class="mb-16">
    <div class="flex items-end justify-between gap-4 mb-4">
      <h2 class="text-2xl font-medium tracking-tight">{{ title }}</h2>
      <NuxtLink v-if="action" :to="action.to" class="text-sm text-text-muted hover:text-accent transition-colors duration-200 underline underline-offset-2">
        {{ action.label }}
      </NuxtLink>
    </div>
    <div class="w-16 h-px bg-accent" />
    <p v-if="description" class="mt-6 text-lg text-text-muted max-w-2xl leading-relaxed">{{ description }}</p>
  </header>
</template>