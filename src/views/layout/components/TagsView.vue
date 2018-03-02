<template>
  <div class="tag-view-container">
    <div class="tags-view-wrapper">
      <router-link ref="tag" class="tag-view-item" :class="isActive(tag)?'active':''"
                   v-for="tag in Array.from(visitedViews)" :to="tag.path"
                   :key="tag.path">
        {{tag.title}}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    name: 'TagsView',
    data(){
      return {}
    },
    computed: {
      visitedViews(){
        return this.$store.state.tagsView.visitedViews
      }
    },
    watch: {
      $route(){
        this.addViewTags()
        //console.log(Array.from(this.$store.state.tagsView.visitedViews))
      }
    },
    mounted(){
      this.addViewTags()
    },
    methods: {
      generateRoute(){
        if (this.$route.name) {
          return this.$route
        }
        return false
      },
      isActive(route){
        return route.path === this.$route.path || route.name === this.$route.name
      },
      addViewTags(){
        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.$store.dispatch('addVisitedViews', route)
      },
      closeSelectedTag(view){

        this.$store.dispatch('delVisitedViews', view).then((views) => {
          console.log(views[0].slice(-1)[0])
          if (this.isActive(view)) {
            //const latestView = views.slice(-1)[0]
            const latestView = views[0].slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView.path)
            } else {
              this.$router.push('/')
            }
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tag-view-container {
    .tags-view-wrapper {
      background: #fff;
      height: 34px;
      border-bottom: 1px solid #d8dce5;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
      .tag-view-item {
        display: inline-block;
        position: relative;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;
        &:first-of-type {
          margin-left: 15px;
        }
        &.active {
          background-color: #42b983;
          color: #fff;
          border-color: #42b983;
          &::before {
            content: '';
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
          }
        }
      }
    }
  }
</style>
