<script setup>
import SearchIcon from '@/assets/img/search-icon.svg'
</script>

<template>
  <div class="search-field">
    <SearchIcon class="search-icon" />
    <input type="text" placeholder="Search" class="search-element" />
  </div>
</template>

<style scoped>
.search-field {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px #0000000a;
  display: flex;
  height: 50px;
  justify-content: flex-start;
  padding: 14px;
}

.search-element {
  border: 1px solid #000;
  color: var(--black);
  height: 100%;
  width: 100%;
  margin-left: 10px;
  border: none;
  outline: none;
  font-family: 'MontserratRegular';
  font-size: 16px;
  line-height: 22.4px;

  &::placeholder {
    color: var(--lightGray);
  }
}
</style>
