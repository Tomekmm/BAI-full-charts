import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Student from '../views/Student.vue';
// import Chart from '../views/Chart.vue';
import Grades from '../views/Grades.vue';
import Test from '../views/Test.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
  },

  // {
  //   path: '/chart',
  //   name: 'Chart',
  //   component: Chart,
  // },

  
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },

  {
    path: '/grades',
    name: 'Grades',
    component: Grades,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
