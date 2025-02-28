<template>
    <div class="border-black border rounded-lg bg-gray-200 p-4 w-48 md:w-52 lg:w-64">
        <img :src="imageSrc" alt="Product Image" class="object-cover object-center w-full h-40 rounded-md">
        <div class="mt-2 text-right mr-2">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <p class="text-sm text-gray-700">{{ description }}</p>
            <p class="text-md font-bold mt-2">RWF{{ price }}/{{ unit }}</p>
            <button @click="addToCart" class="mt-3 bg-yellow-400 py-1 px-4 rounded-lg hover:bg-yellow-200">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: String,
        title: String,
        description: String,
        price: Number,
        unit: String
    },
    methods: {
        addToCart() {
            console.log(`${this.title} added to cart!`);
        }
    }
};
</script>