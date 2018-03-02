<template>
<div class="scroll-container" ref="scrollContainer">
  <div class="scroll-wrapper" ref="scrollWrapper">

  </div>
</div>
</template>

<script type="text/ecmascript-6">

    export default{
        name:'scrollPane'
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container{
  width: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  .scroll-wrapper{
    position: absolute;
  }
}
</style>
