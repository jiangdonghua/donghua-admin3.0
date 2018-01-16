<template>
  <div class="components-container">
    <code>
      Based on <a class="link-type" href="https://github.com/rowanwins/vue-dropzone"> dropzone </a>
    </code>
    <div class="editor-container">
      <dropzone v-on:dropzone-removedFile="dropzoneR" v-on:dropzone-success="dropzoneS" id="myVueDropzone" url="https://httpbin.org/post"></dropzone>
    </div>
  </div>
</template>

<script>
  import Dropzone from '@/components/Dropzone'

  export default {
    name: 'dropzone-demo',
    components: { Dropzone },
    methods: {
      dropzoneS(file) {
        console.log(file)
        this.$message({ message: 'Upload success', type: 'success' })
      },
      dropzoneR(file) {
        console.log(file)
        this.$message({ message: 'Delete success', type: 'success' })
      }
    }
  }
</script>

<style>
 code{ background: #eef1f6;
  padding: 15px 16px;
  margin-bottom: 20px;
  display: block;
  line-height: 36px;
  font-size: 15px;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
</style>
