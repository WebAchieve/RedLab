<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --blue: #2196f3;
  --text: #b5b5b5;
  --dark: #333333;
}
@mixin shadow {
  box-shadow: 2px 10px 8px -4px rgb(33, 150, 243, 0.3);
}
@mixin bacground {
  background: rgb(33, 150, 243, 0.2);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
body{
   background: var(--dark);
}
.container {
  width: 90%;
  margin: 0 auto;
}
.col-6 {
  width: 50%;
  padding: 5px;
}
.col-12 {
  padding: 5px;
  width: 100%;
}
nav{
  height: 148px;
}
#nav-wrap.sticky{
  position: fixed;
  z-index: 1;
  width: 100%;
  top:0;
  animation: 0.3s linear sticky;
  border-bottom: 1px solid var(--blue);
  background: var(--dark);
}
@keyframes sticky {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
///Buttons
.navbar-buttons {
  border: none;
  outline: none;
  color: var(--blue);
  transition: 0.2s;
  border: 1px solid var(--blue);
  background: transparent;
  padding: 7px 10px;
  width: 100%;
  border-radius: 20px;
  margin: 5px 0;
  @include bacground;
  &:hover {
    color: var(--dark);
    background: var(--blue);
    box-shadow: 0 0 5px var(--blue), 0 0 10px var(--blue), 0 0 20px var(--blue);
    transition-delay: 0.2s;
  }
  &.active{
    color: var(--dark);
    background: var(--blue);
    box-shadow: 0 0 5px var(--blue), 0 0 10px var(--blue), 0 0 20px var(--blue);
    transition-delay: 0.2s;
  }
}
 .modile-button{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 5px 0;
    background: var(--dark);
    outline: none;
    border: none;
    border-top:2px solid var(--blue);
    border-bottom:2px solid var(--blue) ;
    bottom: -37px;
    display: none;
    svg{
      width: 20px;
      height: 20px;
    }
  }
  .navbar.slide{
    transform: translateY(0);
  }
////SWITH
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 30px;
  & input {
    display: none;
    &:checked + .switch-slider {
      background-color: #2196f3;
    }
    &:focus + .switch-slider {
      box-shadow: 0 0 1px #2196f3;
    }
    &:checked + .switch-slider:before {
      transform: translateX(16px);
      background: var(--dark);
    }
  }
  &-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    transition: 0.4s;
    border-radius: 34px;
    border: 2px solid var(--blue);
    &::before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 0;
      background-color: var(--blue);
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  &::before {
    content: "RU";
    color: var(--blue);
    position: absolute;
    left: -28px;
    top: 2px;
    font-weight: 700;
    transition: 0.4s;
  }
  &::after {
    content: "EN";
    color: var(--blue);
    position: absolute;
    right: -28px;
    top: 2px;
    font-weight: 700;
    transition: 0.4s;
  }
}
///NAVBAR
.navbar-top {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  &__item {
    input {
      border: 1px solid var(--blue);
      background: transparent;
      color: var(--blue);
      padding: 5px;
      outline: none;
      border-radius: 20px;
      width: 220px;
      padding-right: 30px;
      &::placeholder {
        color: var(--blue);
      }
    }
    button{
      background: transparent;
      position: absolute;
      margin-left: -25px;
      padding: 3px;
      outline: none;
      border:none;
      svg{
        width: 17px;
        height: 17px;
        background: transparent;
        
      }
    }
  }
}
nav {
  @include shadow;
}
.navbar {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  &-items {
    width: 100%;
    padding: 0 10px;
    max-width: 500px;
    p {
      color: var(--text);
    }
  }
  .button-wrap {
    display: flex;
    width: 100%;
  }
}
////LIST
.list {
  width: 100%;
  margin-top: 20px;
  &-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: var(--text);
    border: 1px solid var(--blue);
    padding: 10px 20px;
    margin: 20px 0;
    position: relative;
    border-radius: 40px;
    @include shadow;
    backdrop-filter: blur(10px);
    @include bacground;
    cursor: pointer;
    &:hover{
      transform: translateX(30px);
    }

    &__wrap {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-around;
      & img {
        width: 60px;
        height: 60px;
      }
    }
    &__id {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      padding-top: 7px;
      color: var(--blue);
      font-size: 1.5rem;
      top:-10px;
      left: -30px;
      font-weight: 900;
      transform: rotate(-30deg);
      opacity: .3;
    }
    &__star {
      svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
}
///////BLOCK
.block {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  &-item {
    display: flex;
    border: 1px solid var(--blue);
    @include bacground;
   height: 400px;
    border-radius: 30px;
    overflow: hidden;
    color: var(--text);
    transition: 0.3s ease;
    position: relative;
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      flex: 1;
      position: relative;
      overflow: hidden;
    }
    &__video {
      flex: 1;
      
      
      video {
        object-fit: cover;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        height: 100%;
        width: 100%;
      }
    }
    &:hover {
      transform: scale(1.05);
    }
  }
 
}
.item-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  &__imgwrap {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
  &-content {
    width: 100%;
  }
  &__star {
    svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  &__name {
    margin-left: 10px;
  }
}
.item-content {
  &__phone {
    margin: 20px 0;
  }
}
.item-id{
  position: absolute;
  font-size: 60px;
  color:var(--dark);
  right: 20%;
  top:10%;
  transform: rotate(-45deg);
}
////Media
@media (max-width: 1280px){
  .block-item{
    height: 300px;
  }
}
@media (max-width: 769px){
  .block-item{
    flex-direction: column;
    height: 100%;
  }
  .col-6{
    width: 100%;
  }
}
@media (max-width: 600px){
  .navbar{
    position: absolute;
    width: 100%;
    left: 0;
    background: var(--dark);
    padding: 10px 0;
    flex-direction: column;
    transform: translateY(-100%);
    transition: .3s ease;
    z-index: -10;

  }
  #nav-wrap{
    position: relative;
  }
  #nav{
    height:100%;
    position: relative;
    z-index: 10;
    box-shadow: none;
  }
  .modile-button{
    display:block;
  }
  .navbar-top{
    background: var(--dark);
    width: 100%;
  }
  .container{
    padding-top: 30px;
  }
  .item-id{
    font-size: 50px;
  }
  .navbar-top__item input {
    width: 190px;
}
.item-id {
    top: 25%;


}
.block-item__video video{
  border-top-right-radius: 30px;
}
.list-item__wrap{
  flex-direction: column;
}
.list-item__name{
  margin-top:10px;
}
.ist-item_phone{
  margin-top: 10px;
}
.list-item__wrap img{
  width: 50px;
  height: 50px;
}
.list-item__id{
  left:-20px;
  top:-20px;
}
}

