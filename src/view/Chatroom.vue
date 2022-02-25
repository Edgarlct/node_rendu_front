<script setup>
  import {io} from "socket.io-client";
</script>
<script>
export default {
  name: "Chatroom",
  data() {
    return {
      author: localStorage.getItem('user'),
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
    sendMessage() {
      console.log('call')
      let form = document.getElementById('sendMessage')
      form = new FormData(form)
      let data = {'message': form.get('message'), 'author': this.author}
      this.socket.emit('message', data)
    }
  }
}
</script>

<template>
  <section class="chatroom">
    <img class="menu_burger" src="../assets/menu_black_24dp.png">
    <div class="menu">
      <div class="menu__top">
        <h1>Open<span>Chat</span></h1>
        <div class="user-profile">
          <img src="../assets/icon_chat.png">
          <div>
            <h2 class="name-user">David</h2>
            <div class="status">
              <div></div>
              <p>online</p>
            </div>
          </div>
          <div class="points_list">
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
          </div>
        </div>
        <div class="members_title">
          <img src="../assets/people_black_24dp.png">
          <p>Membres du chat</p>
        </div>
        <div class="members_list">
          <div class="member_card">
            <img src="../assets/icon_chat.png">
            <p class="name_other">Quentin</p>
          </div>
          <div class="member_card">
            <img src="../assets/icon_chat.png">
            <p class="name_other">Quentin</p>
          </div>
        </div>
      </div>
      <div class="logout">
        <a href="">
          <img src="../assets/logout_black_24dp.png">
          Se déconnecter
        </a>
      </div>
    </div>

    <div class="chatbox">
      <div class="chatbox__info">
        <div>
          <h2 class="chatroom_name">Nom chatroom</h2>
          <p class="nbr_membres">8 membres</p>
        </div>
        <img src="../assets/notifications_black_24dp.png">
      </div>
      <div class="chatbox__msg">
        <div v-bind:class="[item.author === this.author ? 'message_box_user' : 'message_box_other']" v-for="item in this.messages">
          <div>
            <img src="../assets/icon_chat.png">
            <p>{{ item.author }}</p>
            <p>22/02/2022</p>
          </div>
          <p class="message">{{ item.message }}</p>
        </div>
      </div>

      <div class="chatbox__inputs">
        <form @submit.prevent="this.sendMessage" id="sendMessage">
          <input type="text" id="message_input" name="message" placeholder="Ecrire un message...">
          <button type="submit">
            <img src="../assets/send_icon.png">
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style>

</style>