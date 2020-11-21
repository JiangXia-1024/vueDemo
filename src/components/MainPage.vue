<template>
  <div class="layout">
    <Layout>
      <!-- <Header> -->
        <!-- <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">VueDemo</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
             模块1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
                  模块2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
                模块3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
                 模块4
            </MenuItem>
          </div>
        </Menu> -->
      <!-- </Header> -->
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <!-- <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem> -->
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
        </Card>
      </Content>
      
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "main-page",
    data() {
      return {
        tableData: [],
        columns: [
          {field: 'id', title: '编号', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'email', title: '邮箱', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'password', title: '密码', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'username', title: '姓名', width: 280, titleAlign: 'center', columnAlign: 'center',isResize:true}
        ]
      }
    },
    created() {
      //在created函数中使用axios的get请求向后台获取用户信息数据
        // this.$ajax('http://localhost:8080/do/user/userAll').then(res => {
         this.$axios.get('/do/user/userAll').then(res => {
         this.tableData = res.data
          console.log(res.data);
       }).catch(function (error) {
        console.log(error);
     });
  }
  }

</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>