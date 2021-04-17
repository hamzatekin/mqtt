import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = (props) => {
    let con = props.data.data.connected || 0;
    let disc = props.data.data.disconnected || 0;

    return (
        <Pie
            data={{
                labels: ['Connected Clients', 'Disconnected Clients'],
                datasets: [{
                    label: 'Connected CLients',
                    data: [con, disc],

                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)']
                }]
            }}
            options={{
                legend: {
                    display: true,
                    position: 'bottom'
                },
                maintainAspectRatio: false,
            }}
        />
    )
}

export default PieChart;