<template>
    <burger-menu></burger-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BurgerMenu from '@/components/BurgerMenu.vue';

@Component({
    components: {BurgerMenu},
})
export default class Main extends Vue {
}
</script>
