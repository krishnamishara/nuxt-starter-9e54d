<script setup>
const navLinks = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Expertise", url: "#expertise" },
  { title: "Projects", url: "#projects" },
  { title: "Extensions", url: "#extensions" },
  { title: "Testimonials", url: "#testimonials" },
  { title: "Contact", url: "#contact" },
];

const socials = [
  { icon: "i-simple-icons-github", url: "https://github.com", label: "GitHub" },
  { icon: "i-simple-icons-linkedin", url: "https://linkedin.com", label: "LinkedIn" },
  { icon: "i-simple-icons-x", url: "https://x.com", label: "Twitter" },
];
</script>

<template>
  <footer class="border-t border-white/5">
    <Container>
      <div class="py-12 md:py-16">
        <div class="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <!-- Logo -->
          <a href="#home">
            <Logo size="sm" />
          </a>

          <!-- Nav links -->
          <nav>
            <ul class="flex flex-wrap justify-center gap-6">
              <li v-for="link in navLinks" :key="link.title">
                <a
                  :href="link.url"
                  class="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                >
                  {{ link.title }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Socials -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="flex items-center justify-center w-9 h-9 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Icon :name="social.icon" size="18" />
            </a>
          </div>
        </div>

        <!-- Copyright (ClientOnly to avoid hydration mismatch with Date) -->
        <div class="pt-8 mt-8 border-t border-white/5 text-center">
          <p class="text-sm text-zinc-600">
            &copy; <ClientOnly fallback="2026">{{ new Date().getFullYear() }}</ClientOnly> KRISHNAM. All rights reserved.
          </p>
        </div>
      </div>
    </Container>
  </footer>
</template>
