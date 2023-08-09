import React from 'react'
import Plot from 'react-plotly.js';

function Kirosin({xLabel,ylabel,xTitle,yTitle}) {
    const trace = {
        x: xLabel,
        y: ylabel,
        type: 'bar',
        color:"orange"
      };
    
      const layout = {
        title: 'Kirosin  Chart',
        xaxis: { title: xTitle },
        yaxis: { title: yTitle },
      };
  return <Plot data={[trace]} layout={layout} />
}

export default Kirosin