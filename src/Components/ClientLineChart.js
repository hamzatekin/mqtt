import { Line } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'

import { formettedDate } from '../lib/helpers/helper'

const ClientLineChart = (props) => {
    const [data, setData] = useState({
        maxClients: [],
        currentClients: [],
        rejectedClients: [],
        labels: []
    });

    useEffect(() => {

        setData(previousData => {

            // Limiting the array size to 4
            if (previousData && previousData.maxClients.length > 4) {
                previousData.maxClients.shift()
                previousData.currentClients.shift();
                previousData.rejectedClients.shift();
                previousData.labels.shift();
            }

            let newData = {
                maxClients: [...previousData.maxClients, props.data.data.maxConnected],
                currentClients: [...previousData.currentClients, props.data.data.connected],
                rejectedClients: [...previousData.rejectedClients, props.data.data.rejected],
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
                        data: data.maxClients,
                        label: 'Max Clients',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',

                    },
                    {
                        fill: true,
                        data: data.currentClients,
                        label: 'Current Clients',
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

export default ClientLineChart;