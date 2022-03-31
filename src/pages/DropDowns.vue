<template>
  <div>
    <button @click="dropIt">Pet Options</button>
  <transition name="slide">
    <ul class="list" v-if="isDropped">
      <li>Dog</li>
      <li>Cat</li>
      <li>Bunny</li>
      <li>Parrot</li>
      <li>Fish</li>
    </ul>
  </transition>
  </div>
</template>

<script>
export default {
    name: "dropdown",
    data() {
        return {
            isDropped: false,
        }
    },

    methods: {
        dropIt() {
            this.isDropped = !this.isDropped
        }
    }
}
</script>

<style>
html{ display: grid; height: 100% }
body{
  margin: auto;
  background: linear-gradient(#5e2973, #692424);
}
button{
  padding: 20px 60px;
  border: solid thin darken(#b50064, 10%);
  background: #b50064;
  color: #eee;
}
button:focus{
    outline: solid thin lighten(#b50064, 20%);
}
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
.list{
  position: absolute;
  width: 204px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform-origin: top;
  transition: transform .4s ease-in-out;
  overflow: hidden;
 
}
.list  li{
    padding: 10px;
    background: white;
    border-bottom: solid thin #eee;
    border-left: solid medium #cbc;
  }
</style>