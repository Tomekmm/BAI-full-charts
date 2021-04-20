<template>
// <input>
  <div style="height:600px;width: 600px; display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="gradesChart.id"
        :type="gradesChart.type"
        :data="gradesChart.data"
        
    ></vue3-chart-js>
  </div>
  <div style="height:600px;width: 600px; display: flex;flex-direction:column;">
  <h1>Grades Networks</h1>
  <vue3-chart-js
        :id="gradesChart2.id"
        :type="gradesChart2.type"
        :data="gradesChart2.data"
        
    ></vue3-chart-js>
     </div>
       <div style="height:600px;width: 600px; display: flex;flex-direction:column;">
  <h1>Grades Web Technologies</h1>
  <vue3-chart-js
        :id="gradesChart3.id"
        :type="gradesChart3.type"
        :data="gradesChart3.data"
        
    ></vue3-chart-js>
     </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
//import JSON after csv loader
import data from "../assets/3-marks.csv"

function createChartData(id, labels, values) {
    return {
      id: id,
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: values
          }
        ]
      }
    }
}

function createData(data, fieldOfStudies, subject) {
    const filteredData = data.filter(row => row.field_of_studies === fieldOfStudies);
     const labels = [];
    const values = [];
    const valuesNetworks= [];
    filteredData.forEach(row => {
        labels.push(row.id);
        // odnoszenie sie do obiektu dynamicznie
        values.push(row[subject])
    })

    return {
        labels, values
    };
} 

export default {
  name: 'Test',
  components: {
    Vue3ChartJs,
  },
  setup () {
      //console.log(data);
    const machineLearning = createData(data, "Informatics", "marks_Machine_learning");
    const networks = createData(data, "Informatics", "marks_Networks");
    const webTechnologies= createData(data, "Informatics", "marks_Web_technologies");

    const gradesChart_MachineLearning =createChartData("machine learning", machineLearning.labels, machineLearning.values);
    const gradesChart_Networks =createChartData("Networks", networks.labels, networks.values);
    const gradesChart_webTechnologies= createChartData("Web technologies", webTechnologies.labels, webTechnologies.values);

  console.log(data);

const objectToReturn = {};
objectToReturn.gradesChart = gradesChart_MachineLearning;
objectToReturn.gradesChart2 = gradesChart_Networks;
objectToReturn.gradesChart3 = gradesChart_webTechnologies;
return objectToReturn;


    // return {
    //   gradesChart: gradesChart_MachineLearning,
    //    gradesChart: gradesChart_Networks

      
  
    // }
  },
}
</script>