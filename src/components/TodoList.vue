<template>
  <el-row class="content">
    <el-col :xs="{span:20,offset:2}" :sm="{span:8,offset:8}">
      <span>
        欢迎：{{name}}！你的待办事项是：
      </span>
      <el-input class="txt" placeholder="请输入待办事项" v-model="todos" @key  up.enter.native="addTodos"></el-input>
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
                  <el-button size="small" :plain="true" type="danger" @click="remove(index)">删除</el-button>
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
            this.$message({
              type: 'error',
              message: '不可添加空任务',
              showClose: true,
              duration: 1000
            })
              return;
          }else if (this.checkRepet(todoStr)){
            this.$message({
              type: 'error',
              message: '不可添加重复的任务',
              showClose: true,
              duration: 1000
            })
            return;
          }
          let item={
              status: false,
            content: todoStr
          }
        this.list.push(item);
          this.todos= "";
      },
      finished (index) {
          this.$set(this.list[index],"status",true);//设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。(vue api原话)
          this.$message({
              type: 'success',
              message: '任务完成',
            showClose: true,
            duration: 1000
          })
      },
      remove (index) {
        this.list.splice(index,1)
        this.$message({
          message: '任务删除',
          showClose: true,
          duration: 1000
        })
      },
      restore (index) {
        this.$set(this.list[index],"status",false);
        this.$message({
          type: 'success',
          message: '任务还原',
          showClose: true,
          duration: 1000
        })
      },
      checkRepet (todoStr) {
          let todo=0
         for (todo in this.list){
             if (this.list[todo].content == todoStr){
                 return true
             }
         }
      }

    }
  }
</script>
<style scoped>
.txt {
  margin: 20px auto;
}
.todo-list {
  width: 100%;
  margin-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  text-align: left;
}
.item {
  font-size: 20px;
}
.finished{
  text-decoration: line-through;
  color: #ddd;
}
.pull-right {
  float: right;
}
</style>
