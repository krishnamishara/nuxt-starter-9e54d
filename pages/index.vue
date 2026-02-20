<script setup>
import pageData from "@/data/index.json";
const page = ref(pageData);

definePageMeta({
  layout: "default",
});
</script>

<template>
  <Hero
    :greeting="page.hero.greeting"
    :name="page.hero.name"
    :roles="page.hero.roles"
    :description="page.hero.description"
    :cta="page.hero.cta"
    :secondary="page.hero.secondary"
  />

  <AboutMe
    :title="page.about.title"
    :subtitle="page.about.subtitle"
    :description="page.about.description"
    :description2="page.about.description2"
    :stats="page.about.stats"
    :skills="page.about.skills"
  />

  <Expertise
    :title="page.expertise.title"
    :subtitle="page.expertise.subtitle"
    :items="page.expertise.items"
  />

  <Projects
    :title="page.projects.title"
    :subtitle="page.projects.subtitle"
    :items="page.projects.items"
  />

  <Extensions
    :title="page.extensions.title"
    :subtitle="page.extensions.subtitle"
    :items="page.extensions.items"
  />

  <Testimonials
    :title="page.testimonials.title"
    :subtitle="page.testimonials.subtitle"
    :items="page.testimonials.items"
  />

  <Contact
    :title="page.contact.title"
    :subtitle="page.contact.subtitle"
    :email="page.contact.email"
    :formspree-id="page.contact.formspreeId"
    :location="page.contact.location"
    :socials="page.contact.socials"
  />
</template>
