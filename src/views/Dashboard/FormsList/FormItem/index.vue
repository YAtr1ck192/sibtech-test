<template>
    <div class="dashboard">
        <router-view
            name="aside"
            class="dashboard__aside"
        />
        <router-view
            name="default"
            class="dashboard__content"
        />
    </div>
</template>
