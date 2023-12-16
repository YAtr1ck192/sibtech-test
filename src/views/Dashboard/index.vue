<template>
    <div class="dashboard">
        <router-view
            name="aside"
            class="dashboard__aside"
        />
        <router-view
            class="dashboard__content"
        />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.dashboard
    display: flex
    gap: 30px
    min-height: 100vh
    background: $base-gray

    &__aside
        max-width: 29%
        width: 100%
        height: 100vh
        background: $base-white
        border-radius: $default-br

    &__content
        max-width: calc(71% - 30px)
        width: 100%
        margin-left: auto

</style>
