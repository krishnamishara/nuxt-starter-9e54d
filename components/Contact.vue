<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  email: String,
  formspreeId: String,
  location: String,
  socials: Array,
});

const config = useRuntimeConfig();
const formspreeId = computed(() => props.formspreeId || config.public?.formspreeId || "");

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const status = ref("idle"); // idle | sending | success | error
const errorMessage = ref("");

async function handleSubmit() {
  if (formspreeId.value) {
    status.value = "sending";
    errorMessage.value = "";
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId.value}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _replyto: form.email,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      status.value = "success";
      form.name = "";
      form.email = "";
      form.subject = "";
      form.message = "";
    } catch (e) {
      status.value = "error";
      errorMessage.value = "Something went wrong. Please try again or email me directly.";
    }
    return;
  }

  // Fallback: open mailto so user can still send
  const mailtoLink = `mailto:${props.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Hi, I'm ${form.name} (${form.email}).\n\n${form.message}`)}`;
  window.open(mailtoLink, "_blank");
  status.value = "success";
  setTimeout(() => { status.value = "idle"; }, 3000);
}
</script>

<template>
  <section id="contact" class="section-padding">
    <Container>
      <Reveal class="text-center max-w-3xl mx-auto mb-16">
        <span class="section-label">Contact</span>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{{ title }}</h2>
        <p class="mt-4 text-lg text-zinc-400 leading-relaxed">{{ subtitle }}</p>
      </Reveal>

      <div class="grid gap-12 lg:grid-cols-5 max-w-5xl mx-auto">
        <Reveal class="lg:col-span-3">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label class="block mb-2 text-sm font-medium text-zinc-400">Name</label>
                <input v-model="form.name" type="text" placeholder="Your name" class="form-input" required :disabled="status === 'sending'" />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-zinc-400">Email</label>
                <input v-model="form.email" type="email" placeholder="your@email.com" class="form-input" required :disabled="status === 'sending'" />
              </div>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-zinc-400">Subject</label>
              <input v-model="form.subject" type="text" placeholder="Project or role inquiry" class="form-input" required :disabled="status === 'sending'" />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-zinc-400">Message</label>
              <textarea v-model="form.message" rows="5" placeholder="Tell me about your project or opportunity..." class="form-input resize-none" required :disabled="status === 'sending'"></textarea>
            </div>

            <p v-if="status === 'error'" class="text-sm text-red-400">{{ errorMessage }}</p>

            <button
              type="submit"
              class="btn-dark-glow w-full justify-center text-base"
              :disabled="status === 'sending'"
            >
              <template v-if="status === 'sending'">
                <Icon name="i-lucide-loader-2" size="18" class="animate-spin" />
                Sending...
              </template>
              <template v-else-if="status === 'success'">
                <Icon name="i-lucide-check" size="18" />
                Message Sent!
              </template>
              <template v-else>
                Send Message
                <Icon name="i-lucide-send" size="18" />
              </template>
            </button>
          </form>
        </Reveal>

        <Reveal :delay="150" class="lg:col-span-2 space-y-6">
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-5">Get in Touch</h3>
            <div class="space-y-4">
              <a
                v-if="email"
                :href="'mailto:' + email"
                class="flex items-center gap-3 text-zinc-300 hover:text-[#f26322] transition-colors group"
              >
                <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f26322]/10 group-hover:bg-[#f26322]/20 transition-colors">
                  <Icon name="i-lucide-mail" size="18" class="text-[#f26322]" />
                </div>
                <span class="text-sm">{{ email }}</span>
              </a>
              <div v-if="location" class="flex items-center gap-3 text-zinc-400">
                <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f26322]/10">
                  <Icon name="i-lucide-map-pin" size="18" class="text-[#f26322]" />
                </div>
                <span class="text-sm">{{ location }}</span>
              </div>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-5">Follow Me</h3>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.name"
                class="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-[#f26322]/20 transition-all duration-200"
              >
                <Icon :name="social.icon" size="20" />
              </a>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-6 text-center">
            <p class="text-sm text-zinc-500">Typically responds within</p>
            <p class="mt-1 text-2xl font-bold text-[#f26322]">24 hours</p>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
</template>
