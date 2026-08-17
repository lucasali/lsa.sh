<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import IntroSection from '@/components/IntroSection.vue'
import Reveal from '@/components/Reveal.vue'
import WorkSection from '@/components/WorkSection.vue'
</script>

<template>
  <div class="mx-auto flex min-h-dvh max-w-[600px] flex-col px-4">
    <AppHeader />

    <main class="flex flex-1 flex-col gap-16 py-16">
      <Reveal :delay="0">
        <IntroSection />
      </Reveal>

      <Reveal v-if="false" :delay="0.15">
        <WorkSection />
      </Reveal>

      <Reveal :delay="0.15">
        <AboutSection />
      </Reveal>
    </main>

    <Reveal :delay="0.30" class="pb-8">
      <AppFooter />
    </Reveal>
  </div>
</template>
