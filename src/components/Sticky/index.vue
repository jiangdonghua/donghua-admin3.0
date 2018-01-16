<template>
  <div :style="{height:height+'px',zIndex:zIndex}">
    <div :class="className"
         :style="{top:stickyTopInit+'px',zIndex:zIndex,position:position,width:width,height:height+'px'}">
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Sticky',
    props: {
      stickyTop: {
        type: Number,
        default: 15
      },
      zIndex: {
        type: Number,
        default: 1
      },
      className: {
        type: String
      }
    },
    data(){
      return {
        active: false,
        position: '',
        currentTop: '',
        width: undefined,
        height: undefined,
        child: null,
        stickyHeight: 0,
        stickyTopInit: 15
      }
    },
    mounted(){
      console.log(this.$el.getBoundingClientRect().height)
      this.height = this.$el.getBoundingClientRect().height
      window.addEventListener('scroll', this.handleScroll)
    },
    activated(){
      this.handleScroll()
    },
    destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      sticky(){
        if (this.active) {
          return
        }
        this.position = 'fixed'
        this.active = true
        this.stickyTopInit = this.stickyTop
        this.width = this.width + 'px'
      },
      reset(){
        if (!this.active) {
          return
        }
        this.position = ''
        this.width = 'auto'
        this.stickyTopInit = 15
        this.active = false
      },
      handleScroll(){
        this.width = this.$el.getBoundingClientRect().width
        const offsetTop = this.$el.getBoundingClientRect().top
        if (offsetTop <= this.stickyTop) {
          this.sticky()
          return
        }
        this.reset()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
