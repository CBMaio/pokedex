<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CustomButton from './CustomButton.vue'
import AllIcon from '@/assets/img/all-icon.svg'
import FavoritesIcon from '@/assets/img/favorites-icon.svg'

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const buttons = [
  { name: 'list', icon: AllIcon, label: t('all') },
  { name: 'favorites', icon: FavoritesIcon, label: t('favorites') },
]

const navigate = function (name) {
  router.push({ name })
}
</script>

<template>
  <div class="footer">
    <div class="container">
      <CustomButton
        v-for="{ name, icon, label } in buttons"
        :key="name"
        :unselected="route.name !== name"
        @action="navigate(name)"
      >
        <div class="button-content">
          <component :is="icon" />
          <span> {{ label }}</span>
        </div>
      </CustomButton>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/bottomNavbar.css';
</style>
