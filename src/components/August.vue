<template>
  <div class="main">
    <div class="toolbar">
      <div class="btn-group" style="width: 100%" role="group" aria-label="Basic example">
        <button type="button" v-on:click="go(0)" style="width: 8%" class="btn toggle__option other-month">January</button>
        <button type="button" v-on:click="go(1)" style="width: 8%" class="btn toggle__option other-month">February</button>
        <button type="button" v-on:click="go(2)" style="width: 8%" class="btn toggle__option other-month">March</button>
        <button type="button" v-on:click="go(3)" style="width: 8%" class="btn toggle__option other-month">April</button>
        <button type="button" v-on:click="go(4)" style="width: 8%" class="btn toggle__option other-month">May</button>
        <button type="button" v-on:click="go(5)" style="width: 8%" class="btn toggle__option other-month">June</button>
        <button type="button" v-on:click="go(6)" style="width: 8%" class="btn toggle__option other-month">July</button>
        <button type="button" v-on:click="go(7)" style="width: 12%" class="btn toggle__option toggle__option--selected current-month">August</button>
        <button type="button" v-on:click="go(8)" style="width: 8%" class="btn toggle__option other-month">September</button>
        <button type="button" v-on:click="go(9)" style="width: 8%" class="btn toggle__option other-month">October</button>
        <button type="button" v-on:click="go(10)" style="width: 8%" class="btn toggle__option other-month">November</button>
        <button type="button" v-on:click="go(11)" style="width: 8%" class="btn toggle__option other-month">December</button>
      </div>
      <div class="current-month">August 2018</div>
    </div>
    <div class="row">    
        <div class="col-md-1 tasklist">
            <a href="http://localhost:8080/#/userpage" > ← Task List</a>
        </div>
        <div class="col-md-10">
            <input type="text" placeholder="New Task" v-model="task" name="task">
        </div>  
        <div class="col-md-1 logout">  
            <a href="http://localhost:8080/#/" >Log Out → </a>
        </div>
    </div>
    <br/>
    <div class="calendar">
      <div class="calendar__header">
        <div>mon</div>
        <div>tue</div>
        <div>wed</div>
        <div>thu</div>
        <div>fri</div>
        <div>sat</div>
        <div>sun</div>
      </div>
      <div class="calendar__week">
        <div class="calendar__day day other-month">30</div>
        <div class="calendar__day day other-month">31</div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(1)" class="add">Add</button> 1
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks1" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,1)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(2)" class="add">Add</button> 2
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks2" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,2)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(3)" class="add">Add</button> 3
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks3" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,3)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(4)" class="add">Add</button> 4
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks4" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,4)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(5)" class="add">Add</button> 5
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks5" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,5)"></i><br>
            </li>
          </transition-group>
        </div>
      </div>
      <div class="calendar__week">
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(6)" class="add">Add</button> 6
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks6" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,6)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(7)" class="add">Add</button> 7
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks7" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,7)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(8)" class="add">Add</button> 8
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks8" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,8)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(9)" class="add">Add</button> 9
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks9" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,9)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(10)" class="add">Add</button> 10
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks10" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,10)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(11)" class="add">Add</button> 11
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks11" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,11)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(12)" class="add">Add</button> 12
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks12" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,12)"></i><br>
            </li>
          </transition-group>
        </div>
      </div>
      <div class="calendar__week">
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(13)" class="add">Add</button> 13
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks13" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,13)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(14)" class="add">Add</button> 14
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks14" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,14)"></i><br>
            </li>
          </transition-group>
        </div>  
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(15)" class="add">Add</button> 15
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks15" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,15)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(16)" class="add">Add</button> 16
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks16" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,16)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(17)" class="add">Add</button> 17
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks17" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,17)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(18)" class="add">Add</button> 18
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks18" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,18)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(19)" class="add">Add</button> 19
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks19" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,19)"></i><br>
            </li>
          </transition-group>
        </div>
      </div>
      <div class="calendar__week">
        <div class="calendar__day day kurbanarife">
          <button style="" type="button" v-on:click="add(20)" class="add">Add</button> 20
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks20" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,20)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day birkurban">
          <button style="" type="button" v-on:click="add(21)" class="add">Add</button> 21
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks21" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,21)"></i><br>
            </li>
          </transition-group>
        </div>  
        <div class="calendar__day day ikikurban">
          <button style="" type="button" v-on:click="add(22)" class="add">Add</button> 22
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks22" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,22)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day uckurban">
          <button style="" type="button" v-on:click="add(23)" class="add">Add</button> 23
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks23" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,23)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day dortkurban">
          <button style="" type="button" v-on:click="add(24)" class="add">Add</button> 24
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks24" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,24)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(25)" class="add">Add</button> 25
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks25" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,25)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(26)" class="add">Add</button> 26
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks26" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,26)"></i><br>
            </li>
          </transition-group>
        </div> 
      </div>
      <div class="calendar__week">
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(27)" class="add">Add</button> 27
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks27" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,27)"></i><br>
            </li>
          </transition-group>
        </div> 
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(28)" class="add">Add</button> 28
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks28" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,28)"></i><br>
            </li>
          </transition-group>
        </div> 
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(29)" class="add">Add</button> 29
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks29" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,29)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day otuz">
          <button style="" type="button" v-on:click="add(30)" class="add">Add</button> 30
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks30" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,30)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day">
          <button style="" type="button" v-on:click="add(31)" class="add">Add</button> 31
          <br/>
          <transition-group name="list" class="col-md-12">
            <li style="list-style-type:none;" v-for="(data,index) in tasks31" :key='index'> 
              <input type="checkbox" value="hw">{{data.task}} <i class="fa fa-minus-circle" v-on:click="remove(index,31)"></i><br>
            </li>
          </transition-group>
        </div>
        <div class="calendar__day day other-month">1</div>
        <div class="calendar__day day other-month">2</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'August',
    data(){
      return{     
        task:'',
        tasks1:[],tasks2:[],tasks3:[],tasks4:[],tasks5:[],tasks6:[],tasks7:[],tasks8:[],tasks9:[],tasks10:[],tasks11:[],
        tasks12:[],tasks13:[],tasks14:[],tasks15:[],tasks16:[],tasks17:[],tasks18:[],tasks19:[],tasks20:[],tasks21:[],
        tasks22:[],tasks23:[],tasks24:[],tasks25:[],tasks26:[],tasks27:[],tasks28:[],tasks29:[],tasks30:[],tasks31:[],
      }
    },
    methods:{
      go(x){
        var m=["january","february","march","april","may","june","july","august","september","october","november","december"];
        var y = "http://localhost:8080/#/calendar/"+m[x];
        location.href = y;
      },
      add(x){
        if(x==1 && !this.task.length==0){
          this.tasks1.push({task: this.task})
          this.task = '';
        }else if(x==2 && !this.task.length==0){
          this.tasks2.push({task: this.task})
          this.task = '';
        }else if(x==3 && !this.task.length==0){
          this.tasks3.push({task: this.task})
          this.task = '';
        }else if(x==4 && !this.task.length==0){
          this.tasks4.push({task: this.task})
          this.task = '';
        }else if(x==5 && !this.task.length==0){
          this.tasks5.push({task: this.task})
          this.task = '';
        }else if(x==6 && !this.task.length==0){
          this.tasks6.push({task: this.task})
          this.task = '';
        }else if(x==7 && !this.task.length==0){
          this.tasks7.push({task: this.task})
          this.task = '';
        }else if(x==8 && !this.task.length==0){
          this.tasks8.push({task: this.task})
          this.task = '';
        }else if(x==9 && !this.task.length==0){
          this.tasks9.push({task: this.task})
          this.task = '';
        }else if(x==10 && !this.task.length==0){
          this.tasks10.push({task: this.task})
          this.task = '';
        }else if(x==11 && !this.task.length==0){
          this.tasks11.push({task: this.task})
          this.task = '';
        }else if(x==12 && !this.task.length==0){
          this.tasks12.push({task: this.task})
          this.task = '';
        }else if(x==13 && !this.task.length==0){
          this.tasks13.push({task: this.task})
          this.task = '';
        }else if(x==14 && !this.task.length==0){
          this.tasks14.push({task: this.task})
          this.task = '';
        }else if(x==15 && !this.task.length==0){
          this.tasks15.push({task: this.task})
          this.task = '';
        }else if(x==16 && !this.task.length==0){
          this.tasks16.push({task: this.task})
          this.task = '';
        }else if(x==17 && !this.task.length==0){
          this.tasks17.push({task: this.task})
          this.task = '';
        }else if(x==18 && !this.task.length==0){
          this.tasks18.push({task: this.task})
          this.task = '';
        }else if(x==19 && !this.task.length==0){
          this.tasks19.push({task: this.task})
          this.task = '';
        }else if(x==20 && !this.task.length==0){
          this.tasks20.push({task: this.task})
          this.task = '';
        }else if(x==21 && !this.task.length==0){
          this.tasks21.push({task: this.task})
          this.task = '';
        }else if(x==22 && !this.task.length==0){
          this.tasks22.push({task: this.task})
          this.task = '';
        }else if(x==23 && !this.task.length==0){
          this.tasks23.push({task: this.task})
          this.task = '';
        }else if(x==24 && !this.task.length==0){
          this.tasks24.push({task: this.task})
          this.task = '';
        }else if(x==25 && !this.task.length==0){
          this.tasks25.push({task: this.task})
          this.task = '';
        }else if(x==26 && !this.task.length==0){
          this.tasks26.push({task: this.task})
          this.task = '';
        }else if(x==27 && !this.task.length==0){
          this.tasks27.push({task: this.task})
          this.task = '';
        }else if(x==28 && !this.task.length==0){
          this.tasks28.push({task: this.task})
          this.task = '';
        }else if(x==29 && !this.task.length==0){
          this.tasks29.push({task: this.task})
          this.task = '';
        }else if(x==30 && !this.task.length==0){
          this.tasks30.push({task: this.task})
          this.task = '';
        }else if(x==31 && !this.task.length==0){
          this.tasks31.push({task: this.task})
          this.task = '';
        }
        else{
          alert('Please write your task first.');
        }
      },
      remove(id,x){
        if(x==1){
          this.tasks1.splice(id,1);
        }else if(x==2){
          this.tasks2.splice(id,1);
        }else if(x==3){
          this.tasks3.splice(id,1);
        }else if(x==4){
          this.tasks4.splice(id,1);
        }else if(x==5){
          this.tasks5.splice(id,1);
        }else if(x==6){
          this.tasks6.splice(id,1);
        }else if(x==7){
          this.tasks7.splice(id,1);
        }else if(x==8){
          this.tasks8.splice(id,1);
        }else if(x==9){
          this.tasks9.splice(id,1);
        }else if(x==10){
          this.tasks10.splice(id,1);
        }else if(x==11){
          this.tasks11.splice(id,1);
        }else if(x==12){
          this.tasks12.splice(id,1);
        }else if(x==13){
          this.tasks13.splice(id,1);
        }else if(x==14){
          this.tasks14.splice(id,1);
        }else if(x==15){
          this.tasks15.splice(id,1);
        }else if(x==16){
          this.tasks16.splice(id,1);
        }else if(x==17){
          this.tasks17.splice(id,1);
        }else if(x==18){
          this.tasks18.splice(id,1);
        }else if(x==19){
          this.tasks19.splice(id,1);
        }else if(x==20){
          this.tasks20.splice(id,1);
        }else if(x==21){
          this.tasks21.splice(id,1);
        }else if(x==22){
          this.tasks22.splice(id,1);
        }else if(x==23){
          this.tasks23.splice(id,1);
        }else if(x==24){
          this.tasks24.splice(id,1);
        }else if(x==25){
          this.tasks25.splice(id,1);
        }else if(x==26){
          this.tasks26.splice(id,1);
        }else if(x==27){
          this.tasks27.splice(id,1);
        }else if(x==28){
          this.tasks28.splice(id,1);
        }else if(x==29){
          this.tasks29.splice(id,1);
        }else if(x==30){
          this.tasks30.splice(id,1);
        }else if(x==31){
          this.tasks31.splice(id,1);
        }
      }

    }
    
  }
