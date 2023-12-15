<template>
    <button
        type="button"
        class="btn"
    >
        {{ label }}
    </button>
</template>

<script setup lang="ts">

const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    }
})
</script>

<style scoped lang="sass">
.btn
    width: 100%
    padding: 16px 20px
    border: none
    border-radius: $default-br
    background-color: $base-primary
    color: $base-white
    font-family: "CeraPro", sans-serif
    font-size: 16px
    font-weight: 500
    line-height: normal
    transition: background-color .3s ease-in-out

    &:hover
        background-color: #36933f

    &.light
        border: solid 1px $base-primary
        background-color: $base-white
        color: $base-primary

        &:hover
            background-color: $base-primary
            color: $base-white

    &.ghost
        background: $base-white
        color: $base-primary

        &:hover
            background-color: $base-error
            color: $base-white

</style>
