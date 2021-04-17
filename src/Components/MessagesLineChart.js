import { Line } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'

import { formettedDate } from '../lib/helpers/helper'

const MessagesLineChart = (props) => {
    const [data, setData] = useState({
        recievedData: [],
        sentData: [],
        dropped: [],
        labels: []
    });

    useEffect(() => {

        setData(previousData => {

            // Limiting the array size to 4
            if (previousData && previousData.recievedData.length > 4) {
                previousData.recievedData.shift()
                previousData.sentData.shift();
                previousData.dropped.shift();
                previousData.labels.shift();
            }
            let newData = {
                recievedData: [...previousData.recievedData, props.data.data.messageReceived],
                sentData: [...previousData.sentData, props.data.data.messageSent],
                dropped: [...previousData.dropped, props.data.data.messageDropped],
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
                        data: data.sentData,
                        label: 'Sent',
                        backgroundColor: 'rgb(54, 162, 235, 0.2)'
                    },
                    {
                        fill: true,
                        data: data.recievedData,
                        label: 'Recieved',
                        backgroundColor: 'rgb(255, 99, 132, 0.2)',

                    },
                    {
                        fill: true,
                        data: data.dropped,
                        label: 'Dropped',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    }
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

export default MessagesLineChart;