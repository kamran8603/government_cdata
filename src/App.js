import React from "react";
import { useState,  } from "react";
import Plotly from "./Plotlyy";

const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const urls = [
  {
    type: "crime",
    layout: {
      barmode: "stack",
      title: "Crime Chart",
      xaxis: {
        title: "Crime Chart"
      }
    },
    getData: (data) => {
      const x = data?.records?.map((item) => item.crime_head);
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);
      const against_foreign = mapItemProperty(
        "cases_of_crimes_committed_against___foreign_tourists"
      );
      const other_foreign = mapItemProperty(
        "cases_of_crimes_committed_against___other__foreigners"
      );
      const total = mapItemProperty(
        "cases_of_crimes_committed_against___total_foreigners__col_3___col_4_"
      );
      return [
        {
          type: "bar",
          name: "against foreign",
          x: x,
          y: against_foreign,
        },
        {
          type: "bar",
          name: "other_foreign",
          x: x,
          y: other_foreign,
        },
        {
          type: "bar",
          name: "against foreign",
          x: x,
          y: total,
        },
      ];
    },
    url: "https://api.data.gov.in/resource/b6a43056-ea8e-48dc-b5f8-10ca22ed3c9b?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },


{
  type: "Rajyasabha",
  layout: {
    title:
      "Attendance of the Members of Lok Sabha 15 for Monsoon Session 5",
      xaxis: {
        title: " Attendance of the Members of Lok Sabha 15 for Monsoon Session 5"
      },
      yaxis:{
        title: "Total Seat ",
        
      }
  },
  getData: (data) => {
    const x = data?.records?.map((item)=>item.state+ "("+item.constituency +")")
    const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);
        
        const div = mapItemProperty("division_seat_no_");
        const total_sittings = mapItemProperty("total_sittings");
        const session = mapItemProperty("session")
        const present = mapItemProperty("no_of_days_member_signed_the_register")
        // const constituency = mapItemProperty("constituency");
    return [
      {
        type: "bar",
        name: "Total seat ",
        x: x,
        y: total_sittings,
        
      },
      {
        type: "bar",
        name: "Session that happen in lokshaba",
        x: x,
        y: session,
      },
      {
        type: "bar",
        name: "MLA Present in a session",
        x: x,
        y: present,
      },
      // {
      //   type: "bar",
      //   name: "attendence",
      //   x: x,
      //   y: sign,
      // }
    ];
  },
  url:"https://api.data.gov.in/resource/60a68cec-7d1a-4e0e-a7eb-73ee1c7f29b7?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
},

  {
    type: "population",
    layout: {
      title:
        "State-wise Population, Decadal Population Growth Rate and Population Density",
        xaxis: {
          title: " Population"
        },
        yaxis:{
          title: "Ministry of Health and Family Welfare Department of Health and Family Welfare",
          
        }
    },
    getData: (data) => {
      return [
        {
          type: "bar",
          x: data?.records.map((item) => item.india___state__union_territory),
          y: data?.records.map((item) => item.population___2011),
        },
      ];
    },
    url: "https://api.data.gov.in/resource/ea7705e8-feed-440e-86a9-1b51afaa738c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },

  {
    type: "city list wellness",
    layout: {
      title: "Ministry of Health and Family Welfare Department of <br /> Health and Family Welfare Central Government Health Scheme",
      xaxis :{
        title: "City-wise list of Doctar and Wellness Centres ",
      },
      yaxis:{
        title: "City-wise list of doctar and Wellness Centres",
      }
    },
    getData: (data) => {
      const x = data?.records?.map((item) => item.wellnesscentrecode + "(" +item.wellnesscentrename + ")");
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);
      const doctor_count = mapItemProperty("doctorcount");
      const center_name = mapItemProperty("wellnesscentrename");
     const category = mapItemProperty("category");
      return [
        {
          type: "bar",
          name: "doctor",
          x: x,
          y: doctor_count,
          text: category,
        },
        
      ];
    },
    url: "https://api.data.gov.in/resource/8eede3a2-1652-49eb-bd7f-48ae3ea7a11e?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
  {
    type: "sugar",
    title:
      "Year-wise Details of Hike in the Price of Sugarcane Fair and Remunerative Price (FRP) Sugar Seasons Fixed by the Government since Sugar Season from 2018-19 to 2022-23",
    getData: (data) => {
      return [
        {
          type: "line",
          x: data?.records?.map((record) => record.sugar_season),
          y: data?.records?.map((record) => record.frp_fixed_by_government),
        },
      ];
    },
    url: "https://api.data.gov.in/resource/6546457d-a621-4a61-b114-8b3ad0888142?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },

  {
    type: "List_save_list",
    title: "List of Life Saving Drugs",
      
    getData:(data)=>{
      return[
        {
          type:"line",
       x :data?.records?.map((item)=>item._medicinename_),
       name :data?.records?.map((item)=>item.typename),
      
      },
    ];
    },
    url: "https://api.data.gov.in/resource/26a686fb-eff5-4b33-b5e9-7dd6f41fb870?api-key=579b464db66ec23bdd0000010992a578e338408c621e74ae49571688&format=json",
    
  },
  {
    type: "Atmanirbhar_Bharat",
    getData: (data) => {
      return [
        {
          type: "bar",
          x: data?.records?.map((record) => record.state_name),
          y: data?.records?.map(
            (record) => record.number_of_beneficiary_establishments
          ),
        },
      ];
    },
    url: "https://api.data.gov.in/resource/22ba977a-77ee-416a-9b04-e22e9964fff5?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
  {
    type: "petrolium",
    layout: {
      barmode: "stack",
    },
    getData: (data) => {
      const x = data?.records?.map((item) => item.month);
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);
      const petrol_rate_map = mapItemProperty("petrol____bbl_");
      const diesel_rate_map = mapItemProperty("diesel____bbl_");
      const kirosin_rate_map = mapItemProperty("kerosene____bbl_");
      const lpg_rate_map = mapItemProperty("lpg____mt_");
      return [
        {
          type: "bar",
          name: "Petrol",
          x: x,
          y: petrol_rate_map,
        },
        {
          type: "bar",
          name: "Diesel",
          x: x,
          y: diesel_rate_map,
        },
        {
          type: "bar",
          name: "Kerosine",
          x: x,
          y: kirosin_rate_map,
        },
        {
          type: "bar",
          name: "LPG",
          x: x,
          y: lpg_rate_map,
        },
      ];
    },
    url: "https://api.data.gov.in/resource/b47a1c7c-2261-49ac-bcda-7dc325b2e30c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
  },
];

function App() {
  const [plotData, setPlotData] = useState({});
  const [layout, setLayout] = useState({});

  const handleClick = (item) => {
    fetchData(item.url).then((data) => {
      const plotObj = item.getData(data);
      setPlotData(plotObj);
      setLayout(item.layout);
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
        <Plotly data={plotData} layout={layout} />
      </div>
    </div>
  );
}

export default App;