</script>

<style>

div.main {
  grid-area: content;
  padding: 48px;
  margin-top: -60px;
}

/* MAIN */

.toolbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.calendar__week,
.calendar__header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);  
}
.calendar__week {
  grid-auto-rows: 160px;
  text-align: right;
}

.calendar__header {
  grid-auto-rows: 50px;
  align-items: center;
  text-align: center;
}

.calendar__day {
  padding: 16px;
}

/* COSMETIC STYLING */

:root {
  --red: #ED5454;
}

body {
  font-weight:bold;
  color: #A8B2B9;
}


main {
  background-color: #FCFBFC;
}

.calendar {
  background-color: white;
  border: 1px solid #e1e1e1;
}

.calendar__header > div {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  color: var(--red);
  font-size: 20px;
}

.calendar__day {
  border-right: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;
}

.calendar__day:last-child {
  border-right: 0;
}

.toggle{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  font-size: 0.9em;
}

.add{
  background-color: white;
  padding: px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  text-transform: capitalize;
  cursor: pointer;

}
.toggle__option{
  background-color: white;
  padding: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  text-transform: capitalize;
  cursor: pointer;
}
.toggle__option:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.toggle__option:last-child {
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.toggle__option--selected{
  border-color: white;
  background-color: white;
  
  font-weight: 800;
  box-shadow: 1px 2px 30px -5px var(--red);
}

.current-month{
  color: var(--red);    
}

.other-month{
  color: lightgrey;
}

.kurbanarife{
  background-image:url(../assets/arifekurban.png);
} 
.birkurban{
  background-image:url(../assets/birkurban.png);
} 
.ikikurban{
  background-image:url(../assets/ikikurban.png);
} 
.uckurban{
  background-image:url(../assets/uckurban.png);
} 
.dortkurban{
  background-image:url(../assets/dortkurban.png);
} 
.otuz{
  background-image:url(../assets/otuzagustos.png);
  background-repeat: no-repeat;
} 
</style>
