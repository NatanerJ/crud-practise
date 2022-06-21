<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="BtnWrap">
      <button class="coolBtn" @click="$refs.popUp.backToMain()">Add</button>
      <button class="coolBtn" @click="test()">Read</button>
    </div>
    <pop-up ref="popUp"></pop-up>
  </div>
</template>

<script>
import popUp from './popUp.vue'
export default {
  name: 'HelloWorld',
  components: {
    popUp
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test () {
      console.log('this.$refs.popUp :>> ', this.$refs.popUp.backToMain)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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

.coolBtn:hover {
  background-color: #3EC70B;
}
</style>
