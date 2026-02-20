<script setup>
const props = defineProps({
  delay: { type: Number, default: 0 },
  as: { type: String, default: "div" },
});

const revealRef = ref(null);
const visible = ref(false);

onMounted(() => {
  const target = revealRef.value;
  if (!target) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            visible.value = true;
          }, props.delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(target);
});
</script>

<template>
  <component
    :is="as"
    ref="revealRef"
    class="reveal"
    :class="{ visible }"
  >
    <slot />
  </component>
</template>
