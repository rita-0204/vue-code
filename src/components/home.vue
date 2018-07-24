<template>
  <div class="home">
    test
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    created(){
      this.getList();
    },
    methods:{
      getList(){
          this.$http.get('/test')//代替http://localhost:3000/getNewsList
              .then((res) => {
                  console.log(123,res)
                  // this.newsList = res.data
              }, (err) => {
                  console.log(err)
              })
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
