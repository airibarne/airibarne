<template>
    <button class="menu-toggle">
        <span class="menu-toggle--hamburger">

        </span>
    </button>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class BurgerMenu extends Vue {
        public isBurgerActive: boolean = false;
    }
</script>

<style scoped>

</style>
