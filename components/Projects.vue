<script setup>
defineProps({
  title: String,
  subtitle: String,
  items: Array,
});
</script>

<template>
  <section id="projects" class="section-padding section-alt">
    <Container>
      <Reveal class="text-center max-w-3xl mx-auto mb-16">
        <span class="section-label">Projects</span>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{{ title }}</h2>
        <p class="mt-4 text-lg text-zinc-400 leading-relaxed">{{ subtitle }}</p>
      </Reveal>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <Reveal
          v-for="(project, index) in items"
          :key="project.title"
          :delay="index * 80"
          class="group"
        >
          <div class="h-full flex flex-col glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#f26322]/20">
            <div
              class="h-40 bg-gradient-to-br flex items-center justify-center"
              :class="project.color"
            >
              <Icon name="i-lucide-folder-open" size="40" class="text-white/20 group-hover:text-white/40 transition-colors duration-300" />
            </div>

            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-lg font-bold text-white group-hover:text-[#f26322] transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-zinc-400"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="flex gap-4 mt-5 pt-5 border-t border-white/5">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  class="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-[#f26322] transition-colors"
                >
                  <Icon name="i-lucide-external-link" size="14" />
                  Live
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  class="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-[#f26322] transition-colors"
                >
                  <Icon name="i-simple-icons-github" size="14" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
</template>
