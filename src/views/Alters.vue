<template>
    <div class="alters">
        <div class="alter-card" v-for="a in alters">
            <img :src="a.image">
            <span>{{ a.name }}</span>
        </div>
        <div class="alter-card">
            <v-icon>add</v-icon>
            <span>Add alter</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Alters",
        data() {
            return {
                alters: [
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .alters {
        display: grid; /* 1 */
        grid-template-columns: repeat(auto-fill, calc(100px + 2em)); /* 2 */
        grid-gap: 1rem; /* 3 */
        justify-content: space-evenly; /* 4 */
    }

    .alters::after {
        content: "";
        flex: auto;
    }

    .alter-card {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 1em;
        justify-content: center;
    }
    .alter-card img {
        border-radius: 50%;
    }
</style>
