import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './InteractionChart.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const InteractionChart = ({ timeOnPage, clickCount, interactedComponents }) => {
    const labels = Object.keys(interactedComponents);
    const data = Object.values(interactedComponents);

    const componentData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: labels.map((_, i) => `hsl(${i * 360 / labels.length}, 70%, 50%)`),
                hoverBackgroundColor: labels.map((_, i) => `hsl(${i * 360 / labels.length}, 70%, 60%)`),
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const component = context.label;
                        const clicks = interactedComponents[component];
                        return ` ${clicks} ${clicks > 1 ? 'interacciones' : 'interacción' }`;
                    }
                }
            }
        }
    };


    return (
        <div className="interaction-chart">
            <h2>Interacciones por Componente</h2>
            <Pie data={componentData} options={options} style={{ width: '570px' }} />
        </div>
    );
};

export default InteractionChart;