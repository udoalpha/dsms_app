<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
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