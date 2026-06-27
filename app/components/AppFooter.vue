<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t transition-colors duration-300">
    <div class="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div class="max-w-6xl mx-auto px-6 py-10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
        <span class="tracking-wide">© {{ year }} thewebbeckons · Toronto, Canada</span>
        <div class="flex items-center gap-4">
          <NuxtLink
            to="https://github.com"
            target="_blank"
            rel="noopener"
            class="hover:text-accent hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <UIcon name="i-simple-icons-github" class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink
            to="https://linkedin.com"
            target="_blank"
            rel="noopener"
            class="hover:text-accent hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <UIcon name="i-simple-icons-linkedin" class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink
            to="https://bsky.app"
            target="_blank"
            rel="noopener"
            class="hover:text-accent hover:scale-110 transition-all duration-200"
            aria-label="Bluesky"
          >
            <UIcon name="i-simple-icons-bluesky" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>