<template>
    <section class="section">
        <div class="section-header">
            <h1>Формы</h1>
            <Button
                label="Создать форму"
            />
        </div>
        <ul class="forms-list">
            <li
                v-for="(item, index) in formsList"
                :key="index"
                class="forms-list__item"
            >
                <div class="forms-list__item-info">
                    <h2>{{ item.title }}</h2>
                    <p>Автор: {{ item.author }}</p>
                    <p>Дата создания: {{ item.creationDate }}</p>
                </div>
                <div class="forms-list__item-btns">
                    <Button
                        label="Редактировать"
                        class="light"
                    />
                    <Button
                        label="Удалить"
                        class="ghost"
                    />
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import {ref} from "vue";

import Button from '@/components/ui/Button/Button.vue'


const formsList = ref([
    {
        title: 'Форма регистрации участников 1',
        author: 'user 1',
        creationDate: '01.01.23'
    },
    {
        title: 'Форма регистрации участников 2',
        author: 'user 2',
        creationDate: '02.01.23'
    },
    {
        title: 'Форма регистрации участников 3',
        author: 'user 3',
        creationDate: '03.01.23'
    }
])

</script>

<style scoped lang="sass">
.section
    display: flex
    flex-direction: column
    gap: 60px
    width: 100%
    padding: 80px 11% 80px 0

    &-header
        display: flex
        align-items: center
        justify-content: space-between
        width: 100%

        h1
            color: $base-black
            font-size: 40px
            font-weight: 500
            line-height: normal

        button
            max-width: 160px
            width: 100%

    .forms-list
        display: flex
        flex-direction: column
        gap: 30px

        &__item
            display: flex
            justify-content: space-between
            width: 100%
            min-height: 190px
            padding: 24px
            border-radius: $default-br
            background: $base-white
            list-style: none

            &-info
                display: flex
                flex-direction: column
                width: 100%
                height: 100%
                gap: 8px
                margin-right: 30px

                h2
                    color: $base-black
                    font-size: 24px
                    font-weight: 500
                    line-height: normal

                p
                    color: $light-black
                    font-size: 14px
                    font-weight: 400
                    line-height: normal

                    &:last-child
                        margin-top: auto

            &-btns
                display: flex
                flex-direction: column
                justify-content: space-between
                max-width: 180px
                width: 100%

                .ghost:hover
                    background-color: $base-error
                    color: $base-white


</style>
