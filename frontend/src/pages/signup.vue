<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="login-container border-black border-[1px] rounded-lg px-[24px] py-[32px] space-y-8 mx-4 w-full max-w-sm bg-gray-200">
      <h2 class="text-5xl text-center font-bold">Sign Up</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <label for="email" class="block">Email:</label>
        <input type="email" placeholder="email@domain.com" class="block rounded-lg w-full px-[16px] py-2 border bg-gray-400" v-model="email" required />

        <label for="password" class="block">Password:</label>
        <input type="password" placeholder="Password" class="block rounded-lg w-full px-[16px] py-2 border bg-gray-400" v-model="password" required />

        <label for="password" class="block">Confirm Password:</label>
        <input type="password" placeholder="Confirm Password" class="block rounded-lg w-full px-[16px] py-2 border bg-gray-400" v-model="password" required />

        <button type="submit" class="bg-yellow-400 rounded-lg py-2 w-full font-bold">Sign up</button>
      </form>
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      handleLogin() {
        if (this.email === "user@example.com" && this.password === "password") {
          alert("Login successful!");
        } else {
          this.errorMessage = "Invalid credentials.";
        }
      },
    },
  };
  </script>