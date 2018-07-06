<template>
  <div class="userpage">
      <link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Amatic SC' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Annie Use Your Telescope' rel='stylesheet'>
    <div class="row">
     
      <div class="col-md-2 dot"  style="padding-left: 28px;">
        <b-nav style="margin-top: 30px; text-align:center; font-family: 'Amatic SC';font-size: 22px;"  tabs>
          <b-nav-item style="background-color: whitesmoke; border-radius: 25px;" href="http://localhost:8080/#/Soz1" class="col-md-12 z" >Og Mandıno</b-nav-item>
          <b-nav-item style="background-color: whitesmoke; border-radius: 25px;" href="http://localhost:8080/#/Userpage" class="col-md-12 z">Mıchelangelo</b-nav-item>
          <b-nav-item style="background-color: whitesmoke; border-radius: 25px;" href="http://localhost:8080/#/Soz2" class="col-md-12 z act">Erich Fromm</b-nav-item>
          <b-nav-item style="background-color: whitesmoke; border-radius: 25px;" href="http://localhost:8080/#/Soz3" class="col-md-12 z">Iris Murdoch</b-nav-item>
        </b-nav>  
        <div style="margin-top: 15px;" class="soz">
        <br/>
        <p id="navText" style="text-align:right; font-family: 'Alex Brush'; font-size:18px;">The task we must set for ourselves is not to feel secure, but to be able to tolerate insecurity.</p>
        <h6 style="text-align:right; font-weight:bold;"> -Erich Fromm</h6>     
        </div>
        <hr>
      </div>
      <div class="col-md-2 dot sol"></div>
      <div class="col-md-4 dot" style="margin-top: 15px;">
        <div class="f">
          <form @submit.prevent="addTask">
            <input type="text" class="col-md-12" placeholder="Enter a task you have to do." v-model="task" v-validate="'min:1'" name="task">
            
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <p class="alert" v-if="errors.has('task')">{{errors.first('task')}}</p>
            </transition>
          </form>
          
          <ul>
            <transition-group name="list" class="col-md-12" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li class=h style="text-align:left; font-family: 'Annie Use Your Telescope';font-size: 22px;" v-for="(data,index) in tasks" :key='index'> 
                {{data.task}}
                <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
              </li>
            </transition-group>
          </ul>
          
          <p>These are the tasks that you have to do.</p>
        </div>
      </div>
      <div class="col-md-2 dot sag"></div>
      <div class="col-md-2 dot">
       <div class="cal dot" style="height:105px;">
        <a href="http://localhost:8080/#/calendar/july"><img src="../assets/ctek.png"/></a>
        <p><a href="http://localhost:8080/#/calendar/july" style="font-family: 'Amatic SC';font-size: 22px;">Calendar → </a></p>
        </div>
        <div class="dot" style="height:275px;"></div>
        <a href="http://localhost:8080/#/"><img src="../assets/logoutek.png"/></a>
        <p><a href="http://localhost:8080/#/" style="font-family: 'Amatic SC';font-size: 22px;">Log Out → </a></p>
      </div>
    </div>
    
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    name: 'Tasks',
    data(){
      return{
        task:'',
        tasks:[
        {task:"Homework 1"},
        {task:"Homework 2"},
        ]
      }
    },
    methods:{
      addTask(){
        this.$validator.validateAll().then((result)=>{
          if(result&&!this.task==''){
            this.tasks.push({task: this.task})
            this.task = '';
          }else{
            console.log('Not valid');
          }
        })
      },
      remove(id){
        this.tasks.splice(id,1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

.dot{

  height: 500px;
}

.f{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.h {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 2px solid #3E5252;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align:center;
  color: gray;
  
}

input {
  width: 400px;border: 0;
  padding: 20px;
  width: 400px;
  font-size: 1.3em;
  background-color:white;
  color: #687F7F;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in .5s;
}

.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
   transform: scale(1.5);
 }
 100% {
   transform: scale(1);
 }
}

i{
  padding-top: 5px;
  float: right;
  cursor: pointer;
}

.z{
  margin-bottom: 20px;
}

.act{
    font-style: italic;
}

div.soz{
  width: auto;
  height: 250;
  background-image:url(../assets/soz2.png);
  background-repeat: no-repeat;
  background-position: center;

}

div.sol{
  background-image:url(../assets/sol.png);
  background-repeat: no-repeat;
  background-position: center;

}

div.sag{
  background-image:url(../assets/sag.png);
  background-repeat: no-repeat;
  background-position: center;
}
</style>
