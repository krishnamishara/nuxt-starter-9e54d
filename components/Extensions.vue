<script setup>
defineProps({
  title: String,
  subtitle: String,
  items: Array,
});
</script>

<template>
  <section id="extensions" class="section-padding">
    <Container>
      <Reveal class="text-center max-w-3xl mx-auto mb-16">
        <span class="section-label">Extensions & Tools</span>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{{ title }}</h2>
        <p class="mt-4 text-lg text-zinc-400 leading-relaxed">{{ subtitle }}</p>
      </Reveal>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <Reveal
          v-for="(ext, index) in items"
          :key="ext.title"
          :delay="index * 80"
          class="group"
        >
          <div class="h-full glass-card rounded-2xl p-6 transition-all duration-300 hover:border-[#f26322]/20 relative overflow-hidden">
            <div class="absolute top-4 right-4">
              <span class="px-2.5 py-1 text-xs font-bold tracking-wide text-emerald-400 uppercase rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Free
              </span>
            </div>

            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-[#f26322]/10 mb-4">
              <Icon :name="ext.icon" size="24" class="text-[#f26322]" />
            </div>

            <h3 class="text-lg font-bold text-white pr-20">{{ ext.title }}</h3>
            <p class="mt-2 text-sm text-zinc-400 leading-relaxed">{{ ext.description }}</p>

            <div class="flex items-center justify-between mt-5 pt-5 border-t border-white/5">
              <span class="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                <Icon name="i-lucide-download" size="14" />
                {{ ext.downloads }}
              </span>
              <a
                :href="ext.url"
                class="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-[#f26322] transition-colors"
              >
                Get it
                <Icon name="i-lucide-arrow-right" size="14" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
</template>
