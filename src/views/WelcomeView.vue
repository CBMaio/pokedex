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
      <h1 class="title">Welcome to Pokédex</h1>
      <p class="description">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
        Pokémon world.
      </p>
      <CustomButton @action="goToList"> Get started </CustomButton>
    </div>
  </main>
</template>

<style scoped>
.main {
  padding: 30px;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.global-container {
  max-width: 570px;
  text-align: center;
}

.title {
  color: var(--black);
  font-size: 26px;
  font-weight: 700;
  line-height: 31.2px;
  margin-top: 60px;
}

.description {
  color: var(--darkGray);
  margin: 30px auto 50px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
}
</style>
