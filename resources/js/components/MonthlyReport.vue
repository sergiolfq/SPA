<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> {{ $t("message.monthly_report") }} </div>
                    <div class="card-body">
                       {{ $t("message.this_is_your_monthly_report") }}
                       <img class="img-fluid" :src='img_src_one'>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return { img_src_one: '/img/chart1.png'  }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
