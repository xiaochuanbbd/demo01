<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor" ></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import {mapActions,mapState,mapMutations,mapGetters} from "vuex"
import { Handler } from 'mockjs';

export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
    mounted() {
      this.getFloorList()
  },
  methods:{
      getFloorList(){
          this.$store.dispatch("getFloorList")
      }
  },
  computed:{
      ...mapState({
    floorList:(state) => state.home.floorList
  })
  },

};
</script>

<style lang="less" scoped>

</style>
