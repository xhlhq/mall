<template>
  <div class="recommend">
      <div v-for="(item,index) in recommend" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;            
        text-align: center;
        font-size: 12px;
        padding: 1px 0 20px;
        border-bottom: 8px dotted #eee;
    }
    .recommend>div {
        flex: 1;
    }
    .recommend img {
        width: 80%;
        margin-bottom: 10px;
    }
</style>