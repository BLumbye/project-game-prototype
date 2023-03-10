import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useWeekStore = defineStore('week', () => {
  //Uses setup store
  // State
  const week = ref(0);

  // Getters
  const decisionForm = computed(() => week.value + 1);

  // Actions
  function nextWeek() {
    week.value++;
  }

  return { week, decisionForm, nextWeek };
});
