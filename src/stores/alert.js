import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alerts: new Map(),
  }),
  getters: {
    getAlerts() {
      return Array.from(this.alerts.entries()).map(([id, alert]) => ({ id, ...alert }))
    },
  },
  actions: {
    addAlert({ message, type = 'info' }) {
      const id = Date.now()
      this.alerts.set(id, { message, type })
    },
    removeAlert(id) {
      this.alerts.delete(id)
    },
  },
})
