<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="container border-black border-[1px] rounded-lg px-[24px] py-[32px] space-y-8 mx-4 w-full max-w-sm bg-gray-200">
            <h2 class="text-3xl font-bold mb-6">What Service Do You Want to Provide?</h2>
            
            <form class="space-y-4">
                <div v-for="service in services" :key="service.id" class="flex items-center space-x-3">
                <input
                    type="radio"
                    :id="service.id"
                    v-model="selectedService"
                    :value="service.name"
                    class="w-5 h-5 text-yellow-400"
                />
                <label :for="service.id" class="text-lg cursor-pointer">{{ service.name }}</label>
                </div>
                <button
                type="button"
                @click="submitService"
                class="bg-yellow-400 rounded-lg py-2 w-full font-bold">
                Confirm Selection
                </button>
            </form>
            <p v-if="selectedService" class="mt-4 flex justify-center text-lg text-gray-700">
                You selected: <strong>{{ selectedService }}</strong>
            </p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { id: "manufacturer", name: "Manufacturer" },
          { id: "wholesaler", name: "Wholesaler" },
          { id: "distributor", name: "Distributor" },
          { id: "retailer", name: "Retailer" },
        ],
        selectedService: ""
      };
    },
    methods: {
      submitService() {
        if (this.selectedService) {
          alert(`You selected: ${this.selectedService}`);
        } else {
          alert("Please select a service!");
        }
      }
    }
  };
  </script>
