<template>
  <div class="loan">
    <h3 class="component-title">Bank loan</h3>
    <!-- header, css, fysisk title -->
    <label for="new-loan-input"
           class="loan-label">New loan:</label>
    <input v-model="newLoan"
           type="text"
           class="loan-input"
           name="new-loan-input" />
    <label for="repay-input"
           class="loan-label">Repay amount:</label>
    <input type="text"
           v-model="repay"
           class="loan-input"
           name="repay-input" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFinanceStore } from '../../stores/financeStore';
import { useWeekStore } from '../../stores/weekStore';

const weekStore = useWeekStore();
const financeStore = useFinanceStore();

const newLoan = ref(0);
const repay = ref(0);

watch(newLoan, () => {
  financeStore.takeLoan(Number(newLoan.value));
});

watch(repay, () => {
  financeStore.repayLoan(Number(repay.value));
});

watch(() => weekStore.week, () => {
  newLoan.value = 0;
  repay.value = 0;
})
</script>

<style scoped lang="postcss">
.loan {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
}

.component-title {
  grid-column: span 2;
}

.loan-label {
  text-align: right;
  font-weight: bold;
}
</style>
