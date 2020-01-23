<template>
    <carousel :perPage="1" :paginationColor="'#d4cfd4'" class="background-carousel center">
        <slide>
            <img src="../../assets/slides/slide1.png">
        </slide>
        <slide>
            <img src="../../assets/slides/slide1.png">
        </slide>
        <slide>
            <img src="../../assets/slides/slide1.png">
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: "CarouselHome",
        components:{
            Carousel, Slide
        }
    }
</script>

<style scoped>

    img{
        width: 100%;
        height: auto;
    }

    .background-carousel{
        background-color: #f0f0f0;
        width: 100%;
    }

</style>
