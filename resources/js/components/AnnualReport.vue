<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> {{ $t("message.annual_report") }} </div>
                    <div class="card-body">
                        {{ $t("message.this_is_annual_report") }}
                        <img class="img-fluid" :src="img_src_two">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { img_src_two: '/img/chart2.png',}
        }
    }
</script>
