export function useReveal(options?: { threshold?: number, rootMargin?: string, delay?: number }) {
  const target = ref<HTMLElement | null>(null)
  const isRevealed = ref(false)

  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isRevealed.value = true
        stop()
      }
    },
    {
      threshold: options?.threshold ?? 0.1,
      rootMargin: options?.rootMargin ?? '0px 0px -40px 0px',
    },
  )

  const style = computed(() => ({
    transitionDelay: `${options?.delay ?? 0}ms`,
  }))

  return { target, isRevealed, style }
}
