<template>
  <h1>Register / Log In</h1>

  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" v-model="password" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" @click="register" class="btn btn-primary">Register</button>
  <button type="submit" @click="logIn" class="btn btn-primary">Login</button>
</form> 
</template>

<script lang="ts">
import { ref } from 'vue'; 
import { supabase } from '../supabase'

const email = ref('')
const password = ref('')

const register = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) console.error(error)
  else console.log('Signed up:', data)
}

const logIn = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) console.error(error)
  else console.log('Signed in:', data)
}
</script>
