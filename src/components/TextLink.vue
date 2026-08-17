<script setup lang="ts">
defineProps<{ href: string, label: string }>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="text-foreground/80 underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
  >{{ label }}</a>
</template>
