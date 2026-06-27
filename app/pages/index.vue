<script setup lang="ts">
const projects = [
  { title: 'Worths', description: 'A mindful approach to personal finance', tags: ['Nuxt', 'Dexie.js'], image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60' },
  { title: 'Supapoker', description: 'Social gaming with friends', tags: ['Nuxt', 'Convex'], image: 'https://images.unsplash.com/photo-1511193311914-0346f16af6db?w=800&auto=format&fit=crop&q=60' },
  { title: 'Beckcraft', description: 'Handcrafted goods marketplace', tags: ['Nuxt', 'Medusa'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60' },
]

const experience = [
  { role: 'Front-End Developer II', company: 'Farm Boy', period: 'Present', current: true },
  { role: 'Front-End Developer I', company: 'Farm Boy', period: '2020 — 2023', current: false },
  { role: 'Web Developer', company: 'SignCast Media', period: '2016 — 2020', current: false },
]

const { data: articles } = await useAsyncData('featured-articles', () => {
  return queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all()
})

const formatDate = (date: Date | string) => {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const { copy } = useClipboard()
const email = 'jesse@example.com'
const emailCopied = ref(false)
let copyTimer: number | null = null

const handleCopy = () => {
  copy(email)
  emailCopied.value = true
  if (copyTimer) clearTimeout(copyTimer)
  copyTimer = setTimeout(() => { emailCopied.value = false }, 1500)
}

onUnmounted(() => {
  if (copyTimer) clearTimeout(copyTimer)
})
</script>

<template>
  <div>
    <!-- Hero -->
    <header class="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
      <HeroGrid />
      <div class="relative z-10 max-w-2xl">
        <RevealSection>
          <div class="flex items-center gap-2 mb-8">
            <div class="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span class="text-sm text-text-muted">Available for new projects</span>
          </div>
        </RevealSection>
        <RevealSection :delay="100">
          <h1 class="text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-8 text-text">
            Hello, I'm <span class="text-accent">Jesse</span>. I build thoughtful web experiences.
          </h1>
        </RevealSection>
        <RevealSection :delay="200">
          <p class="text-lg text-text-muted leading-relaxed mb-10">
            A front-end developer from Toronto who believes great software should feel natural.
            I turn complex problems into simple, beautiful solutions.
          </p>
        </RevealSection>
        <div class="flex flex-wrap gap-2">
          <RevealSection
            v-for="(s, i) in ['Nuxt', 'TypeScript', 'Tailwind', 'Figma', 'Supabase', 'DevOps']"
            :key="s"
            :delay="300 + i * 60"
            as="span"
          >
            <span class="px-4 py-2 rounded-full bg-surface border text-sm text-text-muted hover:border-accent hover:text-accent hover:shadow-[0_0_12px_var(--color-accent-muted)] transition-all duration-300 cursor-default">
              {{ s }}
            </span>
          </RevealSection>
        </div>
      </div>
    </header>

    <!-- Work -->
    <section id="work" class="max-w-6xl mx-auto px-6 py-20">
      <RevealSection>
        <SectionHead title="Selected Work" description="A few projects I've worked on recently." />
      </RevealSection>
      <div class="space-y-20">
        <RevealSection v-for="(p, i) in projects" :key="p.title" :delay="i * 150">
          <article class="group">
            <div class="grid md:grid-cols-2 gap-10 items-center">
              <div class="relative rounded-2xl overflow-hidden border bg-surface group-hover:shadow-xl transition-all duration-500">
                <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 ring-1 ring-inset ring-accent/20" />
                <NuxtImg :src="p.image" :alt="p.title" class="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div class="space-y-4">
                <div class="flex gap-2">
                  <span v-for="t in p.tags" :key="t" class="text-xs px-3 py-1.5 rounded-full bg-accent-muted text-accent border border-accent/10">
                    {{ t }}
                  </span>
                </div>
                <h3 class="text-2xl font-medium group-hover:text-accent transition-colors duration-300">{{ p.title }}</h3>
                <p class="text-text-muted leading-relaxed">{{ p.description }}</p>
                <div class="pt-4 flex items-center gap-2 text-accent text-sm font-medium">
                  <span class="border-b border-transparent group-hover:border-accent transition-all duration-300">View project</span>
                  <UIcon name="i-lucide-arrow-right" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </article>
        </RevealSection>
      </div>
    </section>

    <!-- Writing & Experience -->
    <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20">
      <section id="writing">
        <RevealSection>
          <SectionHead title="Writing" :action="{ label: 'View all', to: '/writing' }" />
        </RevealSection>
        <div class="space-y-4">
          <RevealSection v-for="(a, i) in articles" :key="a.path" :delay="i * 80">
            <NuxtLink :to="a.path" class="group block p-5 rounded-xl border border-transparent hover:border-border hover:bg-surface active:scale-[0.98] transition-all duration-300">
              <h3 class="text-lg font-medium group-hover:text-accent transition-colors duration-300">{{ a.title }}</h3>
              <p class="text-sm text-text-muted mt-1 line-clamp-2">{{ a.description }}</p>
              <p class="text-xs text-text-muted mt-3">{{ formatDate(a.date) }}, {{ new Date(a.date).getFullYear() }}</p>
            </NuxtLink>
          </RevealSection>
        </div>
      </section>

      <section id="experience">
        <RevealSection>
          <SectionHead title="Experience" />
        </RevealSection>
        <div class="space-y-4">
          <RevealSection v-for="(e, i) in experience" :key="e.role" :delay="i * 80">
            <div class="group p-5 rounded-xl border border-transparent hover:border-border hover:bg-surface active:scale-[0.98] transition-all duration-300">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="font-medium transition-colors duration-300" :class="e.current ? 'text-accent' : 'text-text group-hover:text-accent'">{{ e.role }}</h3>
                  <p class="text-sm text-text-muted mt-0.5">{{ e.company }}</p>
                </div>
                <span class="text-xs px-3 py-1.5 rounded-full border transition-all duration-300" :class="e.current ? 'bg-accent-muted text-accent border-accent/10' : 'bg-surface text-text-muted border-border group-hover:bg-accent-muted group-hover:text-accent group-hover:border-accent/10'">
                  {{ e.period }}
                </span>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>

    <!-- Contact -->
    <section id="contact" class="max-w-6xl mx-auto px-6 py-20">
      <RevealSection>
        <div class="relative overflow-hidden rounded-2xl border bg-surface p-14 text-center">
          <div class="relative">
            <h2 class="text-3xl font-medium mb-4 text-text">Let's build something together</h2>
            <p class="text-text-muted mb-10 max-w-md mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Drop me a line and let's chat.
            </p>
            <div
              class="inline-flex items-center gap-3 px-6 py-4 rounded-full border bg-bg text-accent hover:border-accent hover:bg-accent-muted active:scale-[0.97] transition-all duration-300 cursor-pointer"
              @click="handleCopy"
            >
              <UIcon name="i-lucide-mail" class="w-5 h-5" />
              <span class="font-medium">{{ email }}</span>
              <button class="p-1.5 hover:bg-accent-muted rounded-full transition-colors duration-300">
                <UIcon :name="emailCopied ? 'i-lucide-check' : 'i-lucide-copy'" class="w-4 h-4 transition-all duration-300" />
              </button>
            </div>
            <div class="flex justify-center gap-3 mt-10">
              <UButton icon="i-simple-icons-github" variant="ghost" color="neutral" class="hover:text-accent hover:scale-110 active:scale-90 transition-all duration-200" />
              <UButton icon="i-simple-icons-linkedin" variant="ghost" color="neutral" class="hover:text-accent hover:scale-110 active:scale-90 transition-all duration-200" />
              <UButton icon="i-simple-icons-bluesky" variant="ghost" color="neutral" class="hover:text-accent hover:scale-110 active:scale-90 transition-all duration-200" />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  </div>
</template>