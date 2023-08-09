import React from 'react'
import Plot from 'react-plotly.js';

function Diesel({xLabel,ylabel,xTitle,yTitle}) {
    const trace = {
        x: xLabel,
        y: ylabel,
        type: 'bar',
        color:"orange"
      };
    
      const layout = {
        title: 'Diesel  Chart',
        xaxis: { title: xTitle },
        yaxis: { title: yTitle },
      };
  return <Plot data={[trace]} layout={layout} />;
}

export default Diesel