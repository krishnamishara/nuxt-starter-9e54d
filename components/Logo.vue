<script setup>
defineProps({
  size: { type: String, default: "md" },
});
</script>

<template>
  <div class="flex items-center text-white">
    <img
      src="/images/mage2-logo.png"
      alt="KRISHNAM"
      class="shrink-0 w-auto"
      :class="size === 'sm' ? 'h-8' : 'h-10'"
      width="60"
      height="60"
      fetchpriority="high"
    />
    <div class="flex flex-col leading-none">
      <span
        class="font-extrabold tracking-widest uppercase"
        :class="size === 'sm' ? 'text-sm' : 'text-base'"
      >
        <span class="text-white">KRISHNA</span><span class="text-[#f26322]">M</span>
      </span>
      <div
        class="mt-1 rounded-full bg-[#f26322]"
        :class="size === 'sm' ? 'h-[1.5px]' : 'h-[2px]'"
      ></div>
    </div>
  </div>
</template>
