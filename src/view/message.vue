<script setup>
import {io} from "socket.io-client";
</script>

<template>
<!--    <p>ok</p>-->
<!--    <button>Bonjour</button>-->
<!--  <div style="flex-direction: column; display: flex">-->
<!--    <form id="sendMessage" @submit="(e)=>{sendMessage(e)}" style="display: flex">-->
<!--      <input type="text" name="message">-->
<!--      <input type="submit" value="Envoyer">-->
<!--    </form>-->
<!--    <div class="container" style="display: flex; flex-direction: column">-->
<!--      <div v-for="item in this.messages" class="message-container" style="width: fit-content; background: darkblue; margin-bottom: 10px">-->
<!--        <p>{{item.message}}</p>-->
<!--        <p>{{item.author}}</p>-->
<!--      </div>-->
<!--    </div>-->

<!--  </div>-->
  <div class="container">
    <div class="sideBar">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <div class="profile">
        <img src="../assets/profilePicture.png" alt="image de profile">
        <div class="profileName">
          <p>David</p>
          <div>
            <div></div>
            <p>online</p>
          </div>
        </div>
        <div class="plus">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="member">
        <div>
          <img src="../assets/iconMembre.png" alt="icon membre">
          <p>Membres du chat</p>
        </div>
        <div>
          <div class="memberCard">
            <img src="../assets/profilePicture.png" alt="icon de profile">
            <p>quentin</p>
          </div>
          <div class="memberCard">
            <img src="../assets/profilePicture.png" alt="icon de profile">
            <p>quentin</p>
          </div>
        </div>
      </div>
      <div class="logout">
        <img src="../assets/iconLogout.png" alt="icon logout">
        <p>Se déconnecter</p>
      </div>
    </div>
    <div class="chatContainer">
      <div class="containerTop">
        <div>
          <p>Nom chat room</p>
          <p>nb dans la room</p>
        </div>
        <div class="notif">
          <img src="../assets/iconNotif.png" alt="icon de notification">
        </div>
      </div>
      <div class="containerMessage">
        <div class="left messageContainer">
          <img src="../assets/profilePicture.png" alt="icon de profile">
          <div>
            <div class="message-top">
              <p>Quentin</p>
              <p>22/02/2022</p>
            </div>
            <div class="message">
              <p>message</p>
            </div>
          </div>
        </div>
        <div class="right messageContainer">
          <img src="../assets/profilePicture.png" alt="icon de profile">
          <div>
            <div class="message-top">
              <p>Quentin</p>
              <p>22/02/2022</p>
            </div>
            <div class="message">
              <p>message</p>
            </div>
          </div>
        </div>
      </div>
      <form class="searchBar">
        <div>
          <input type="text" placeholder="Écrire un message...">
          <div>
            <img src="../assets/iconSend.png" alt="Icon envoyer">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      messages: [],
      socket: io('http://localhost:3001/'),
    }
  },
  mounted() {
    console.log("okcrea")
    this.socket.on("connect", () => {
      console.log(this.socket.id)
    })
    this.socket.on('received', (arg) => {
      this.messages = arg
      console.log(arg)
    })
  },

  methods: {
    sendMessage(e) {
      let form = document.getElementById('sendMessage')
      form = new FormData(form)
      let data = {'message': form.get('message')}
      this.socket.emit('message', data)
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  background: #312C41;
  display: flex;
  overflow: hidden;
}

.sideBar {
  padding: 2rem;
  min-width: 300px;
  height: 100%;
  background: #2D283A;
  position: relative;
}

.profile {
  width: 100%;
  background: #3C374F;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.profile > img {
  object-fit: contain;
}

.profileName > div {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.profileName > p {
  font-size: 1.5rem;
  font-weight: 600;
}

.profileName > div > div {
  width: 10px;
  height: 10px;
  background: #33D9B2;
  border-radius: 100%;
}

.plus {
  display: flex;
  align-items: center;
  gap: 8px;
}

.plus > span {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: #B5B1C2;
}

.member {
  margin-top: 3rem;
}

.member > div:first-of-type {
  display: flex;
  gap: 1rem;
}

.member > div:nth-of-type(2) {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.memberCard {
  display: flex;
  gap: 1rem;
}

.memberCard img {
  height: 24px;
}

.logout {
  position: absolute;
  bottom: 2rem;
  display: flex;
  gap: 1rem;
}

.chatContainer {
  padding: 2rem;
  width: 100%;
  position: relative;
}

.containerTop {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.containerTop > div:first-of-type {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

.containerTop > div:first-of-type > p:first-of-type {
  font-size: 1.25rem;
  color: white;
}

.containerMessage {
  margin-top: 3rem;
}

.messageContainer {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.right {
  flex-direction: row-reverse;
}

.messageContainer > img {
  object-fit: contain;
  width: 24px;
}

.message-top {
  display: flex;
  align-items: end;
  gap: 1rem;
}

.right .message-top {
  flex-direction: row-reverse;
}

.message-top > p {
  font-size: 0.75rem;
}

.message-top > p:first-of-type {
  font-size: 1.25rem;
  color: white;
}

.message {
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  background: #3C374F;
  border-radius: 0 11px 11px 11px;
}

.message p {
  font-size: 1.15rem;
}

.right .message {
  background: #33D9B2;
}

.right .message > p {
  color: black;
}

form{
  width: 100%;
  position: absolute;
  bottom: 2rem;
  padding-right: 4rem;
}

form > div{
  background: #3C374F;
  border-radius: 6px;
  padding: 1rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form > div > input{
  border: none;
  background: transparent;
  color: #B5B1C2;
  width: 90%;
  font-size: 1rem;
}

form > div > input:focus{
  outline: none;
}

form > div > div{
  background: #33D9B2;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message-container {
  color: black;
  background-color: #4d9f5b;
}
</style>