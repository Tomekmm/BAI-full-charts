<template>

<canvas id="chart" width="800" height="400"></canvas>
      </template>
      <script>
    const xlabels=[];
    const yvalues =[];
    chartIt();

    async function chartIt(){
      await getData();
    const ctx = document.getElementById('chart').getContext('2d');

const myChart = new Chart(ctx, {
   type: 'bar',
   data: {
       labels: xlabels,
       datasets: [{
           label: ' Accounting: students marks',
           data: yvalues,
           fill: false,
           backgroundColor: 
               'rgba(255, 99, 132, 0.2)',
           borderColor: 
               'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          hoverBorderWidth: 3,
          hoverBorderColor: 'red'

       }]
   },
   options: {
    parsing: false,
   scales: {
   
       y: {
           ticks: {
               
               callback: function(value, index, values) {
                   return  value;
               }
           }
       }
   }
   }  
});
}

//get data
        getData();

       async function getData(){
            const response = await fetch('3-marks.csv');
            const data = await response.text();
            console.log(data);
       // arr.slice([begin[, end]])
       // 1- form index 1 to the end, index 1 => pierwszy wiersz
            const table=data.split('\n').slice(0);
            // let i=0;i<rows.length;i++){

            // }
            // dla kazdego wiersz wypisz wiersze (wszystkie)
            
            // dla kazdego wiersza rozdziel elemety po ','
            // table.forEach(row=>{
            //         const columns=row.split(',');
            //     const year=columns[0];
            //     xlabels.push(year);
            //     const temp=columns[1];
            //     yvalues.push(parseFloat(temp) +14);
            //     console.log(year, temp);
            // });



            
            table.forEach(row=>{
                    const columns=row.split(',');
                    
                    if (columns[1]=="Finances") {
                        const id=columns[0];
                    const field_of_studies=columns[1];
                      //marks_Accounting,marks_Corporate_finance, marks_Controlling
                    const marks_Accounting=columns[5];
                    const marks_Corporate_finance=columns[6];
                    const marks_Controlling=columns[7];
                    
                    // console.log(id, field_of_studies, marks_Accounting, marks_Controlling, marks_Corporate_finance);

                    xlabels.push(id);
                    yvalues.push(marks_Accounting);
                    } 
                    else 
                    {if (columns[1]=="Infomatics") {
                        const id=columns[0];
                    const field_of_studies=columns[1];
                      //marks_Machine_learning,marks_Web_technologies,marks_Networks
                    const marks_Machine_learning=columns[8];
                    const marks_Web_technologies=columns[9];
                    const marks_Networks=columns[10];

                    console.log(id, field_of_studies, marks_Machine_learning,marks_Web_technologies,marks_Networks);

                    } else {
                        const id=columns[0];
                    const field_of_studies=columns[1];
                      //marks_Strategic_management,marks_ International_marketing,marks_ Project_management
                    const marks_Strategic_management=columns[11];
                    const marks_International_marketing=columns[12];
                    const marks_Project_management=columns[13];

                    console.log(id, field_of_studies, marks_Strategic_management,marks_International_marketing,marks_Project_management);
                    }
                        
                    }
                  
                                
            });
}
</script>
<style>
 
#table {
 margin-left: 600px;
}
</style>