<template>
  <div>
    <div class="menu-container">
      <nav>
        <ul class="menu">
          <li class="dropdown dropdown-1">
            TranslateY
            <ul class="dropdown_menu dropdown_menu-1">
              <li class="dropdown_item-1">Item 1</li>
              <li class="dropdown_item-2">Item 2</li>
              <li class="dropdown_item-3">Item 3</li>
              <li class="dropdown_item-4">Item 4</li>
              <li class="dropdown_item-5">Item 5</li>
            </ul>
          </li>
          <li class="dropdown dropdown-2">
            RotateX
            <ul class="dropdown_menu dropdown_menu-2">
              <li class="dropdown_item-1">Item 1</li>
              <li class="dropdown_item-2">Item 2</li>
              <li class="dropdown_item-3">Item 3</li>
              <li class="dropdown_item-4">Item 4</li>
              <li class="dropdown_item-5">Item 5</li>
            </ul>
          </li>
          <li class="dropdown dropdown-3">
            TranslateZ
            <ul class="dropdown_menu dropdown_menu-3">
              <li class="dropdown_item-1">Item 1</li>
              <li class="dropdown_item-2">Item 2</li>
              <li class="dropdown_item-3">Item 3</li>
              <li class="dropdown_item-4">Item 4</li>
              <li class="dropdown_item-5">Item 5</li>
            </ul>
          </li>
          <li class="dropdown dropdown-4">
            Scale
            <ul class="dropdown_menu dropdown_menu-4">
              <li class="dropdown_item-1">Item 1</li>
              <li class="dropdown_item-2">Item 2</li>
              <li class="dropdown_item-3">Item 3</li>
              <li class="dropdown_item-4">Item 4</li>
              <li class="dropdown_item-5">Item 5</li>
            </ul>
          </li>
          <li class="dropdown dropdown-5">
            TranslateX
            <ul class="dropdown_menu dropdown_menu-5">
              <li class="dropdown_item-1">Item 1</li>
              <li class="dropdown_item-2">Item 2</li>
              <li class="dropdown_item-3">Item 3</li>
              <li class="dropdown_item-4">Item 4</li>
              <li class="dropdown_item-5">Item 5</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdowns",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Sen&display=swap");

body {
  background: #374e59;
  color: #c06162;
  font-family: "Sen";
  margin-bottom: 200px;
  height: 100%;
}

h1 {
  font-size: 48px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
}

.menu-container {
  margin-top: 20px;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }
}
.menu-container:nth-child(3) {
  margin-top: 200px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

.menu {
  display: flex;
  justify-content: center;

  .dropdown {
    padding: 20px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #c06162;
    background: #34495e;
    position: relative;
    font-size: 18px;
    perspective: 1000px;
    z-index: 100;
  }
  .dropdown:hover {
    background: #2980b9;
    cursor: pointer;
  }
  .dropdown:hover .dropdown_menu li {
    display: block;
  }
  .dropdown_menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    perspective: 1000px;
    z-index: -1;
    width: 100%;
    margin: 0px;
    padding: 0px;
    li {
      display: none;
      color: white;
      background-color: #34495e;
      padding: 10px 20px;
      width: 100%;
      margin: 0px;
      font-size: 16px;
      opacity: 0;
      &:hover {
        background-color: #2980b9;
      }
    }
  }

  // Menu as a whole animated
  .dropdown:hover .dropdown_menu--animated {
    display: block;
  }
  .dropdown_menu--animated {
    display: none;
    li {
      display: block;
      opacity: 1;
    }
  }
  // Menu Items Animated invidually

  .dropdown_menu-1 {
    @for $num from 1 through 5 {
      .dropdown_item-#{$num} {
        transform-origin: top center;
        animation: slideDown 300ms ($num * 60ms) ease-in-out forwards;
      }
    }
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-60px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dropdown_menu-2 {
    @for $num from 1 through 5 {
      .dropdown_item-#{$num} {
        transform-origin: top center;
        animation: rotateX 300ms ($num * 60ms) ease-in-out forwards;
      }
    }
  }

  @keyframes rotateX {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }

  .dropdown_menu-3 {
    @for $num from 1 through 5 {
      .dropdown_item-#{$num} {
        transform-origin: top center;
        animation: rotateZ 300ms ($num * 60ms) ease-in-out forwards;
      }
    }
  }

  @keyframes rotateZ {
    0% {
      opacity: 0;
      transform: translateZ(290px);
    }

    80% {
      transform: translateZ(10px);
    }

    100% {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  .dropdown_menu-4 {
    @for $num from 1 through 5 {
      .dropdown_item-#{$num} {
        transform-origin: top center;
        animation: scaleZ 300ms ($num * 60ms) ease-in-out forwards;
      }
    }
  }

  @keyframes scaleZ {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    80% {
      transform: scale(1.07);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .dropdown_menu-4 {
    @for $num from 1 through 5 {
      .dropdown_item-#{$num} {
        transform-origin: top center;
        animation: scaleZ 300ms ($num * 60ms) ease-in-out forwards;
      }
    }
  }

  @keyframes scaleZ {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    80% {
      transform: scale(1.07);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .dropdown_menu-5 {
    @for $num from 1 through 5 {
      .dropdown_item-#{$num} {
        transform-origin: top center;
        animation: translateX 300ms ($num * 60ms) ease-in-out forwards;
      }
    }
  }

  @keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }

    80% {
      transform: translateX(-5px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
}
</style>