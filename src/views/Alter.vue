<template>
    <div class="alter">
        <img alt="Name" src="https://picsum.photos/100">
        <h1>Alter {{ $route.params.id }}</h1>
        <p>18 y.o.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</template>

<script>
    export default {
        name: "Alter.vue",
    };
</script>

<style scoped>
    .alter {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .alter img {
        border-radius: 50%;
    }
</style>
