<template>
  <div>
    <!--父组件中使用v-model，这里使用test与子组件的msg值为双向绑定关系 -->
    <zicomponent class="fu" v-model="test" ></zicomponent> 
    <p>{{'父组件的值：' + test}}</p>
    <button @click="btn">
        父组件改变子组件的值
    </button>
    
  </div>
</template>

<script>
// 在父组件中导入子组件
  import zicomponent from '@/components/zicomponent'
  export default {
    name:'fucomponent',
    data () {
      return {
        test: ''
      }
    },
    methods: {
      btn () {
        this.test += 1 
      }
    },
    components:{
      zicomponent
    }
  }
</script>