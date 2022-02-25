<template>
  <main>
    <img src="src/assets/logo_open_chat.png" alt="">
    <h1>Create new account <span>.</span></h1>

    <form action="" class="register_form" @submit.prevent=" userRegister({username}, {email}, {password})">

      <input type="text" placeholder="name" v-model="username">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <input class="submit_btn" type="submit" value="Create Account">

    </form>

    <p>already have a account ? <a @click="navTOLogin">Login here</a></p>

  </main>
</template>

<script setup>
import router from "../router";
import axios from 'axios'

function userRegister( username, usermail, userpassword){
  axios.post('http://localhost:3001/auth/register', {
    email: usermail.email,
    username: username.username,
    password: userpassword.password
  })
  .then((response) => {
    if(response.status === 201){
      router.push('/')
    }
  })
}

/* function userRegister(username, password, email){
    console.log('submit')
    const url = import.meta.env.API_URL
    var myHeaders = new Headers();
    const requestSettings = {
        method: 'POST',
        Headers: myHeaders,
        mode: 'no-cors',
        contentType: 'applications/json',
        body: {
          "username": "eriuhffrfiuerf",
          "password": "passwfergfergrgzord",
          "email": "teferfst@ae.com"
        }
    }
    fetch('http://localhost:3001/auth/register', requestSettings)
} */

function navTOLogin(){
  router.push('/')
}
</script>

<style scoped>
img{
  position: absolute;
  top: 50px;
  left: 50px;
}
@media (max-width: 500px ) {
  
    h1{
     font-size:  20px !important;
    }

  input{
  font-size: 20px !important;
  font-weight: bold !important;
  padding: 20px !important;
  margin-top: 40px !important;
}

}

body{
  background-color: #312C41;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

}

input{
  font-family: Roboto, sans-serif;
  font-size: 26px;
  font-weight: bold;
  padding: 10px;
  background-color: #3C374F;
  border: none;
  border-radius: 40px;
  width: fit-content;
  margin-top: 40px;
  color: rgba(255, 255, 255, 0.61);
}

.submit_btn{
  background-color: #33D9B2;
  color: rgb(255, 255, 255);
  cursor: pointer;

}

p{
  margin-top: 50px;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

main{
  width: 100%;
}

h1{
  font-family: Roboto, sans-serif;
  font-size: 72px;
  color: white;
  height: fit-content;
  font-weight: bold;
  text-align: center;


}

.register_form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

span{
  color: #33D9B2;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}



@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
