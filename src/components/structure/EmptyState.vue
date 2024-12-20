<script setup lang="ts">
import CustomButton from './CustomButton.vue'

defineEmits(['goBack'])
</script>

<template>
  <div class="container">
    <h3 class="title">Uh-oh!</h3>
    <p class="description">You look lost on your journey!</p>

    <CustomButton @action="$emit('goBack')"> Go back home </CustomButton>
  </div>
</template>

<style scoped>
.container {
  margin-top: 50px;
  text-align: center;

  .title {
    color: var(--black);
    font-family: 'LatoBold';
    font-size: 36px;
    line-height: 43.2px;
    text-align: center;
  }

  .description {
    color: var(--darkGray);
    font-size: 20px;
    line-height: 30px;
    margin: 10px auto 25px;
    text-align: center;
  }
}
</style>
