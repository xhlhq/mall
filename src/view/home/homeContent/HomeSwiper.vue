<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
    <!-- <swiper-item>
              <a :href="banner[0].link">
                  <img :src="banner[0].image" alt="">
              </a>
          </swiper-item>
          <swiper-item>
              <a :href="banner[1].link">
                  <img :src="banner[1].image" alt="">
              </a>
          </swiper-item>
          <swiper-item>
              <a :href="banner[2].link">
                  <img :src="banner[2].image" alt="">
              </a>
          </swiper-item>
          <swiper-item>
              <a :href="banner[3].link">
                  <img :src="banner[3].image" alt="">
              </a>
          </swiper-item> -->
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:"HomeSwiper",
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
};
</script>

<style></style>
