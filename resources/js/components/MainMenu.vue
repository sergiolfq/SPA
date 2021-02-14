<template>
    <div>
        <div style="position: relative;float:right">
            <select  name="locale" v-model="lang" @change="onChange($event)">
                <option  value="en">EN </option>
                <option value="fr" >FR </option>
            </select>
        </div>
        <h1> {{ $t("message.mainmenu") }} </h1>
        <router-link :to="{name: 'annual'}"> {{ $t("message.annual") }} </router-link>
        <router-link :to="{name: 'monthly'}"> {{ $t("message.monthly") }} </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import VueRouter from 'vue-router';
    import AnnualReport from './AnnualReport.vue';
    import MonthlyReport from './MonthlyReport.vue';

    export default {
        router: new VueRouter({
            routes: [
                {
                    path: '/annual',
                    name: 'annual',
                    component: AnnualReport
                },
                {
                    path: "/",
                    redirect : { name: 'annual'}
                },
                {
                    path: "/monthly",
                    name: 'monthly',
                    component: MonthlyReport
                }
            ]
        }),
        data: function(){
            let lang = localStorage.getItem('lang')||en ;
            return { lang : lang}
        },
        methods: {
            onChange(event) {
                localStorage.setItem('lang',event.target.value);
                this.$i18n.locale= event.target.value;
            }
        }
    }
</script>

<style scoped>
    a {
        /*border: solid 1px black;*/
        padding: 5px;
        margin-bottom: 4px;
        text-align: center;
    }
    .router-link-active{
        font-weight: bold;
        /*border-bottom: solid 1px black;*/
    }
</style>
