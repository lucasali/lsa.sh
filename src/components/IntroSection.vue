<script setup lang="ts">
import { intro } from '@/data'
</script>

<template>
  <section>
    <h1 class="text-4xl font-medium tracking-tight">
      {{ intro.name }}
    </h1>
    <p class="mt-2 font-geist-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {{ intro.byline }}
    </p>
  </section>
</template>
