import { Line } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'

import { formettedDate } from '../lib/helpers/helper'

const SubscriptionLineChart = (props) => {
    const [data, setData] = useState({
        subbed: [],
        unSubbed: [],
        labels: []
    });

    useEffect(() => {

        setData(previousData => {

            // Limiting the array size to 4
            if (previousData && previousData.subbed.length > 4) {
                previousData.subbed.shift()
                previousData.unSubbed.shift();
                previousData.labels.shift();
            }
            let newData = {
                subbed: [...previousData.subbed, props.data.data.subscribed],
                unSubbed: [...previousData.unSubbed, props.data.data.unsubscribed],
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
                        data: data.subbed,
                        label: 'Subscribed',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',

                    },
                    {
                        fill: true,
                        data: data.unSubbed,
                        label: 'Unsubscribed',
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

export default SubscriptionLineChart;