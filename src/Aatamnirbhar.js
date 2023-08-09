import React from 'react'
import Plot from 'react-plotly.js';

function Aatamnirbhar({data, size}) {

    const xvalue = data?.records?.map((record)=> record.state_name);
    console.log(xvalue)
    const yValues = data?.records?.map((record) => record.number_of_beneficiary_establishments);
    console.log(yValues);

    const layout = {
        width :size.width || 920, height: 440,
        margin: {b: 160},
        title:"State/UTs-wise Details of the Number of Beneficiaries <br />under Atmanirbhar Bharat Rozgar Yojana (ABRY) as on 28-11-2022",
        xaxis: { title : "State/UTs",
        tickfont :{
            size:9,
            color: "black",
            type: "bar",
            name: xvalue
        }

        },
         yaxis:{ title: "Number of Beneficiary Establishments",
         tickfont:{
            size:  15,
            color: "black",
            type: "bar",
            name: yValues

         }

        },
    };
                const dataGraph =[
            {
                x:xvalue,
                y:yValues,
                type:"bar",
                marker:{
                    color: "brown",
                    barmode: "group",
                },
            },
        ]
    
  return (
    <div>
<Plot data={dataGraph} layout={layout} />

    </div>
  )
}

export default Aatamnirbhar