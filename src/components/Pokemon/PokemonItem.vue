<script setup>
import FavoritesIcon from '@/assets/img/favorites-icon.svg'
import { computed } from 'vue'

defineEmits(['viewDetails'])
const props = defineProps({
  pokemon: {
    type: Object,
    default: () => ({}),
    required: true,
  },
})

const formattedName = computed(() => {
  const name = props.pokemon?.name
  const firstLetter = name[0].toUpperCase()
  const lastPart = name.slice(1).toLowerCase()
  return `${firstLetter}${lastPart}`
})

const handleFavorite = async function () {}
</script>

<template>
  <div class="item" @click="$emit('viewDetails', pokemon.name)">
    <span class="name black-letter"> {{ formattedName }} </span>
    <div class="favorite-action" @click="handleFavorite">
      <FavoritesIcon class="favorite-icon" />
    </div>
  </div>
</template>

<style scoped>
.item {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px 20px;

  .name {
    font-size: 22px;
    line-height: 26.4px;
  }

  .favorite-action {
    align-items: center;
    background-color: var(--circleBackground);
    border-radius: 50%;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;

    .favorite-icon {
      & :deep(path) {
        fill: var(--lightGray);
        height: 26px;
        width: 26px;
      }
    }
  }
}
</style>
