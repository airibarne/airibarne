<template>
    <button :class="{ 'nav-open' : navOpen}" class="menu-toggle" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="navOpen = !navOpen">
        <span class="menu-toggle--hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" class="burger"><title>Open Menu</title>
                <path class="burger--wave" d="M100,7.53c-6.25,4.888-18.75,4.888-25,0s-18.75-4.888-25,0-18.75,4.888-25,0S6.25,2.642,0,7.53" style="transform: translateX(-50%);"></path>
                <path class="burger--wave" d="M100,25c-6.25,4.888-18.75,4.888-25,0s-18.75-4.888-25,0-18.75,4.888-25,0S6.25,20.112,0,25" style="transform: translateX(-50%);"></path>
                <path class="burger--wave" d="M100,42.47c-6.25,4.888-18.75,4.888-25,0s-18.75-4.888-25,0-18.75,4.888-25,0-18.75-4.888-25,0" style="transform: translateX(-50%);"></path>
            </svg>
        </span>
        <span class="menu-toggle--close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>Close Menu</title>
                <polygon points="48.53 3.591 46.409 1.47 25 22.879 3.591 1.47 1.47 3.591 22.879 25 1.471 46.409 3.592 48.53 25 27.121 46.408 48.529 48.529 46.408 27.121 25 48.53 3.591"></polygon>
            </svg>
      </span>
    </button>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import anime from 'animejs';

    @Component
    export default class BurgerMenu extends Vue {
        public done: boolean = false;
        public menuWave;
        public navOpen: boolean = false;

        public mouseEnter() {
            this.menuWave.restart();
            this.done = false;
        }

        public mouseLeave() {
            this.done = true;
        }

        public mounted() {
            const that = this;
            this.menuWave = anime({
                targets: '.burger--wave',
                duration: 500,
                translateX: ['0%', '-50%'],
                easing: 'linear',
                autoplay: false,
                complete() {
                    if (!that.done) {
                        this.restart();
                    }
                },
            });
        }
    }
</script>

<style scoped>
    .menu-toggle {
      background: none;
      -webkit-appearance: none !important;
      border: none;
      border-radius: 0;
      outline: none;
      text-decoration: none;
      cursor: pointer;
      pointer-events: auto;
      display: block;
      position: relative;
      padding: 1rem 1.25rem;
      overflow: hidden;
      z-index: 3;
      color: inherit;
      -webkit-transition: color .15s linear;
      transition: color .15s linear; }
      .menu-toggle .burger {
        display: block;
        width: auto;
        height: 100%; }
        .menu-toggle .burger .burger--wave {
          stroke: currentColor;
          fill: transparent;
          stroke-width: 5px; }
      .menu-toggle span {
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        overflow: hidden; }
      .menu-toggle--hamburger {
        -webkit-transition: opacity .15s .25s linear;
        transition: opacity .15s .25s linear; }
        .nav-open .menu-toggle--hamburger {
          -webkit-transition-delay: 0s;
                  transition-delay: 0s;
          opacity: 0; }
      .menu-toggle--close {
        position: absolute;
        top: 1rem;
        opacity: 0;
        -webkit-transform: scale(0.65);
                transform: scale(0.65);
        color: #efefef;
        -webkit-transition: opacity .15s linear, -webkit-transform .25s ease-out;
        transition: opacity .15s linear, -webkit-transform .25s ease-out;
        transition: opacity .15s linear, transform .25s ease-out;
        transition: opacity .15s linear, transform .25s ease-out, -webkit-transform .25s ease-out; }
        .nav-open .menu-toggle--close {
          opacity: 1;
          -webkit-transform: none;
                  transform: none;
          -webkit-transition-delay: .15s;
                  transition-delay: .15s; }

</style>
