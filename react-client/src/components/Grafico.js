import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'








const Grafico = ({ labels = [], datas = [] }) => {
    const [values, setValues] = useState()
    const [etiqueta, setEtiqueta] = useState()

    setEtiqueta({ labels })
    setValues({ datas })

    const data = {



        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //labels: etiqueta,
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                //data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            Hola desde Chart <h1> </h1>

            <div>
                <h3>datas : {datas}</h3>
                {/* <canvas id="myChart" width="400" height="400"></canvas> */}
                <Pie data={data} />
            </div>

        </div>
    )
}

export default Grafico