<template>
    <div
        :class="[
            't-input',
            type,
             {
                 _error: error.length,
                 _disabled: disabled
             }
        ]"
    >
        <div class="t-input__wrap">
            <input
                class="t-input__input"
                :type="type"
                v-bind="$attrs"
                :id="id"
                v-model="value"
                @change="change"
            />
            <label
                :for="id"
                :class="['t-input__label', { _fill: value.length }]"
            >
                {{ label }}
            </label>
        </div>
        <p v-if="error.length" class="t-input__error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";

// props
const props = defineProps({
    label: {
        type: String,
        default: 'Input label'
    },
    id: {
        type: [Number, String],
        default: 'default'
    },
    error: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    type: {
        type: [Number, String],
        default: ''
    }
})

const value = ref('');

// emit для кнопки
const emit = defineEmits(['change'])

// methods
const change = () => {
    emit('change', {
        id: props.id,
        value: value.value
    })
}
</script>

<style scoped lang="sass">
.t-input
    position: relative
    width: 100%
    transition: all 0.3s ease

    &._error
        .t-input__input
            border: 2px solid $base-error

            &:hover
                border: 2px solid $base-error

    &__wrap
        position: relative

    &__input
        position: relative
        z-index: 2
        width: 100%
        height: 70px
        padding: 10px 30px
        background: $base-gray
        border-radius: $default-br
        border: 2px solid $base-gray
        outline: none
        color: $base-black
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: normal
        transition: all 0.3s ease

        &:focus
            border: 2px solid $base-primary

        &:focus + .t-input__label
            top: 0
            left: 27px
            padding: 2PX 3px
            color: $base-black
            font-size: 16px
            font-style: normal
            font-weight: 400
            line-height: normal
            background: $base-gray
            z-index: 3

    &__label
        position: absolute
        top: 50%
        left: 30px
        transform: translateY(-50%)
        color: $light-black
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: normal
        transition: all 0.3s ease
        z-index: 2

        &._fill
            top: -10px
            padding: 0 3px
            background: $base-gray
            z-index: 3

    &__error
        position: absolute
        top: calc(100% + 6px)
        left: 24px
        color: $base-error
        font-size: 14px
        font-weight: 500
        line-height: 21px

</style>
