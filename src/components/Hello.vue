<template>
  <div class="hello">
    <h1 v-text="title"></h1>
    <input v-model="newItem" @keyup.13="addNew">
    <ul v-for="item in items">
      <li :class="{finish: item.isFinished}" @click="toggleClick(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
//  import store from '../store'
  export default {
    name: 'TodoList',
    data () {
      return {
        title: 'this is a todo list',
        items: [],
        newItem: ''
      }
    },
    methods: {
      toggleClick: function (item) {
        item.isFinished = !item.isFinished
      },
      addNew: function () {
        this.items.push({
          label: this.newItem,
          isFinished: false
        })
        this.newItem = ''
//        store.save(this.items)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .finish {
    text-decoration: line-through;
  }

  li {
    display: inline-block;
    cursor:pointer;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
