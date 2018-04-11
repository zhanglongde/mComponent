<template>
  <div class="stack-platform">
    <div>
      <div class="stack-wrapper">
        <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
      </div>
      <div class="controls">
        <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
        <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        someList: [],
        stackinit: {
          visible: 3
        }
      }
    },
    mounted () {
      let that = this
      setTimeout(function () {
        that.someList = [
          {
            html: '<div class="stack-card">01</div>'
          },
          {
            html: '<div class="stack-card">02</div>'
          },
          {
            html: '<div class="stack-card">03</div>'
          },
          {
            html: '<div class="stack-card">04</div>'
          },
          {
            html: '<div class="stack-card">05</div>'
          },
          {
            html: '<div class="stack-card">06</div>'
          },
          {
            html: '<div class="stack-card">07</div>'
          }
        ]
      }, 0)
    },
    methods: {
      prev () {
        this.$refs.stack.$emit('prev')
      },
      next () {
        this.$refs.stack.$emit('next')
      }
    }
  }
</script>
<style>
  .stack-platform{
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .stack-wrapper{
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    width: 320px;
    height: 320px;
    padding: 0;
    list-style: none;
    pointer-events: none;
  }
  .controls{
    position: relative;
    width: 200px;
    text-align: center;
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    justify-content:space-around;
    margin: 0 auto;
    margin-top: 50px
  }
  .controls .button {
    border: none;
    background: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    width: 50px;
    height: 50px;
    z-index: 100;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    border-radius: 50%;
    background: #fff;
  }
  .button .next{
    display: inline-block;
    width: 10px;
    height:5px;
    background: rgb(129,212,125);
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
    left: -5px;
    top: 2px;
    position: relative;
  }
  .button .next:after{
    content:'/';
    display:block;
    width: 20px;
    height:5px;
    background: rgb(129,212,125);
    -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
  }
  .button .prev{
    display: inline-block;
    width: 20px;
    height:5px;
    background: rgb(230,104,104);
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
  }
  .button .prev:after{
    content:'/';
    display:block;
    width: 20px;
    height:5px;
    background: rgb(230,104,104);
    -webkit-transform: rotate(-90deg);
  }
  .controls .text-hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    color: transparent;
    display: block;
  }

  .stack-card{
    width:320px;
    height:320px;

    line-height: 320px;
    text-align:center;
    font-size:20px;
  }
  .stack>:nth-child(1) .stack-card{
    background-color: #ede574;
    background: linear-gradient(to bottom, #ede574, #e1f5c4);
    color:#333;
  }
  .stack>:nth-child(2) .stack-card{
    background: linear-gradient(to bottom, #dae2f8, #d6a4a4);
    color:#333;
  }
  .stack>:nth-child(3) .stack-card{
    background: linear-gradient(to bottom, #ede574, #58a);
    color:#fff;
  }
  .stack>:nth-child(4) .stack-card{
    background: linear-gradient(to bottom, #c9d6ff, #e2e2e2);
    color:#333;
  }
  .stack>:nth-child(5) .stack-card{
    background-color: #557;
    background: linear-gradient(to bottom, #557, #85a);
    color:#fff;
  }
  .stack>:nth-child(6) .stack-card{
    background: linear-gradient(to bottom, #d9a7c7, #fffcdc);
    color:#fff;
  }
  .stack>:nth-child(7) .stack-card{
    background-color: #587;
    background: linear-gradient(to bottom, #587, #9c3);
    color:#fff;
  }
</style>
