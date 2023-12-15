<template>
    <div class="dashboard">
        <router-view
            name="aside"
            class="dashboard__aside"
        />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import FormsListAside from '@/components/Dashboard/DashboardAside/index.vue'

</script>

<style scoped lang="sass">
.dashboard
    display: flex
    gap: 30px
    background: $base-gray

    &__aside
        max-width: 29%
        width: 100%
        height: 100vh
        background: $base-white
        border-radius: $default-br

</style>
