<script setup lang="ts">
import ArrowUpRight from '~icons/lucide/arrow-up-right'
import SectionLabel from '@/components/SectionLabel.vue'
import { projects } from '@/data'
</script>

<template>
  <section aria-label="Selected work">
    <SectionLabel label="Work" />

    <ul class="mt-6 flex flex-col">
      <li v-for="project in projects" :key="project.name">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group -mx-3 flex items-baseline gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-accent"
        >
          <span class="font-geist-mono text-sm">{{ project.name }}</span>
          <span class="hidden flex-1 truncate text-sm text-muted-foreground sm:block">
            {{ project.description }}
          </span>
          <span class="ml-auto flex items-center gap-2 font-geist-mono text-xs text-muted-foreground sm:ml-0">
            {{ project.year }}
            <ArrowUpRight class="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>
