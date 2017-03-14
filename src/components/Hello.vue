<template>
  <div class="hello">
    <h1 v-text="title"></h1>
    <ul v-for="item in items">
      <li :class="{finish: item.isFinished}" @click="toggleClick(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',
    data () {
      return {
        title: 'this is a todo list',
        items: [
          {
            label: 'coding',
            isFinished: false
          },
          {
            label: 'walking',
            isFinished: true
          }
        ]
      }
    },
    methods: {
      toggleClick: function (item) {
        item.isFinished = !item.isFinished
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
    text-decoration: underline;
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
