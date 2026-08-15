<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import IntroSection from '@/components/IntroSection.vue'
import Reveal from '@/components/Reveal.vue'
import WorkSection from '@/components/WorkSection.vue'
</script>

<template>
  <div class="mx-auto max-w-[600px] px-4">
    <AppHeader />

    <main class="flex flex-col gap-16 py-16">
      <Reveal :delay="0">
        <IntroSection />
      </Reveal>

      <Reveal v-if="false" :delay="0.15">
        <WorkSection />
      </Reveal>

      <Reveal :delay="0.15">
        <ExperienceSection />
      </Reveal>

      <Reveal :delay="0.30">
        <footer class="font-geist-mono text-xs text-muted-foreground">
          © {{ new Date().getFullYear() }} Lucas Ali
        </footer>
      </Reveal>
    </main>
  </div>
</template>
