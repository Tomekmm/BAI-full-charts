<template>

  <div id="container">

          <h1>Kierunek Informatyka: grupa ZS2111</h1>
        <table id="table">
         
  <thead>
    <tr>
      <th scope="col" >STUDENT ID</th>
      <th scope="col">FIELD OF STUDIES</th>
      <th scope="col">ACHIEVEMENTS</th>

    </tr>
  </thead>
  <tbody>
    <tr v-bind:key="user.id" v-for="user in users">
     <button v-on:click="info(`student  ID: ` + user.id +`\nField of studies: `+  user.field_of_studies+ '\nAchievement: ' + user.additional_achievements)" style="margin:10px;font-weight: bold;"> {{user.id}}</button>
    <td>{{user.field_of_studies}}</td>
      <td>{{user.additional_achievements}}</td>
    </tr>
    
  </tbody>
</table>

  </div>
</template>

<script>
import axios from "axios";
export default {
  
  data (){
  return{
    users : []
 
  }
},
 created: function(){
   axios.get('https://my.api.mockaroo.com/4_additional_achievements.json?key=c06e00d0')
   .then(res => {
     this.users = res.data;
   })
 },
  methods: {
      info: function (event) {
      alert( event)
    }
    },
 
};
</script>
<style>
 
#table {
 margin-left: 600px;
}
</style>