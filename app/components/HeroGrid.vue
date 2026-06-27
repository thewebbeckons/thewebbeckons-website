<script setup lang="ts">
const dotSpacing = 40
const cols = 32
const rows = 18
const dots: { x: number, y: number }[] = []

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    dots.push({ x: c * dotSpacing, y: r * dotSpacing })
  }
}
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
    <svg
      class="w-full h-full opacity-[0.06] dark:opacity-[0.08]"
      :style="{ animation: 'float 30s ease-in-out infinite' }"
      :viewBox="`0 0 ${cols * dotSpacing} ${rows * dotSpacing}`"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="hero-fade" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="currentColor" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
        </radialGradient>
        <mask id="hero-mask">
          <rect :width="cols * dotSpacing" :height="rows * dotSpacing" fill="url(#hero-fade)" />
        </mask>
      </defs>
      <rect :width="cols * dotSpacing" :height="rows * dotSpacing" fill="none" mask="url(#hero-mask)">
        <circle
          v-for="(d, i) in dots"
          :key="i"
          :cx="d.x"
          :cy="d.y"
          r="1.5"
          class="fill-accent"
        />
      </rect>
    </svg>
  </div>
</template>