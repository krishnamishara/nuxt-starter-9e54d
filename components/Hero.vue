<script setup>
const props = defineProps({
  greeting: String,
  name: String,
  roles: Array,
  description: String,
  cta: Object,
  secondary: Object,
});

const currentRoleIndex = ref(0);
const showRole = ref(true);

onMounted(() => {
  setInterval(() => {
    showRole.value = false;
    setTimeout(() => {
      currentRoleIndex.value =
        (currentRoleIndex.value + 1) % (props.roles?.length || 1);
      showRole.value = true;
    }, 400);
  }, 3500);
});
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden" style="background:#000;">

    <!-- Pure CSS parallax pixel stars — 3 depth layers -->
    <div class="star-field" aria-hidden="true">
      <div class="star-layer star-layer-1"></div>
      <div class="star-layer star-layer-2"></div>
      <div class="star-layer star-layer-3"></div>
    </div>

    <Container class="relative z-10 pt-32 pb-20">
      <div class="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <!-- Left: Content -->
        <div class="flex-1 max-w-2xl">
          <p
            class="text-lg font-medium tracking-wide text-indigo-400 uppercase animate-fade-in-up md:text-xl"
          >
            {{ greeting }}
          </p>

          <h1
            class="mt-4 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up delay-100"
          >
            <span class="text-white">{{ name?.split(' ')[0] }}</span><span class="gradient-text ml-2 sm:ml-3">{{ name?.split(' ').slice(1).join(' ') }}</span>
          </h1>

          <div class="flex items-center gap-3 mt-6 animate-fade-in-up delay-200">
            <span class="w-12 h-[2px] bg-indigo-500"></span>
            <Transition
              enter-active-class="transition-all duration-400 ease-out"
              enter-from-class="translate-y-4 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-4 opacity-0"
              mode="out-in"
            >
              <span
                :key="currentRoleIndex"
                class="text-xl font-medium text-zinc-300 md:text-2xl"
              >
                {{ roles?.[currentRoleIndex] }}
              </span>
            </Transition>
          </div>

          <p
            class="max-w-xl mt-8 text-lg leading-relaxed text-zinc-400 animate-fade-in-up delay-300 md:text-xl"
          >
            {{ description }}
          </p>

          <div class="flex flex-wrap gap-4 mt-10 animate-fade-in-up delay-400">
            <a v-if="cta" :href="cta.url" class="btn-dark-glow">
              {{ cta.label }}
              <Icon name="i-lucide-arrow-right" size="18" />
            </a>
            <a v-if="secondary" :href="secondary.url" class="btn-dark-glow">
              {{ secondary.label }}
              <Icon name="i-lucide-eye" size="18" />
            </a>
          </div>
        </div>

        <!-- Right: Video -->
        <div class="flex-1 w-full max-w-md lg:max-w-lg">
          <div class="rounded-lg overflow-hidden bg-zinc-800/50 ring-1 ring-white/5 aspect-[3/4]">
            <video
              src="/images/home-vid.mp4"
              class="w-full h-full object-cover object-center"
              autoplay
              muted
              loop
              playsinline
              aria-label="Intro video"
            />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span class="text-xs font-medium tracking-widest text-zinc-500 uppercase">Scroll</span>
        <Icon name="i-lucide-chevron-down" size="20" class="text-zinc-500 animate-bounce-slow" />
      </div>
    </Container>
  </section>
</template>

<style scoped>
/* ─── Parallax star field ─────────────────────────────────────────── */

