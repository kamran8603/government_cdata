import React from 'react'
import Plot from 'react-plotly.js';

function Sugar({data, size}) {
    const sugar_year = data?.records?.map((record)=> record.sugar_season)
    console.log(sugar_year);
    const frp = data?.records?.map((record)=> record.frp_fixed_by_government)
    console.log('FRP', frp)
    const increase= data?.records?.map((record)=> record.increase_over_previous_year)
    console.log('INC', increase)
    
 const layout = {
    width: size.width || 920, height:420,
    margin: {b: 180},
    title: "Year-wise Details of Hike in the Price of Sugarcane Fair and Remunerative Price (FRP) Sugar Seasons Fixed by the Government since Sugar Season from 2018-19 to 2022-23",
    xaxis: { title : "year",
    tickfont:{
        size :7,
        color: "black",
        type: "bar",
        name: sugar_year
    }

    },
    yaxis: { title: "value",
    tickfont:{
        size: 11,
        color: "black",
        type : "bar",
        name: sugar_year
    }

    },
 };
 const dataGraph= [
    {
        x:sugar_year,
        y:frp,
        type: "bar",
        marker: {
            color: "green",
            barmode:'group',
        },
    },
 ]



  return (
    <div><h1>Year-wise Details of Hike in the Price of Sugarcane Fair and Remunerative<br /> Price (FRP) Sugar Seasons Fixed by the Government since Sugar Season from 2018-19 to 2022-23</h1>
    <li>Frp = fixed rate price fixed by government per quintal</li>
    <li>Central report of increasing the price of sugar per year </li>
    <Plot data={dataGraph} layout={layout} />
    </div>
  )
}

export default Sugar