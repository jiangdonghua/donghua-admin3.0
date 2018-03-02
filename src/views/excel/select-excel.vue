<template>
  <div class="excel-container">
    <el-input :placeholder="excel.placeholder" prefix-icon="el-icon-document" style="width:340px"></el-input>
    <el-button type="primary" style="margin-bottom: 20px" @click="handleDownload">{{excel.exportExcel}}excel</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" ref="multipleTable"
              @selection-change="handleSelectionChange" border fit highlight-current-row>
      <el-table-column
        type="selection"
        align="center"
        width="55">
      </el-table-column>
      <el-table-column
        label="id"
        align="center">
        <template slot-scope="scope">
          {{scope.row.number}}

        </template>
      </el-table-column>
      <el-table-column
        label="company"
        align="center">
        <template slot-scope="scope">
          {{scope.row.company}}

        </template>
      </el-table-column>
      <el-table-column
        label="title"
        align="center">
        <template slot-scope="scope">
          {{scope.row.title}}

        </template>
      </el-table-column>
      <el-table-column
        label="status"
        align="center">
        <template slot-scope="scope">
          {{scope.row.status}}

        </template>
      </el-table-column>
      <el-table-column
        label="date"
        align="center">
        <template slot-scope="scope">
          {{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {fetchList} from '@/api/article'
  import {parseTime} from '@/utils'
  export default{
    name: 'exportExcel',
    data(){
      return {
        list: null,
        listLoading: true,
        filename: '',
        downloadLoading: false,
        multipleSelection: [],
        excel: {
          exportExcel: '导出',
          selectedExport: '导出已选择项',
          placeholder: '请输入文件名(默认excel-list)'
        },
      }
    },
    created(){
      this.getList()
    },
    methods: {
      getList(){
        this.listLoading = true
        fetchList().then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      },
      handleDownload(){
        if (this.multipleSelection.length) {
          this.downloadLoading = true
          import('@/vendor/Export2Excel').then(excel => {
            const tHeader = ['id', 'company', 'title', 'status', 'date']
            const filterVal = ['id', 'company', 'title', 'status', 'timestamp']
            const list = this.multipleSelection
            const data = this.formatJson(filterVal, list)
            excel.export_json_to_excel(tHeader, data, this.filename)
            this.$refs.multipleTable.clearSelection()
            this.downloadLoading = false
          })
        } else {
          this.$message({
            message: '至少选一个',
            type: 'warning'
          })
        }
      },
      formatJson(filterVal, jsonData){
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      },
//      toggleSelection(rows) {
//        if (rows) {
//          rows.forEach(row => {
//            this.$refs.multipleTable.toggleRowSelection(row);
//          });
//        } else {
//          this.$refs.multipleTable.clearSelection();
//        }
//      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

