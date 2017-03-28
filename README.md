# my-first-vue-project

> A Vue.js project => TodoList

## Build Setup

``` bash
#第一次在github上写点东西，当做是一个试探吧，毕竟在vue方面是个新手，边学习，也是学习开始在github上写一点东西
```

####这是一个基于koa+vue2+elementUI开发的TODOlist,<a href="https://molunerfinn.com/Vue+Koa/">demo教程出处</a>,这是本人第一次使用vue写的demo,有什么不对的地方还需要大家多多指教,目前还是半成品,我会在学习vue过程中不断完善,最后将它做完,如果有需要尽管拿去,如果喜欢,欢迎点星

####对于vue.js中this可以访问属性的属性的理解
#####在我看来,经过我的尝试,函数写在data里依然可以被执行,el、data、computed都应该理解为Vue对象的声明对象内容的关键字，而不是它的直接属性。在data声明的就是它（vm本身）的数据属性,在computed中声明的是它的计算属性,在methods中声明的就是它的方法

##更新于 2017/3/16

####v-if和v-for共存的问题
#####v-if和v-for放在一个元素内同时使用，因为Vue总会先执行v-for，所以导致v-if不会被执行。可以使用一个额外的template元素用来放置v-if或者v-for从而达到同样的目的。

####Generator函数(function* 与 yeild)
#####此处先感谢<a href="http://www.ruanyifeng.com/blog/2015/04/generator.html">阮一峰大神的文章</a>帮我解惑,以下是我自己理解做的笔记
#####在koa中需要使用yield,相辅相成的就是Generator函数.它不同于普通的函数,是可以暂停执行的,整个Generator函数就是一个异步任务的容器,异步操作中需要暂停的地方,都靠yield语句注明

```javascript
function* generator(x){
  var y = yield x + 2;
  return y
}
var gen = generator(1);
gen.next(); // { value: 3, done: false }  
gen.next(); // { value: undefined, done: true }
gen.next(2); // { value: 2, done: true }
```

#####在上面的代码里面如果调用了Generator函数,不会返回结果,而是会返回一个指针对象(遍历器)g,调用g的next方法,会移动内部指针,指向遇到的第一个yield,每次调用next,都会返回一个表示当前阶段的信息(value表示yeild后面的result,也就是当前阶段的值,done是一个布尔值,表示是否已经将当前的Generator函数执行完成)
#####第一个next方法的value属性,返回 x + 2 的值,但是函数执行没有结束,所以是{ value: 3, done: false } ,第二个next方法因为返回generator函数时已经执行完成,结果成为{ value: undefined, done: true },第三个next带有参数2,作为参数返回结果,赋值给y,因此这一步value的值成了2,这就是数据交换

```javascript
function* generator(x){
  try {
    var y = yield x + 2
  } catch (e){ 
    console.log(e);//'出错了'
  }
  return y
}

var g = generator(1);
g.next();
g.throw('出错了');
```
#####Generator 函数可以部署错误处理代码,在generator外部,使用指针对象throw方法抛出错误,就可以被generator内部的try catch捕获,出错的代码实现了时间和空间上的分离处理,非常有利于异步编程

```javascript
import fetch from 'node-fetch'

function* generator() {
  let baidu = 'https://api.douban.com/v2/book/1220562';
  let result = yield fetch(url);
  console.log(result.tags)
}

const g = generator();
const result = g.next();

result.value.then( data => {
  return data.json()
}).then( data=> {
    g.next(data)
})
```
#####上面是一个简单的用法,首先执行 Generator 函数，获取遍历器对象，然后使用 next 方法,执行异步任务的第一阶段。由于 Fetch 模块返回的是一个 Promise 对象，因此要用 then 方法调用下一个next 方法。但是流程管理却不方便（即何时执行第一阶段、何时执行第二阶段）。(此段摘自《ECMAScript 6入门》)

##更新于 2017/3/16
