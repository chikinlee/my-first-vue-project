<template>
  <el-row class="content">
    <el-col :xs="{span:20,offset:2}" :sm="{span:8,offset:8}">
      <span>
        欢迎：{{name}}！你的待办事项是：
      </span>
      <el-input placeholder="请输入待办事项" v-model="todos" @keyup.enter.native="addTodos"></el-input>
      <el-tabs v-model="activeName">

        <el-tab-pane label="待办事项" name="first">
          <el-col :xs="24">
            <template v-if="!Done"> <!--v-if和v-for不能同时在一个元素内使用，因为Vue总会先执行v-for-->
              <template v-for="(item, index) in list">
                <div class="todo-list" v-if="item.status == false">
                  <span class="item">
                    {{ index + 1 }}. {{ item.content }}
                  </span>
                  <span class="pull-right">
                    <el-button size="small" type="primary" @click="finished(index)">完成</el-button>
                    <el-button size="small" :plain="true" type="danger" @click="remove(index)">删除</el-button>
                  </span>
                </div>
              </template>
            </template>
            <div v-else-if="Done">
              暂无待办事项
            </div>
          </el-col>
        </el-tab-pane>

        <el-tab-pane label="已完成事项" name="second">
          <template v-if="count > 0">
            <template v-for="(item, index) in list">
              <div class="todo-list" v-if="item.status == true">
                <span class="item finished">
                  {{ index + 1 }}. {{ item.content }}
                </span>
                <span class="pull-right">
                  <el-button size="small" type="primary" @click="restore(index)">还原</el-button>
                </span>
              </div>
            </template>
          </template>
          <div v-else>
            暂无已完成事项
          </div>
        </el-tab-pane>

      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
  export default{
      data () {
          return{
            name:"chikinlee",
            todos: '',
            activeName: 'first',
            list:[],
            count: 0,
          }
      },
    computed: {
      Done () {
          let count = 0;
          let length = this.list.length;
          for (let i in this.list){
              this.list[i].status == true ? ++count:'';
          }
          this.count=count;
        if (count == length || length == 0){
            return true
        }else {
            return false
        }
      }
    },
    methods: {
      addTodos: function () {
        let todoStr = this.todos;
          if(todoStr == ""){
              return;
          }else if (this.checkRepet(todoStr)){
            return;
          }
          let item={
              status: false,
            content: todoStr
          }
        this.list.push(item);
      },
      finished (index) {
        console.log(this)
      },
      remove (index) {
        console.log(this)
      },
      restore (index) {
        console.log(this)
      },
      checkRepet (todoStr) {
         for (todo in this.list){
             if (this.list[todo].todos == todoStr){
                 return true
             }
         }
      }

    }
  }
</script>
