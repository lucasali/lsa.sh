<script setup lang="ts">
import { motion, useReducedMotion } from 'motion-v'

const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const reduced = useReducedMotion()

const initial = reduced.value
  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
  : { opacity: 0, y: 12, filter: 'blur(6px)' }
</script>

<template>
  <motion.div
    :initial="initial"
    :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :transition="{ type: 'spring', duration: 0.8, bounce: 0, delay: props.delay }"
  >
    <slot />
  </motion.div>
</template>