////ANIMATION
.before-enter{
  opacity: 0;
  transform: scale(.3);
  transition: all .8s ease;
}
.enter{
  opacity: 1;
  transform: scale(1);
}
//blok-wrap
.blok-wrap.before-enter>.block-item>.block-item__info>.item-top>.item-top__imgwrap img{
  opacity: 0;
  transform: scale(.3);
  transition: all .8s ease;
}
.blok-wrap.enter>.block-item>.block-item__info>.item-top>.item-top__imgwrap img{
  transition-delay: .5s;
  opacity: 1;
  transform: scale(1);
}
//Name
.blok-wrap.before-enter>.block-item>.block-item__info>.item-top>.item-top__imgwrap>.item-top__name{
  opacity: 0;
  transform: translateX(100px);
  transition: all .8s ease;
}
.blok-wrap.enter>.block-item>.block-item__info>.item-top>.item-top__imgwrap>.item-top__name{
  transition-delay: .5s;
  opacity: 1;
  transform: translateX(0);
}
//age
.blok-wrap.before-enter>.block-item>.block-item__info>.item-content>.item-content__age{
  opacity: 0;
  transform: translateY(100px);
  transition: all .8s ease;
}
.blok-wrap.enter>.block-item>.block-item__info>.item-content>.item-content__age{
  transition-delay: .3s;
  opacity: 1;
  transform: translateX(0);
}
//phone
.blok-wrap.before-enter>.block-item>.block-item__info>.item-content>.item-content__phone{
  opacity: 0;
  transform: translateY(100px);
  transition: all .8s ease;
}
.blok-wrap.enter>.block-item>.block-item__info>.item-content>.item-content__phone{
  transition-delay: .6s;
  opacity: 1;
  transform: translateX(0);
}
//text
.blok-wrap.before-enter>.block-item>.block-item__info>.item-content>.item-content__text{
  opacity: 0;
  transform: translateY(100px);
  transition: all .8s ease;
}
.blok-wrap.enter>.block-item>.block-item__info>.item-content>.item-content__text{
  transition-delay: .9s;
  opacity: 1;
  transform: translateX(0);
}
</style>
