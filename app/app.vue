<template>
  <div class="min-h-screen bg-bg text-text transition-colors duration-300 selection:bg-accent/20 selection:text-text">
    <NuxtRouteAnnouncer />
    <AppNav />
    <main class="min-h-[calc(100vh-200px)]">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s · thewebbeckons',
  meta: [
    { name: 'description', content: 'Personal website of Jesse, a front-end developer from Toronto.' },
  ],
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
