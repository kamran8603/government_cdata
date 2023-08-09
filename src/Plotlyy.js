import React from "react";
import Plot from "react-plotly.js";

function Plotlyy({ data, size }) {
  const layout = {
    barmode: 'stack',
    width: 920, height: 640, 
    margin: {b: 180},
    title: "Crime Head-wise Crime against Foreigners during 2019",
    xaxis: { title: "Crime Head",
    tickfont:{
      size: 9,
      color:"green",
    }
  },
     
    yaxis: { title: "Cases against Foreign Tourists",
    tickfont:{
      size: 12,
      color:"black",
    }
   },
  };

  return <Plot data={data} layout={layout} /> ;
}

export default Plotlyy;
