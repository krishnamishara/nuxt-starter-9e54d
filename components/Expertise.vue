<script setup>
defineProps({
  title: String,
  subtitle: String,
  items: Array,
});
</script>

<template>
  <section id="expertise" class="section-padding section-alt">
    <Container>
      <Reveal class="text-center max-w-3xl mx-auto mb-16">
        <span class="section-label">Expertise</span>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{{ title }}</h2>
        <p class="mt-4 text-lg text-zinc-400 leading-relaxed">{{ subtitle }}</p>
      </Reveal>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <Reveal
          v-for="(item, index) in items"
          :key="item.title"
          :delay="index * 80"
          class="group"
        >
          <div class="h-full glass-card rounded-2xl p-6 transition-all duration-300 hover:border-[#f26322]/20">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-[#f26322]/10 text-[#f26322] mb-4">
              <Icon :name="item.icon" size="24" />
            </div>
            <h3 class="text-lg font-bold text-white">{{ item.title }}</h3>
            <p class="mt-3 text-sm text-zinc-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
</template>
