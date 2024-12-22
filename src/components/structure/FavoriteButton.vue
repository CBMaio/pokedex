<script setup>
import FavoritesIcon from '@/assets/img/favorites-icon.svg'

defineEmits(['handleFavorite'])
defineProps({
  isFavorite: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="favorite-action" @click="$emit('handleFavorite')">
    <FavoritesIcon class="favorite-icon" :class="{ 'is-favorite': isFavorite }" />
  </div>
</template>

<style scoped>
.favorite-action {
  align-items: center;
  background-color: var(--circleBackground);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 44px;

  .favorite-icon {
    &:deep(path) {
      fill: var(--lightGray);
      height: 26px;
      width: 26px;
    }

    &.is-favorite {
      &:deep(path) {
        fill: var(--favoriteYellow);
      }
    }
  }
}
</style>
