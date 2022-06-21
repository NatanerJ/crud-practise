<template>
  <div class="coolPopUp" v-if="isVisible">
    <button class="coolBtn" @click="backToMain()">Back</button>
  </div>
</template>

<script>
export default {
  name: 'popUp',
  data () {
    return {
      isVisible: true
    }
  },
  methods: {
    backToMain () {
      this.isVisible = !this.isVisible
    }
  }

}
</script>

<style>
  .coolPopUp{
    position: absolute;
    margin: auto;
    width: 500px;
    height: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 2px solid green;
    background-color: white;
  }

  .coolBtn {
     width: 200px;
    height: 50px;
    font-size: 20px;
    color: white;
    background-color: #42b983;
    border: 2px solid #42b983;
    cursor: pointer;
  }
</style>
