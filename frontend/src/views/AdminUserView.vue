<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is Admin user view where an admin can display all data of created users and also change user rank
 -->

<template>
  <div>
    <BaseHeader
      :username="user.username"
      :role="user.role"
      btnName="Sign out"
    />

    <PopupWindowDelete
      @cancelPopupWindow="cancelPopup"
      v-if="popupDelete == true"
      @customMethod="deleteUser"
      type="user"
      :name="username"
    />
    <PopupWindowPromote
      @cancelPopupWindow="cancelPopup"
      v-if="popupPromote == true"
      @customMethod="promoteUser"
      type="user"
      :name="username"
    />

    <div class="admin">
      <div class="container-upper">
        <input
          placeholder="Search User..."
          class="input input-search"
          type="text"
          v-model="userInput"
        />
        <div class="container-btns-tab">
          <BaseButton
            class="btn-tab"
            btn-text="Books"
            @click="$router.push('/admin/books')"
          />
          <BaseButton
            class="btn-tab"
            btn-text="Users"
            :disabled="{ name: 'AdminUserView' }"
          />
        </div>
      </div>

      <div v-if="displayUsers.length !== 0">
        <table class="table-user-list">
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Purchases</th>
            <th>Action</th>
          </tr>
          <tr v-for="user in displayUsers" :key="user.username">
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.purchases.length }} purchases</td>
            <td>
              <div class="container-btns-action">
                <BaseButton
                  class="btn btn-action"
                  btn-text="Promote"
                  @click="handlePromoteButton(user.username)"
                />
                <BaseButton
                  class="btn btn-action"
                  btn-text="Delete"
                  @click="handleDeleteButton(user.username)"
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        <h3>Loading users....</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Model imports
import { User } from "@/model/user";

// Service imports
import jwtService from "@/service/jwtService";
import userService from "@/service/userService";

// Components import
import BaseButton from "@/components/base/BaseButton.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import PopupWindowDelete from "@/components/popup/PopupWindowDelete.vue";
import PopupWindowPromote from "@/components/popup/PopupWindowPromote.vue";

export default defineComponent({
  name: "AdminUserView",
  components: { BaseButton, BaseHeader, PopupWindowPromote, PopupWindowDelete },
  data() {
    return {
      userInput: "",
      users: [] as User[],
      displayUsers: [] as User[],
      timer: 0,
      token: jwtService.getJwt("jwt"),
      user: {} as User,
      popupPromote: false,
      popupDelete: false,
      username: "",
    };
  },
  // Handle Promise from user service
  created() {
    this.getUserList();
    this.getUser();
  },
  watch: {
    userInput() {
      this.renderTimer();
    },
  },
  methods: {
    async getUserList() {
      this.users = await userService.getUserList();
      // Add empty purchases array if purchases doesn't exist
      this.users.forEach((user) => {
        if (user.purchases == undefined) {
          user.purchases = [];
        }
      });
      this.displayUsers = this.users;
    },
    async getUser() {
      this.user = await userService.getUser();
    },
    handlePromoteButton(username:string) {
      this.username = username;
      this.popupPromote = true;
    },

    handleDeleteButton(username: string) {
      this.popupDelete = true;
      this.username = username;
    },

    promoteUser(){
      console.log(this.username);
      userService.promoteUser(this.username);
      this.getUserList();
      this.popupPromote = false;
    },

    deleteUser() {
      userService.deleteUser(this.username);
      this.getUserList();
      this.popupDelete = false;
    },

    cancelPopup() {
      this.popupPromote = false;
      this.popupDelete = false;
    },

    refreshPage() {
      this.$router.go(0);
    },

    // Render user that should be displayed
    renderUsers() {
      this.displayUsers = this.users.filter((user) =>
        user.username.includes(this.userInput)
      );
    },

    // Will start a render timer when user stop typing
    renderTimer() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.renderUsers();
        console.log("rending");
      }, 1000);
    },
  },
});
</script>

<style scoped>
.admin {
  margin: 4em 4em 0em 4em;
}

.container-upper {
  display: flex;
  justify-content: space-between;
}

.input-search {
  font-size: 18px;
  margin: 0 0 0.5em 2em;
  padding: 1em 1em 0.75em 1em;
  border-radius: 8px;
  border: 1px solid black;
  width: 27%;
}

table {
  width: 100%;
}

th {
  font-size: 26px;
  text-align: center;
  padding: 1em;
  background: grey;
  color: #fff;
}

td {
  font-size: 22px;
  text-align: center;
  padding: 1em;
  background: rgb(188, 185, 185);
}

p {
  font-size: 30px;
}

a {
  text-decoration: none;
  font-size: 40px;
  color: rgb(69, 67, 67);
}
.container-place-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75em;
}
.container-btns-action {
  display: flex;
  justify-content: center;
  gap: 1.5em;
}
</style>
