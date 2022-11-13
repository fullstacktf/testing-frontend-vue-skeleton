<template>
  <main class="signup-container">
    <form class="signup-form" @submit.prevent="onSubmit">
      <Title>Sign up with email</Title>
      <p>Enter your email address to create an account.</p>

      <EmailField id="email" label-text="Your email" v-model="name" />
      <PasswordField
        id="password"
        label-text="Your password"
        v-model="password"
      />
      <Button title="Sign Up" />
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Title from "../components/Title.vue";
import EmailField from "../components/EmailField.vue";
import PasswordField from "../components/PasswordField.vue";
import Button from "../components/Button.vue";

const name = ref("");
const password = ref("");
const router = useRouter();

function onSubmit() {
  console.log(name.value, password.value);
  router.push("/success");
}
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  margin-top: 64px;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  border-radius: 8px;
}

@media (min-width: 801px) {
  .signup-form {
    box-shadow: rgb(0 0 0 / 15%) 0 2px 10px;
    padding: 64px;
  }
}
</style>
