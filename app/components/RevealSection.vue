<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  delay?: number
  threshold?: number
  as?: string | Component
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  threshold: 0.1,
  as: 'div',
})

const { target, isRevealed, style } = useReveal({ delay: props.delay, threshold: props.threshold })
</script>

<template>
  <component :is="as" ref="target" class="reveal" :class="{ revealed: isRevealed }" :style="style">
    <slot />
  </component>
</template>