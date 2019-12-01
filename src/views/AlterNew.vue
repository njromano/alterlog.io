<template>
    <div class="alter-new">
        <h1>New Alter</h1>
        <div class="add-image">
            <img alt="new image" src="https://picsum.photos/200?blur" class="elevation-10">
            <v-icon color="white">camera_alt</v-icon>
        </div>
        <div class="alter-form">
            <v-text-field
                    label="Name"
                    placeholder="Name"
                    solo
            ></v-text-field>
            <v-text-field
                    label="Age"
                    placeholder="Age"
                    solo
            ></v-text-field>
            <v-textarea
                    solo
                    label="Alter description"
            ></v-textarea>
        </div>
        <v-btn color="primary" block class="py-2">Create</v-btn>
    </div>
</template>

<script>
    export default {
        name: "AlterNew",
    };
</script>

<style scoped>
    .alter-new {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        border-radius: 50%;
    }

    .alter-form {
        width: 100%;
        margin: 1rem;
    }

    .add-image {
        position: relative;
    }

    .add-image img {
        display: block;
        top: 0;
    }

    .add-image i {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
</style>
