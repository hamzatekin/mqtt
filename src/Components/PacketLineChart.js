import { Line } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'

import { formettedDate } from '../lib/helpers/helper'

const PacketLineChart = (props) => {
    const [data, setData] = useState({
        recieved: [],
        sent: [],
        labels: []
    });

    useEffect(() => {

        setData(previousData => {

            // Limiting the array size to 4
            if (previousData && previousData.recieved.length > 4) {
                previousData.recieved.shift()
                previousData.sent.shift();
                previousData.labels.shift();
            }

            let newData = {
                recieved: [...previousData.recieved, props.data.data.packetReceived],
                sent: [...previousData.sent, props.data.data.packetSent],
                labels: [...previousData.labels, formettedDate()]
            }

            return newData;

        }
        );
    }, [props.data.data]);
    return (
        <Line
            data={{
                labels: data.labels,
                datasets: [
                    {
                        fill: true,
                        data: data.recieved,
                        label: 'Recieved',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',

                    },
                    {
                        fill: true,
                        data: data.sent,
                        label: 'Sent',
                        backgroundColor: 'rgba(255, 205, 86, 0.2)',

                    },
                ]
            }}
            options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }

                    }],
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                maintainAspectRatio: false
            }}
        />
    )
}

export default PacketLineChart;