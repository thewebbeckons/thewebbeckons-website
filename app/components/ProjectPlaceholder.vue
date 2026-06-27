<script setup lang="ts">
interface Props {
  title: string
  type?: 'web' | 'mobile' | 'api' | 'design'
}
const props = withDefaults(defineProps<Props>(), {
  type: 'web',
})

const initials = computed(() => props.title.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2))

const typeIcons = {
  web: '<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 11h18M3 7h18M3 15h18" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  mobile: '<rect x="5" y="2" width="14" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',
  api: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  design: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" fill="none" stroke="currentColor" stroke-width="1.5"/>',
}
</script>

<template>
  <div class="relative aspect-[4/3] bg-border flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:bg-border/80">
    <svg class="w-16 h-16 text-text-muted/50 transition-colors duration-300 group-hover:text-accent/50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <template v-html="typeIcons[type]" />
    </svg>
    <div class="absolute bottom-4 right-4 px-3 py-1.5 rounded bg-surface/90 backdrop-blur text-xs font-medium text-text-muted border">
      {{ initials }}
    </div>
  </div>
</template>