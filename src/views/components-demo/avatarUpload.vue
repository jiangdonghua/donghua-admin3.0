<template>
<div>
  <el-button type="primary" class="btn" @click="show=true">设置头像</el-button>
  <my-upload field="img"
             @crop-success="cropSuccess"
             @crop-upload-success="cropUploadSuccess"
             @crop-upload-fail="cropUploadFail"
             v-show="show"
             :width="300"
             :height="300"
             @input='close'
             :value.sync="show"
             url="https://httpbin.org/post"></my-upload>
  <img :src="imgDataUrl" class="avatar">
</div>
</template>

<script type="text/ecmascript-6">
  import myUpload from 'vue-image-crop-upload'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    export default{
      name:'avatar-upload',
      data() {
          return{
            show: false,
            imgDataUrl: 'http://stdl.qq.com/stdl/newtabcms/icon/0042_100.png?imageView2/1/w/80/h/80' // the datebase64 url of created image
          }

      },
      components: {
        ElButton, 'my-upload': myUpload
      },
      methods: {
        toggleShow() {
          this.show = !this.show;
        },
        close(){
          this.show=false
        },
        /**
         * crop success
         *
         * [param] imgDataUrl
         * [param] field
         */
        cropSuccess(imgDataUrl, field){
          console.log('-------- crop success --------');
          this.imgDataUrl = imgDataUrl;
        },
        /**
         * upload success
         *
         * [param] jsonData   服务器返回数据，已进行json转码
         * [param] field
         */
        cropUploadSuccess(jsonData, field){
          console.log('-------- upload success --------');
          console.log(jsonData);
          console.log('field: ' + field);
        },
        /**
         * upload fail
         *
         * [param] status    server api return error status, like 500
         * [param] field
         */
        cropUploadFail(status, field){
          console.log('-------- upload fail --------');
          console.log(status);
          console.log('field: ' + field);
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.avatar{
  width: 200px;
  height: 200px;
  border-radius:50%;
}
</style>
