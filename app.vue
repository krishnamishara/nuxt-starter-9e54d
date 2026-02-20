<script setup>
useHead({
  htmlAttrs: { lang: "en-US" },
  title: "KRISHNAM — Krishna Mishra | Full Stack Developer",
  meta: [
    {
      name: "description",
      content:
        "Full Stack Developer specializing in modern web technologies. Building high-performance, scalable web applications that drive business results.",
    },
    { name: "theme-color", content: "#030712" },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Dancing+Script:wght@500;600;700&display=swap",
    },
  ],
  bodyAttrs: {
    class: "font-display antialiased",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
