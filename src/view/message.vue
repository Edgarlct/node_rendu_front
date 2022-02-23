<script setup>
import { io } from "socket.io-client";
</script>

<template>
  <p>ok</p>
  <button>Bonjour</button>
  <form id="sendMessage" @submit="(e)=>{sendMessage(e)}">
    <input type="text" name="message">
    <input type="submit" value="Envoyer">
  </form>
  <div class="container">
    <div v-for="item in this.messages" class="message-container">
      <p>{{item.message}}</p>
      <p>{{item.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  data(){
    return{
      messages: [],
      socket: io('http://192.168.0.15:3001/'),
    }
  },
  mounted() {
    console.log("okcrea")
    this.socket.on("connect", () => { console.log(this.socket.id) })
    this.socket.on('received', (arg)=>{
      this.messages = arg
      console.log(arg)
    })
  },

  methods:{
    sendMessage(e){
      e.preventDefault()
      let form = document.getElementById('sendMessage')
      form = new FormData(form)
      let data = {'message': form.get('message')}
      this.socket.emit('message', data)
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.message-container{
  color: black;
  background-color: #4d9f5b;
}
</style>