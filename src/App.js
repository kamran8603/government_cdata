import React from "react";
import { useState, useEffect } from "react";
import Plotly from "./Plotlyy";
// import Population from "./Population";
// import Sugar from "./Sugar";
// import Aatamnirbhar from "./Aatamnirbhar";
// import { SizeMe } from "react-sizeme";
// import Petrol from "./Petrol";

const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const urls = [
  {
    type: "crime",
    title: "Crime Chart",
    getData: (data) => {
      const x = data?.records?.map(item=> item.crime_head);
      const mapItemProperty = (property) => data?.records?.map(item => item[property]);
      const against_foreign =mapItemProperty("cases_of_crimes_committed_against___foreign_tourists");
      const other_foreign = mapItemProperty("cases_of_crimes_committed_against___other__foreigners");
      const total = mapItemProperty("cases_of_crimes_committed_against___total_foreigners__col_3___col_4_");
      return [
        {
        type: 'bar',
        name : "agains foreign",
        x:x,
        y: against_foreign,

        // x: data?.records?.map((record) => record.crime_head),
        //  yothers: data?.records?.map((record)=>record.cases_of_crimes_committed_against___other__foreigners),
         
        //  y: data?.records?.map(
        //   (record) =>
        //     record.cases_of_crimes_committed_against___foreign_tourists
        // ),
      },
      {
        type: 'bar',
        name : "other_foreign",
        x:x,
        y: other_foreign,
      },
      {
        type: 'bar',
        name : "against foreign",
        x:x,
        y: total,
      }
    
    ];
    },
    url: "https://api.data.gov.in/resource/b6a43056-ea8e-48dc-b5f8-10ca22ed3c9b?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
  {
    type: "population",
    getData: (data) => {
      return [{
        type: 'bar',
        x: data?.records.map((item) => item.india___state__union_territory),
        y: data?.records.map((item) => item.population___2011),
      }];
    },
    url: "https://api.data.gov.in/resource/ea7705e8-feed-440e-86a9-1b51afaa738c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
  {
    type: "sugar",
    getData: (data) => {
      return [{
        type: 'bar',
        x: data?.records?.map((record) => record.sugar_season),
        y: data?.records?.map((record) => record.frp_fixed_by_government),
      }];
    },
    url: "https://api.data.gov.in/resource/6546457d-a621-4a61-b114-8b3ad0888142?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
  {
    type: "Atmanirbhar_Bharat",
    getData: (data)=> {
      return [{
        type: 'bar',
        x:  data?.records?.map((record)=> record.state_name),
        y: data?.records?.map((record) => record.number_of_beneficiary_establishments)
      }]
    },
    url: "https://api.data.gov.in/resource/22ba977a-77ee-416a-9b04-e22e9964fff5?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
  {
    type: "petrolium",
    getData:(data)=> {
      // const result = data.field.map(item => );
      const x = data?.records?.map(item => item.month);
      const mapItemProperty = (property) => data?.records?.map(item => item[property]);
      const petrol_rate_map = mapItemProperty("petrol____bbl_");
      const diesel_rate_map = mapItemProperty('diesel____bbl_');
      const kirosin_rate_map = mapItemProperty("kerosene____bbl_"); 
      const lpg_rate_map = mapItemProperty("lpg____mt_");
      return [
        {
          type: 'bar',
          name: 'Petrol',
          x: x,
          y: petrol_rate_map
        },
        {
          type: 'bar',
          name: 'Diesel',
          x: x,
          y: diesel_rate_map
        },
        {
          type: 'bar',
          name: 'Kerosine',
          x: x,
          y: kirosin_rate_map
        },
        {
          type: 'bar',
          name: 'LPG',
          x: x,
          y: lpg_rate_map
        }
      ]
    },
    url: "https://api.data.gov.in/resource/b47a1c7c-2261-49ac-bcda-7dc325b2e30c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
];

function App() {

  const [plotData, setPlotData] = useState({});
  const [showData, setShowData] = useState(false);

  // useEffect(() => {
  //   const arr = [];
  //   arr.push(fetchData(urls[0].url));
  //   arr.push(fetchData(urls[1].url));
  //   arr.push(fetchData(urls[2].url));
  //   arr.push(fetchData(urls[3].url));
  //   arr.push(fetchData(urls[4].url));
  //   Promise.all(arr).then((respArr) =>
  //     setPlot({
  //       crime: respArr[0],
  //       population: respArr[1],
  //       sugar: respArr[2],
  //       Atmanirbhar_Bharat: respArr[3],
  //       petrolium: respArr[4]
  //     })
  //   );
  // }, []);

  const handleClick = (item) => {
    fetchData(item.url).then((data) => {
      const plotObj = item.getData(data);
      setPlotData(plotObj);
    });
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-1/3 divide-y-2">
        {urls.map((item) => (
          <button
            className="p-2 bg-indigo-600"
            key={item.type}
            onClick={() => handleClick(item)}
          >
            {item.type}
          </button>
        ))}
      </div>
      <div className="w-2/3">
        <Plotly data={plotData} />
      </div>
      {/* <button className="bg-slate-300" onClick={toggleData}>Show Data</button> */}
    </div>
    // <SizeMe className="text-center">

    //     {({ size }) => <div>
    //       <div className="w-full">
    //         <Plotly size={size} data={plott.crime} />
    //
    // {/* <div className="w-full">
    //   <Population size={size} data={plott.population} />
    // </div>
    // <div className="w-full">
    //   <Sugar size={size} data={plott.sugar} />
    // </div>
    // <div className="w-full">
    //   <Aatamnirbhar size={size} data={plott.Atmanirbhar_Bharat} />
    // </div>
    // <div className="w-full">
    //   <Petrol size={size} data={plott.petrolium}  />
    // </div> */}

    // </div>
    // }
    // </SizeMe>
  );
}

export default App;
