import React from 'react';
import Plot from 'react-plotly.js';

function Crime({  xLabels, yValues, xTitle, yTitle }) {



  const trace = {
    x: xLabels,
    y: yValues,
    type: 'bar',
  };

  const layout = {
    title: 'Petrolium  Chart',
    xaxis: { title: xTitle },
    yaxis: { title: yTitle },
  };

  return <Plot data={[trace]} layout={layout} />;
}

export default Crime;
