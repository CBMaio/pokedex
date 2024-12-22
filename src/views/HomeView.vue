<script setup>
import { useRouter } from 'vue-router'
import WelcomeImg from '@/assets/img/welcome-img.svg'
import CustomButton from '@/components/structure/CustomButton.vue'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()
const router = useRouter()

const goToList = async function () {
  await pokemonStore.setPokemons()
  router.push({ name: 'list' })
}
</script>

<template>
  <main class="main">
    <div class="global-container">
      <WelcomeImg class="main-logo" />
      <h1 class="title black-letter font-bold">{{ $t('welcome') }}</h1>
      <p class="description gray-letter">
        {{ $t('welcomeDescription') }}
      </p>
      <CustomButton @action="goToList"> {{ $t('getStarted') }} </CustomButton>
    </div>
  </main>
</template>

<style scoped>
@import '@/assets/styles/views/homeView.css';
</style>
