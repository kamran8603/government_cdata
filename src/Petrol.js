import React from 'react';
import Crime from './Crime';
import Diesel from './Diesel';
import Kirosin from './Kirosin';
import Lpg from './Lpg';

function Petrol({data,size}) {
  const mapItemProperty = (property) => data?.records?.map(item => item[property]);
  const x_map = mapItemProperty("month")
  const y_map = mapItemProperty("petrol____bbl_")

  const diesel_rate_map= mapItemProperty('diesel____bbl_');

  const kirosin_rate_map= mapItemProperty("kerosene____bbl_"); 

  const lpg_rate_map=mapItemProperty("lpg____mt_");
 
  const xTitle = 'Month';
  const yTitle = 'Petrol ' ;

  return (
    <div>
      <h2>{data?.title}</h2>
      <Crime xLabels={x_map} yValues={y_map} xTitle={xTitle} yTitle={yTitle} />
      <Diesel xLabel={x_map}  ylabel={diesel_rate_map} xTitle={xTitle} yTitle={"Diesel"}/>
      <Kirosin xLabel={x_map} ylabel={kirosin_rate_map} xTitle={xTitle} yTitle={"kirosin"} />
      <Lpg xLabel={x_map} ylabel={lpg_rate_map} xTitle={xTitle} yTitle={"LPG"}  />
    </div>
  );
}

export default Petrol;
