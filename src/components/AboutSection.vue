<script setup lang="ts">
import TextLink from '@/components/TextLink.vue'
</script>

<template>
  <section aria-label="About">
    <h2 class="text-base font-medium">
      About
    </h2>
    <p class="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
      I build things for the web. Currently, I'm a senior software engineer at
      <TextLink href="https://constructin.com.br" label="Construct IN" />.
      Previously, I worked at
      <TextLink href="https://globo.com" label="Globo" /> and
      <TextLink href="https://sonda.com" label="Sonda" />.
    </p>
  </section>
</template>
