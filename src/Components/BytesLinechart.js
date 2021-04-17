import { Line } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'

import { formettedDate } from '../lib/helpers/helper'

const BytesLineChart = (props) => {
    const [data, setData] = useState({
        bytesRecieved: [],
        bytesSent: [],
        labels: []
    });

    useEffect(() => {

        setData(previousData => {

            // Limiting the array size to 4
            if (previousData && previousData.bytesRecieved.length > 4) {
                previousData.bytesRecieved.shift()
                previousData.bytesSent.shift();
                previousData.labels.shift();
            }

            let newData = {
                bytesRecieved: [...previousData.bytesRecieved, props.data.data.messageBytesReceived],
                bytesSent: [...previousData.bytesSent, props.data.data.messageBytesSent],
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
                        data: data.bytesRecieved,
                        label: 'Recieved',
                        backgroundColor: 'rgba(255, 205, 86, 0.2)',

                    },
                    {
                        fill: true,
                        data: data.bytesSent,
                        label: 'Sent',
                        backgroundColor: 'rgba(255, 205, 86, 0.2)',

                    },
                    {
                        fill: true,
                        data: data.sentData,
                        label: 'Rejected Clients',
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

export default BytesLineChart;