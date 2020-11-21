<template>
  <div>
    <p>{{'子组件的值：'+ msg}}</p>
    <button @click="btn1">子组件改变父组件的值</button>
  </div>
</template>

<script>
  export default {
    name:'zicomponent',
    //使用model，前面提到prop属性是要将msg作为该组件被使用时父组件通过v-model能取到的值，
    //event则是使用emit(event,msg)的时候，其参数的值就是父组件v-model收到的值。
    model: {
      prop: 'msg',
      event: 'change'
    },
    props: {
      msg: ''
    },
    methods: {
      btn1 () {
        this.$emit('change', this.msg+2)
      }
    }
  }
</script>