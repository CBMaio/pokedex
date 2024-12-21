<script setup>
import FavoritesIcon from '@/assets/img/favorites-icon.svg'

const handleFavorite = function () {}
</script>

<template>
  <div class="favorite-action" @click="handleFavorite">
    <FavoritesIcon class="favorite-icon" />
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
    & :deep(path) {
      fill: var(--lightGray);
      height: 26px;
      width: 26px;
    }
  }
}
</style>
