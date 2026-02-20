<script setup>
defineProps({
  title: String,
  subtitle: String,
  items: Array,
});
</script>

<template>
  <section id="testimonials" class="section-padding section-alt">
    <Container>
      <Reveal class="text-center max-w-3xl mx-auto mb-16">
        <span class="section-label">Testimonials</span>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{{ title }}</h2>
        <p class="mt-4 text-lg text-zinc-400 leading-relaxed">{{ subtitle }}</p>
      </Reveal>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <Reveal
          v-for="(item, index) in items"
          :key="item.author?.name"
          :delay="index * 80"
          as="blockquote"
          class="flex flex-col h-full"
        >
          <div class="h-full glass-card rounded-2xl p-6 transition-all duration-300 hover:border-[#f26322]/20 flex flex-col">
            <div class="flex gap-1 mb-4">
              <Icon
                v-for="n in 5"
                :key="n"
                name="i-lucide-star"
                size="16"
                class="text-amber-400"
              />
            </div>

            <p class="flex-1 text-zinc-300 text-sm leading-relaxed">"{{ item.quote }}"</p>

            <footer v-if="item.author" class="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
              <NuxtImg
                v-if="item.author.avatar"
                :src="item.author.avatar"
                :alt="item.author.name"
                width="48"
                height="48"
                class="object-cover w-12 h-12 rounded-full ring-2 ring-white/10"
              />
              <div>
                <p class="font-semibold text-white text-sm">{{ item.author.name }}</p>
                <p class="text-xs text-zinc-500 mt-0.5">{{ item.author.title }}</p>
              </div>
            </footer>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
</template>
