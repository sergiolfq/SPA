<template>
    <div>
        <h1>MainMenu</h1>
        <router-link :to="{name: 'anual'}">Anual</router-link>
        <router-link :to="{name: 'monthly'}">Monthly</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import VueRouter from 'vue-router';
    import AnualReport from './AnualReport.vue';
    import MonthlyReport from './MonthlyReport.vue';

    export default {
        router: new VueRouter({
            routes: [
                {
                    path: '/anual',
                    name: 'anual',
                    component: AnualReport
                },
                {
                    path: "/",
                    redirect : { name: 'anual'}
                },
                {
                    path: "/monthly",
                    name: 'monthly',
                    component: MonthlyReport
                }
            ]
        }),
        mounted: function(){
            console.log("mounted");
        }
    }
</script>

<style scoped>
    a {
        border: solid 1px black;
        padding: 5px;
        margin-bottom: 4px;
    }
    .router-link-active{
        font-weight: bold;
        border-bottom: none;
    }
</style>
