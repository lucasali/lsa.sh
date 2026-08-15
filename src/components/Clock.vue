<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Time from '~icons/carbon/time'

const time = ref('00:00:00')
const gmtOffset = ref('GMT + 0')

function updateTime() {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')
  time.value = `${hours}:${minutes}:${seconds}`

  // Calculate GMT offset
  const offset = -Math.round(now.getTimezoneOffset() / 60)
  const sign = offset >= 0 ? '+' : '-'
  const absOffset = Math.abs(offset)
  gmtOffset.value = `GMT${sign}${absOffset}`
}

let intervalId: number | undefined

onMounted(() => {
  updateTime()
  intervalId = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="flex items-center text-foreground text-xs font-geist-mono gap-2 leading-none">
    <Time />
    <span class="leading-none">{{ time }}</span>
    <span class="leading-none">{{ gmtOffset }}</span>
  </div>
</template>
