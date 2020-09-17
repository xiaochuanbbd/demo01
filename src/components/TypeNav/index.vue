<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOutDiv" @mouseenter="moveInDiv">
        <h2 class="all">全部商品分类</h2>
      <transition name="show">
        <div class="sort" v-show="isShow">
          <div class="all-sort-list2" @click="toSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{item_on:currentIndex===index}"
              @mouseenter="moveIn(index)"
            >
              <h3>
                <a
                  href="javascript:;"
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                >{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a
                        href="javascript:;"
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                      >{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a
                          href="javascript:;"
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                        >{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow:true,
    };
  },
  mounted() {
    this.getCategoryList();
    if(this.$route.path!=='/home'){
      this.isShow=false;
    }
  },
  methods: {
    //在vuex中借用方法
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
    //使用lodsh的throttle节流， 时间分段
     moveIn: throttle(
      function (index) {
        // console.log(index);
        this.currentIndex = index;
      },
      50,
      { trailing: false }
    ),
    moveInDiv(){
      if(this.$route.path!=='/home'){
        this.isShow = true;
      }
    },
    moveOutDiv(){
      this.currentIndex = -1;
         if(this.$route.path!=='/home'){
             this.isShow = false;
      }
    },

    //使用编程式导航去search页面
    toSearch(event){
        let target  = event.target;
        let data = target.dataset;
        console.log(data);
        let {categoryname,category1id,category2id,category3id}  = data;
       
        if(categoryname){

             let location = {
            name:'search',
         }

            let query = {
                categoryName:categoryname
            }
            if(category1id){
                query.category1ID = category1id
            }else if(category2id){
                query.category2ID = category2id

            }else{
                query.category3ID = category3id

            }
            let  {params} = this.$route
            if(params){
              location.params = params
            }
            location.query = query
            if(this.$route.pathv!=="/home"){
          this.$router.replace(location)

         }else{
          this.$router.push(location)
         }
        }

    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;


        //transtion 
        &.show-enter{
          opacity: 0;
          height: 0;
        }
        &.show-enter-active{
          transition: all .5s;
        }
        &.show.enter-to{
          opacity: 1;
          height:461px ;
        }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: yellowgreen;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
