import React from 'react'
import Plot from "react-plotly.js";


function Population({data, size}) {
  const states = data?.records.map(item => item.india___state__union_territory);
  const population = data?.records.map(item => item.population___2011);
  // const density = data?.records.map(item => item._s_no_);
  // console.log(density)

  


  

const layout = {
  width: size.width || 920, height: 640, 
  margin: {b: 180},
  title: "State-wise Population and Density",
  xaxis: { title: "states",
  tickfont:{
    size: 9,
    color:"green",
    type: 'bar',
    name: "Population"
  }

},
  yaxis: { title: "value",
  tickfont:{
    size: 12,
    color:"black",
    type: 'bar',
    name: "Population"
  }
 },
};

const dataGraph = [
  {
    x: states,
    y: population,
    
    type: "bar",
    marker: {
      color: "skyblue",
      barmode: 'group',
    },
  },
];

  return (
    <div>
<h1>State-wise Population and Density</h1>
<Plot data={dataGraph} layout={layout} />
    </div>
  )
}

export default Population