var ctx = document.getElementById("myChart");
generatePoint();
var myChart = new Chart(ctx,{
    type: 'bubble',
    data: {
      datasets: [
          {
              label: 'First Dataset',
              data: generateData(),
              backgroundColor:generateColor(),
              borderWidth:0,
              borderColor: "rgba(100,0,100,0)",
              hoverBackgroundColor: "#FF6384",
          },
          {
              label: 'Second Dataset',
              data: generateData(),
              backgroundColor:generateColor(),
              borderWidth:0,
              borderColor: "rgba(100,0,100,0)",
              hoverBackgroundColor: "#FF6384",
          },
          {
              label: 'Second Dataset',
              data: generateData(),
              backgroundColor:generateColor(),
              borderWidth:0,
              borderColor: "rgba(100,0,100,0)",
              hoverBackgroundColor: "#FF6384",
          },
          {
              label: 'Second Dataset',
              data: generateData(),
              backgroundColor:generateColor(),
              borderWidth:0,
              borderColor: "rgba(100,0,100,0)",
              hoverBackgroundColor: "#FF6384",
          },
          {
              label: 'Second Dataset',
              data: generateData(),
              backgroundColor:generateColor(),
              borderWidth:0,
              borderColor: "rgba(100,0,100,0)",
              hoverBackgroundColor: "#FF6384",
          }]
    },
    options: {
        legend: {
          display: false,
        },
        scales:{
          xAxes: [{
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }]
        },
        elements: {
            points: {
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0)'
            }
        }
    }
});

function generatePoint(){
	var x = Math.floor(Math.random() * 100);
	var y = Math.floor(Math.random() * 100);
	var r = Math.floor(Math.random() * 35) + 10;
	var point = {x:x, y:y, r:r};
	return point;
}

function generateData(){
	var data=[]
	for (var i=0; i<5; i++){
		data.push(generatePoint());
	}
	console.log(data);
	return data;
}

function generateColor(){
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var color = "rgba(" + r + "," + g + "," + b + ",0.5)" 
	return color;
}

setInterval(function(){
	for(var i=0; i<5; i++){
		myChart.data.datasets[i].data = generateData();
		myChart.data.datasets[i].backgroundColor = generateColor();
	};
	myChart.update();
}, 2000);
