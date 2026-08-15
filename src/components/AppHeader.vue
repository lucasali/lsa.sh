<script lang="ts" setup>
import type { Component } from 'vue'
import { motion } from 'motion-v'
import Email from '~icons/carbon/email'
import Github from '~icons/carbon/logo-github'
import Linkedin from '~icons/carbon/logo-linkedin'
import X from '~icons/carbon/logo-x'
import { contacts } from '@/data'
import Clock from './Clock.vue'
import ToggleMode from './ToggleMode.vue'
import Button from './ui/Button.vue'

const icons: Record<string, Component> = {
  github: Github,
  linkedin: Linkedin,
  x: X,
  email: Email,
}
</script>

<template>
  <motion.header class="sticky top-0 z-10 -mx-4 flex items-center justify-between bg-background/80 px-4 py-2 backdrop-blur">
    <div class="flex items-center gap-3">
      <span class="font-geist-mono text-xs">EST. 2000</span>
    </div>

    <div class="flex items-center gap-2">
      <Clock />

      <Button
        v-for="contact in contacts"
        :key="contact.label"
        as="a"
        size="icon"
        variant="ghost"
        :href="contact.url"
        :target="contact.url.startsWith('mailto:') ? undefined : '_blank'"
        rel="noopener noreferrer"
        :aria-label="contact.label"
      >
        <component :is="icons[contact.label]" />
      </Button>

      <ToggleMode />
    </div>
  </motion.header>
</template>
