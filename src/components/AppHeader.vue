<script lang="ts" setup>
import { motion } from 'motion-v'
import Clock from './Clock.vue'
import ToggleMode from './ToggleMode.vue'
</script>

<template>
  <motion.header class="sticky top-0 z-10 -mx-4 flex items-center justify-between gap-3 bg-background/80 px-4 py-2 backdrop-blur">
    <div class="flex items-center gap-3">
      <span class="font-geist-mono text-xs whitespace-nowrap">EST. 2000</span>
    </div>

    <div class="flex items-center gap-1 sm:gap-2">
      <Clock />
      <ToggleMode />
    </div>
  </motion.header>
</template>
