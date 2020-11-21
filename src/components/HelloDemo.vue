<template>
  <div class="hello">
    <h1>{{msg}}</h1>
     <p>-----------------------------------------------------------------------------------------------------</p>
    <!--输入框.lazy 需要点击enter label的值菜才改变-->
    <input v-model.lazy="inputtext"  style="width:200px"/>
    <p>输入框的值是：{{inputtext}}</p>
    <p>-----------------------------------------------------------------------------------------------------</p>
    <!--下拉框-->
    <select v-model="selected" style="width:200px">
      <option value="安徽">安徽</option>
      <option value="上海">上海</option>
      <option value="北京">北京</option>
    </select>
    <p>选中的是:{{selected}}</p>
     <p>-----------------------------------------------------------------------------------------------------</p>
    <!--单选框-->
    <input type="radio" id="radio1" value="单选框1" v-model="radiovalue">
    <label for="radio1">单选框1</label>
    <input type="radio" id="radio2" value="单选框2" v-model="radiovalue">
    <label for="radio2">单选框2</label>
    <p>单选框的值是：{{radiovalue}}</p>
    <p>-----------------------------------------------------------------------------------------------------</p>
      <!--复选框-->
      <input type="checkbox" id="one" value="北京" v-model.lazy="checkboxvalue">
      <label for="one">北京</label>
       <input type="checkbox" id="two" value="广州" v-model.lazy="checkboxvalue">
      <label for="two">广州</label>
       <input type="checkbox" id="three" value="深圳" v-model.lazy="checkboxvalue">
      <label for="three">深圳</label>
      <p>复选框的值：{{checkboxvalue}}</p>
      
  </div>
</template>

<script>
export default {
  name: 'HelloDemo',
  data () {
    return {
      msg: 'Hello World---1024笔记',
      selected:'',
      inputtext:'',
      radiovalue:'',
      checkboxvalue:[]
    }
  }
}
</script>
<style scoped>
h1{
  font-weight: normal;
}
</style>
