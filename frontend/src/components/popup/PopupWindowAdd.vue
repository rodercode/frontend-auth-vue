<template>
  <div class="popup">
    <div class="container-headline">
      <h1>Add Book</h1>
    </div>

    <div class="container-input">
      <label>Book title</label>
      <BaseInput
        class="input input-book"
        textType="text"
        placeholderValue="Enter new title..."
        v-model="titleInput"
      />
    </div>

    <div class="container-input">
      <label>Author by book</label>
      <BaseInput
        class="input input-book"
        textType="text"
        placeholderValue="Enter new author..."
        v-model="authorInput"
      />
    </div>

    <div class="container-input">
      <label>Book Quantity</label>
      <BaseInput
        class="input input-book"
        textType="text"
        placeholderValue="Enter new quantity..."
        v-model="quantityInput"
      />
    </div>

   

    <div class="container-btn">
      <BaseButton class="btn btn-popup" btnText="Add" @click="handleAddButton" />
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
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";

export default defineComponent({
  name: "PopupWindow",
  components: { BaseButton, BaseInput },
  data() {
    return {
      popup: false,
      titleInput: "",
      authorInput: "",
      quantityInput: "",
    };
  },
  methods: {
    handleAddButton(){
      this.$emit("sendBookDetails", {
        title: this.titleInput,
        author: this.authorInput,
        quantity: this.quantityInput,
      });
    },
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
  bottom: 10%;
  background-color: grey;
  padding: 2em 4em;
  text-align: center;
  filter: blur(0);
  width: 40%;
}

.container-headline {
  margin-bottom:1.5em;
}

.container-input{
  margin-bottom:2em;
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

label{
  text-align: left;
  display: block;
  margin-left:.25em;
  margin-bottom:.25em;
}
</style>
