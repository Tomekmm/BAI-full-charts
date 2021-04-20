<template>
	<div id="app">
		<h4 class="font-weight-bold" >Student List</h4>
		<input style="margin-bottom:30px; width:300px" type="text" namel="search" placeholder="put last name" v-model="search"/>
		<table class="table">
			<thead style="background-color:crimson; opacity: 0.95;">
				<tr >
          <th>STUDENT ID</th>
					<th>LAST NAME</th>
					<th>FIRST NAME</th>
					<th>EMAIL</th>
				</tr>
			</thead>
			<tbody v-for="order in filteredList" :key="order.id" >
				<tr v-if="filteredList && filteredList.length">
					<th>{{ order.id }}</th>
					<td>{{ order.last_name }}</td>
					<td>{{ order.first_name }}</td>
          <td>{{ order.email }}</td>
				</tr>
			</tbody>
		</table>

    
	</div>
</template>

<script>
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
 /* eslint-disable */
import axios from 'axios'
export default {
	name: 'app',
    data() {
		return {
			orders: [],
			search: '',
     
		}
	},
	
methods: {
  doSearch() {
    axios
     .get('https://my.api.mockaroo.com/1_student_info.json?key=c06e00d0')
     .then((response) => {this.orders = response.data})
     
  }
},

	mounted() {
		axios.get("https://my.api.mockaroo.com/1_student_info.json?key=c06e00d0")
			.then(response => {	this.orders = response.data})
		
	},

	computed: {
		filteredList(){
			return this.orders.filter(order => {
				return order.last_name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
			})
		}
	}

}
</script>

<style>



</style>