<script setup lang="ts">
import { contacts } from '@/data'

const labels: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  x: 'X',
  email: 'Email',
}
</script>

<template>
  <footer class="flex items-center justify-between gap-4 font-geist-mono text-xs text-muted-foreground">
    <span>© {{ new Date().getFullYear() }}</span>

    <nav class="flex items-center gap-4 sm:gap-6" aria-label="Contact">
      <a
        v-for="contact in contacts"
        :key="contact.label"
        :href="contact.url"
        :target="contact.url.startsWith('mailto:') ? undefined : '_blank'"
        rel="noopener noreferrer"
        class="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
      >{{ labels[contact.label] ?? contact.label }}</a>
    </nav>
  </footer>
</template>
