<script setup>
import { RouterView } from 'vue-router'
import { useAlertStore } from './stores/alert'
import CustomAlert from './components/structure/CustomAlert.vue'

const alertStore = useAlertStore()
</script>

<template>
  <div class="global-container">
    <router-view name="header" />
    <div class="alerts-container">
      <CustomAlert
        v-for="alert in alertStore.getAlerts"
        :key="alert.id"
        :message="alert.message"
        :type="alert.type"
        @close="alertStore.removeAlert(alert.id)"
      />
    </div>

    <main class="main-body">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.global-container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main-body {
    flex: 1;
  }
}

.alerts-container {
  padding: 8px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>
