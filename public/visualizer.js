var chart = "";

const loadChart = (_labels, _data) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    chart = new Chart(ctx, {
        //Tipo de gráfica
        type: "line",
        //Datos del dataset
        data:{
            labels: _labels,
            datasets:[
                {
                    label: 'Battery',
                    backgroundColor: "rgb(255, 99, 132, 0.8)",
                    borderColor: "rgb(255, 99, 132, 0.8)",
                    data: _data

                }
            ]
        },
        //Configuración
        options: {} 
    });
}