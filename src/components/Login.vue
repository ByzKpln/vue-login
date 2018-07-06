<template>
  <div class="login">

    <div class="form">
      <form @submit.prevent="userLogin">
        <div class="l">
        <input type="text" placeholder="Username" v-model="user" v-validate="'required'" name="user">
        <br/>
        <input type="password" placeholder="Password" v-model="password" v-validate="'min:6|required'" name="password">
        <br/> <br/>
        <button type="submit" class="btn">Login</button></div>

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('user')">{{errors.first('user')}}</p>
          <p class="alert" v-if="errors.has('password')">{{errors.first('password')}}</p>     
        </transition>
      </form>
      <br/><br/>
      <p>Username:  <em>{{username}}      </em>|  Password:  <em>{{userpassword}}</em></p>
    </div>
  </div>
  
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    name: 'Login',
    data(){
      return{     
        user:'',
        password:'',
        username:'Admin',
        userpassword:'111888'
      }
    },methods:{
      userLogin(){
        this.$validator.validateAll().then((result)=>{
          if(result){
            if (this.username==this.user){
              if(this.userpassword==this.password) {
                location.href = 'http://localhost:8080/#/UserPage';
              }else{
                alert('Password for ' + this.user + ' is wrong.');}
            }
            else{
            alert(this.user + ' is not valid user.');}
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.login {  
  width: 450px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-image:url(../assets/cevre.png);
     
}
.form{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
div.ust{
  border: 1px;
  border-style: dashed;
  border-color: black;

}

p {
  text-align:center;
  color: gray;
}

input {
  border: 0;
  padding: 10px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}

button{
  color: white;
  background-color: #323333;
  border-style: dotted;
  border: 1px;

}

.alert {
  background: #fdf2ce;
  font-style:italic;
  display: inline-block;
  padding: 3px;
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

button{
  float: right;
}

</style>
<!--> <b-img :src="require('../assets/cevre.png')" /><-->