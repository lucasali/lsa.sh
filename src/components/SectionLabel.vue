<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="flex items-center gap-3 font-geist-mono text-xs uppercase tracking-[0.2em] text-muted-foreground" aria-hidden="true">
    <span>—</span>
    <span>{{ label }}</span>
    <span class="h-px flex-1 bg-border" />
  </div>
</template>
