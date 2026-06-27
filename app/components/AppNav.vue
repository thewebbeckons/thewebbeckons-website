<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleDark = () => colorMode.preference = isDark.value ? 'light' : 'dark'

const route = useRoute()
const isWriting = computed(() => route.path.startsWith('/writing'))

const { y: scrollY } = useScroll(window)
const isScrolled = computed(() => scrollY.value > 10)
</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b bg-surface/80 backdrop-blur-sm transition-all duration-300"
    :class="{ 'shadow-sm border-accent/5': isScrolled }"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="group flex items-center gap-2 text-text font-medium tracking-tight hover:text-accent transition-colors duration-200"
      >
        <span class="text-lg font-light transition-transform duration-300 group-hover:-translate-y-px">/</span>
        <span class="text-sm tracking-wide transition-all duration-300" :class="{ 'opacity-70': !isScrolled, 'opacity-100': isScrolled }">thewebbeckons 😊</span>
      </NuxtLink>
      <div class="flex items-center gap-6 text-sm text-text-muted">
        <NuxtLink
          to="/"
          class="relative hover:text-accent transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-200"
          :class="route.path === '/' ? 'text-accent after:w-full' : ''"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/writing"
          class="relative hover:text-accent transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-200"
          :class="isWriting ? 'text-accent after:w-full' : ''"
        >
          Writing
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="relative hover:text-accent transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-200"
          :class="route.path === '/about' ? 'text-accent after:w-full' : ''"
        >
          About
        </NuxtLink>
        <button
          @click="toggleDark"
          class="p-2 rounded-lg hover:bg-border transition-all duration-200 active:scale-90"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <UIcon
            :name="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
            class="w-4 h-4 transition-transform duration-500"
            :style="{ transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)' }"
          />
        </button>
      </div>
    </div>
  </nav>
</template>