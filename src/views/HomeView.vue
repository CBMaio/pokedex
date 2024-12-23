<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePokemonStore } from '@/stores/pokemon'
import { useAlertStore } from '@/stores/alert'
import WelcomeImg from '@/assets/img/welcome-img.svg'
import CustomButton from '@/components/structure/CustomButton.vue'
import { ref } from 'vue'
import LoaderAnimation from '@/components/structure/LoaderAnimation.vue'

const { t } = useI18n()
const router = useRouter()
const pokemonStore = usePokemonStore()
const alertStore = useAlertStore()

const isLoading = ref(false)

const goToList = async function () {
  try {
    isLoading.value = true
    await pokemonStore.setPokemons()
    router.push({ name: 'list' })
  } catch (error) {
    console.error('Error setting pokemons', error)
    alertStore.addAlert({ type: 'error', message: t('errorSettingPokemons') })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="main">
    <LoaderAnimation v-if="isLoading" />
    <div v-else class="global-container">
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
