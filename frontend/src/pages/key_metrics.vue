<template>
  <div class="flex flex-col items-center justify-center w-max mx-auto">
      <h2 class="font-bold text-2xl mb-4 ml-4 self-start">Key Metrics</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="metric in metrics" :key="metric.id" 
               class="bg-gray-200 rounded-lg w-[164px] h-[76px] md:w-[201px] md:h-[87px] flex flex-col justify-center items-start px-4 py-1 space-y-4">
              <p class="text-gray-700 text-sm font-semibold">{{ metric.name }}</p>
              <p class="text-lg font-bold">
                <span v-if="metric.value !== 'N/A' && metric.name === 'Total Sales'">$</span>{{ metric.value || 'N/A' }}
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      metrics: [
        { id: "total-sales", name: "Total Sales", value: 1000 },
        { id: "pending-order", name: "Pending Order", value: 13 },
        { id: "completed-order", name: "Completed Order", value: 62 },
        { id: "customers-served", name: "Customers Served", value: 22 },
      ],
    };
  },
  mounted() {
    console.log("Metrics Data:", this.metrics);
  },
};
</script>
