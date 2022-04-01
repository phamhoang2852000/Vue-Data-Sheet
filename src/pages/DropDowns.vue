<template>
  <div>
  <ul class="main">
    <li class="drop-down" @click="mouseover">
      <span>TranslateY</span>
      <ul v-if="isDropped" class="drop-down-menu">
        <li class="drop-down-menu-item">A</li>
        <li class="drop-down-menu-item">A</li>
        <li class="drop-down-menu-item">A</li>
        <li class="drop-down-menu-item">A</li>
        <li class="drop-down-menu-item">A</li>
      </ul>
    </li>
    <li class="drop-down">RotateX</li>
    <li class="drop-down">TranslateZ</li>
    <li class="drop-down">Scale</li>
    <li class="drop-down">TranslateX</li>
  </ul>
  </div>
</template>

<script>
export default {
    name: "dropdowns",
    data() {
        return {
            isDropped: false,
        }
    },

    methods: {
        mouseover() {
            this.isDropped = !this.isDropped;
        },
    }
}
</script>

<style lang="scss">
.main {
  list-style-type: none;
  display: flex;
  background-color: #2f465e;
  height: 60px;
  width: 60%;
  line-height: 60px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400px;
  justify-content: space-between;
}
.main .drop-down {
  width: 100%;
  text-align: center;
}

.drop-down:hover {
  background-color: #191D4D;
  cursor: pointer;
}

.drop-down-menu {
  width: 100%;
  margin: 0px;
  padding: 0px;
  transition: all .5s ease;
}
.drop-down-menu .drop-down-menu-item {
  width: 100%;
  background-color: #2f465e;
}


.drop-down-menu .drop-down-menu-item:hover {
  background-color: #191D4D;
}
/* html{ display: grid; height: 100% }
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
  } */
</style>