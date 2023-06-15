<template>
    <div class="popup">
      <div class="container-headline">
        <h1>Change user settings</h1>
      </div>
      <div class="container-info">
        <p>Are you sure you want to delete user</p>
        <p>Marcus</p>
      </div>
      <div class="container-btn">
        <BaseButton class="btn btn-popup" btnText="Add" />
        <BaseButton
          class="btn btn-popup"
          btnText="Cancel"
          @click="handleCancelButton"
        />
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  
  // Components import
  import BaseButton from "@/components/base/BaseButton.vue"
  export default defineComponent({
    name:"PopupWindow",
    components: { BaseButton },
    data() {
      return {
        popup: false,
      };
    },
    methods: {
      handleCancelButton() {
        this.$emit("cancelPopupWindow");
      },
    },
  });
  </script>
  
  <style lang="css" scoped>
  
  .popup {
    position: fixed;
    right: 30%;
    bottom: 30%;
     background-color: grey; 
    padding: 3em 4em;
    text-align: center;
    filter: blur(0);
  }
  
  .container-headline {
    margin-bottom: 5em;
  }
  
  .container-info {
    margin-bottom: 5em;
  }
  
  .container-btn {
    display: flex;
    justify-content: space-between;
  }
  
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 26px;
  }
  </style>
  