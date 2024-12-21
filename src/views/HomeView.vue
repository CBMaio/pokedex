<script setup>
import WelcomeImg from '@/assets/img/welcome-img.svg'
import CustomButton from '@/components/structure/CustomButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToList = function () {
  router.push({ name: 'list' })
}
</script>

<template>
  <main class="main">
    <div class="global-container">
      <WelcomeImg class="main-logo" />
      <h1 class="title black-letter font-bold">Welcome to Pokédex</h1>
      <p class="description gray-letter">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
        Pokémon world.
      </p>
      <CustomButton @action="goToList"> Get started </CustomButton>
    </div>
  </main>
</template>

<style scoped>
@import '@/assets/styles/views/homeView.css';
</style>
