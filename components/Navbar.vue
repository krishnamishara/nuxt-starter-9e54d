<script setup>
const navItems = [
  { title: "Home", url: "#home" },
  { title: "About Me", url: "#about" },
  { title: "Expertise", url: "#expertise" },
  { title: "Projects", url: "#projects" },
  { title: "Extensions", url: "#extensions" },
  { title: "Testimonials", url: "#testimonials" },
  { title: "Contact", url: "#contact" },
];

const isMenuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("home");

function closeMenu() {
  isMenuOpen.value = false;
}

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 50;

    const sections = navItems.map((item) => item.url.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          activeSection.value = sections[i];
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5'
        : 'bg-transparent'
    "
  >
    <Container>
      <nav class="flex items-center justify-between h-16 md:h-20">
        <a href="#home">
          <Logo />
        </a>

        <!-- Desktop nav -->
        <ul class="hidden gap-1 md:flex">
          <li v-for="item in navItems" :key="item.title">
            <a
              :href="item.url"
              class="px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
              :class="
                activeSection === item.url.replace('#', '')
                  ? 'text-white bg-white/5'
                  : 'text-zinc-400 hover:text-white'
              "
            >
              {{ item.title }}
            </a>
          </li>
        </ul>

        <a href="#contact" class="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
          Hire Me
        </a>

        <!-- Mobile toggle -->
        <button
          class="flex items-center justify-center w-10 h-10 text-white md:hidden"
          @click="isMenuOpen = !isMenuOpen"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <Icon :name="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" size="24" />
        </button>
      </nav>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="-translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-4 opacity-0"
      >
        <div
          v-if="isMenuOpen"
          class="pb-6 md:hidden"
        >
          <ul class="flex flex-col gap-1">
            <li v-for="item in navItems" :key="item.title">
              <a
                :href="item.url"
                @click="closeMenu"
                class="block px-4 py-3 text-sm font-medium transition-colors rounded-lg"
                :class="
                  activeSection === item.url.replace('#', '')
                    ? 'text-white bg-white/5'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                "
              >
                {{ item.title }}
              </a>
            </li>
            <li class="pt-2">
              <a href="#contact" @click="closeMenu" class="block text-center btn-primary text-sm">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </Container>
  </header>
</template>