.star-field {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.star-layer {
  position: absolute;
  inset: 0;
  background-repeat: repeat;
  will-change: background-position;
}

/*
  Layer 1 — tiny far stars (1 px, 400 px tile, slowest drift)
  20 dots spread across a 400×400 SVG tile
*/
.star-layer-1 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Ccircle cx='34' cy='67' r='1' fill='white' opacity='.9'/%3E%3Ccircle cx='123' cy='234' r='1' fill='white' opacity='.7'/%3E%3Ccircle cx='289' cy='45' r='1' fill='white' opacity='.8'/%3E%3Ccircle cx='67' cy='345' r='1' fill='white' opacity='.6'/%3E%3Ccircle cx='198' cy='123' r='1' fill='white' opacity='.9'/%3E%3Ccircle cx='345' cy='278' r='1' fill='white' opacity='.7'/%3E%3Ccircle cx='12' cy='178' r='1' fill='white' opacity='.8'/%3E%3Ccircle cx='267' cy='89' r='1' fill='white' opacity='.6'/%3E%3Ccircle cx='156' cy='356' r='1' fill='white' opacity='.9'/%3E%3Ccircle cx='78' cy='23' r='1' fill='white' opacity='.7'/%3E%3Ccircle cx='312' cy='167' r='1' fill='white' opacity='.8'/%3E%3Ccircle cx='89' cy='267' r='1' fill='white' opacity='.6'/%3E%3Ccircle cx='234' cy='134' r='1' fill='white' opacity='.9'/%3E%3Ccircle cx='167' cy='389' r='1' fill='white' opacity='.7'/%3E%3Ccircle cx='45' cy='145' r='1' fill='white' opacity='.8'/%3E%3Ccircle cx='278' cy='234' r='1' fill='white' opacity='.6'/%3E%3Ccircle cx='112' cy='56' r='1' fill='white' opacity='.9'/%3E%3Ccircle cx='356' cy='123' r='1' fill='white' opacity='.7'/%3E%3Ccircle cx='23' cy='312' r='1' fill='white' opacity='.8'/%3E%3Ccircle cx='189' cy='267' r='1' fill='white' opacity='.6'/%3E%3C/svg%3E");
  background-size: 400px 400px;
  animation: star-drift-1 120s linear infinite, twinkle 8s ease-in-out infinite alternate;
}

/*
  Layer 2 — medium stars (1.5 px, 600 px tile, medium drift)
  10 dots spread across a 600×600 SVG tile
*/
.star-layer-2 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Ccircle cx='78' cy='145' r='1.5' fill='white' opacity='.85'/%3E%3Ccircle cx='345' cy='67' r='1.5' fill='white' opacity='.70'/%3E%3Ccircle cx='189' cy='412' r='1.5' fill='white' opacity='.90'/%3E%3Ccircle cx='523' cy='234' r='1.5' fill='white' opacity='.75'/%3E%3Ccircle cx='267' cy='534' r='1.5' fill='white' opacity='.85'/%3E%3Ccircle cx='89' cy='312' r='1.5' fill='white' opacity='.70'/%3E%3Ccircle cx='456' cy='89' r='1.5' fill='white' opacity='.90'/%3E%3Ccircle cx='134' cy='467' r='1.5' fill='white' opacity='.75'/%3E%3Ccircle cx='389' cy='345' r='1.5' fill='white' opacity='.85'/%3E%3Ccircle cx='234' cy='178' r='1.5' fill='white' opacity='.70'/%3E%3C/svg%3E");
  background-size: 600px 600px;
  animation: star-drift-2 80s linear infinite, twinkle 5s ease-in-out infinite alternate;
  animation-delay: -15s, -2s;
}

/*
  Layer 3 — large near stars (2.5 px, 900 px tile, fastest drift)
  6 dots spread across a 900×900 SVG tile
*/
.star-layer-3 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Ccircle cx='234' cy='345' r='2.5' fill='white' opacity='.95'/%3E%3Ccircle cx='678' cy='123' r='2.5' fill='white' opacity='.80'/%3E%3Ccircle cx='456' cy='678' r='2.5' fill='white' opacity='.90'/%3E%3Ccircle cx='123' cy='567' r='2.5' fill='white' opacity='.75'/%3E%3Ccircle cx='789' cy='234' r='2.5' fill='white' opacity='.95'/%3E%3Ccircle cx='345' cy='789' r='2.5' fill='white' opacity='.80'/%3E%3C/svg%3E");
  background-size: 900px 900px;
  animation: star-drift-3 50s linear infinite, twinkle 3s ease-in-out infinite alternate;
  animation-delay: -8s, -1s;
}

/* Each layer moves by exactly its tile height → perfect seamless loop */
@keyframes star-drift-1 {
  from { background-position: 0 0; }
  to   { background-position: 0 -400px; }
}
@keyframes star-drift-2 {
  from { background-position: 0 0; }
  to   { background-position: 0 -600px; }
}
@keyframes star-drift-3 {
  from { background-position: 0 0; }
  to   { background-position: 0 -900px; }
}

/* Gentle opacity pulse gives the twinkling illusion */
@keyframes twinkle {
  from { opacity: 0.55; }
  to   { opacity: 1; }
}

/* ─── Video card ───────────────────────────────────────────────────── */
.hero-video-wrap {
  position: relative;
  background: rgba(3, 7, 18, 0.5);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.04),
    0 20px 40px -12px rgba(0, 0, 0, 0.5);
  user-select: none;
  -webkit-user-select: none;
}
.hero-video-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: inset 0 0 80px -20px rgba(3, 7, 18, 0.6);
}
</style>
