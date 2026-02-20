<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  description2: String,
  stats: Array,
  skills: Array,
});
</script>

<template>
  <section id="about" class="section-padding">
    <Container>
      <Reveal class="text-center max-w-3xl mx-auto mb-16">
        <span class="section-label">About</span>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{{ title }}</h2>
        <p class="mt-4 text-lg text-zinc-400 leading-relaxed">{{ subtitle }}</p>
      </Reveal>

      <div class="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start max-w-6xl mx-auto">
        <div class="space-y-6">
          <Reveal>
            <p class="text-lg text-zinc-300 leading-relaxed section-prose text-justify">{{ description }}</p>
          </Reveal>
          <Reveal :delay="100">
            <p class="text-lg text-zinc-400 leading-relaxed section-prose text-justify">{{ description2 }}</p>
          </Reveal>

          <Reveal :delay="200" class="pt-4">
            <h3 class="mb-4 text-sm font-semibold tracking-widest text-zinc-500 uppercase">Tech & Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skills"
                :key="skill"
                class="px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 text-zinc-300 border border-white/5 hover:border-[#f26322]/30 hover:text-[#f26322]/90 transition-colors duration-200 cursor-default"
              >
                {{ skill }}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal :delay="150" class="grid grid-cols-2 gap-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="glass-card rounded-2xl p-6 text-center hover:glow-indigo transition-all duration-300 group"
          >
            <div class="text-4xl font-black lg:text-5xl text-[#f26322]">{{ stat.value }}</div>
            <div class="mt-2 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">{{ stat.label }}</div>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
</template>
