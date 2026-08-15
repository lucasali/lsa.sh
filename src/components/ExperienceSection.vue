<script setup lang="ts">
import SectionLabel from '@/components/SectionLabel.vue'
import { experience } from '@/data'
</script>

<template>
  <section aria-label="Experience">
    <SectionLabel label="Experience" />

    <ul class="mt-6 flex flex-col gap-5">
      <li v-for="job in experience" :key="`${job.company}-${job.period}`" class="flex items-baseline gap-4">
        <span class="w-28 shrink-0 font-geist-mono text-xs text-muted-foreground">{{ job.period }}</span>
        <div>
          <p class="text-sm">
            {{ job.role }}
          </p>
          <p class="text-sm text-muted-foreground">
            <a v-if="job.url" :href="job.url" target="_blank" rel="noopener noreferrer" class="underline-offset-4 hover:underline">{{ job.company }}</a>
            <template v-else>
              {{ job.company }}
            </template>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
