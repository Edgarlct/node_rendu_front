<script>
export default {
  name: "Chatroom"
}

</script>

<template>
  <img class="menu_burger" src="./assets/menu_black_24dp.png">
    <div class="menu">
      <div class="menu__top">
        <h1>Open<span>Chat</span></h1>
        <div class="user-profile">
          <img src="./assets/icon_chat.png">
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
          <img src="./assets/people_black_24dp.png">
          <p>Membres du chat</p>
        </div>
        <div class="members_list">
          <div class="member_card">
            <img src="./assets/icon_chat.png">
            <p class="name_other">Quentin</p>
          </div>
          <div class="member_card">
            <img src="./assets/icon_chat.png">
            <p class="name_other">Quentin</p>
          </div>
        </div>
      </div>
      <div class="logout">
        <a href="">
          <img src="./assets/logout_black_24dp.png">
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
        <img src="./assets/notifications_black_24dp.png">
      </div>

      <div class="chatbox__msg">
        <div class="message_box_other">
          <div>
            <img src="./assets/icon_chat.png">
            <p>Quentin</p>
            <p>22/02/2022</p>
          </div>
          <p class="message">Coucou les amis, j’ai un taser</p>
        </div>
        <div class="message_box_other">
          <div>
            <img src="./assets/icon_chat.png">
            <p>Quentin</p>
            <p>22/02/2022</p>
          </div>
          <p class="message">Coucou les amis, j’ai un taser</p>
        </div>
        <div class="message_box_user">
          <div>
            <img src="./assets/icon_chat.png">
            <p>Quentin</p>
            <p>22/02/2022</p>
          </div>
          <p class="message">Coucou les amis, j’ai un taser</p>
        </div>
      </div>

      <div class="chatbox__inputs">
        <form>
          <input type="text" id="message_input" name="msg_input" placeholder="Ecrire un message...">
          <button type="submit">
            <img src="./assets/send_icon.png">
          </button>
        </form>
      </div>
    </div>

</template>

<style scoped>

</style>