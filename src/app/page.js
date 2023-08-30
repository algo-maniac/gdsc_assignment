"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";

Chart.register(CategoryScale);

export default function Navbar() {
  const [content, setContent] = useState([]);
  const [meta, setMeta] = useState(0);
  const [apistatus, setApistatus] = useState(false);
  const [search, setSearch] = useState("");

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const getResponse = async () => {
    const response = await axios.get("https://gdscdev.vercel.app/api");
    console.log(response.data.content);
    setContent(response.data.content.data);
    setMeta(response.data.content.meta);
    setApistatus(true);
    console.log(content);
  };

  const searchHandler = () => {
    let pos = "";
    console.log(content);
    content.forEach((element) => {
      let string = element.title;
      console.log(string);
      if (string.includes(search)) {
        pos = element.title;
      }
    });
    // for (let i in content) {
    //
    // }
    if (pos !== "") {
      let access = document.getElementById(pos);
      access.scrollIntoView({ behavior: "smooth" }, true);
    }
  };
  useEffect(() => {
    getResponse();
    setChartData({
      labels: content.map((data) => data.title),
      datasets: [
        {
          label: "ID ",
          data: content.map((data) => data.id),
          backgroundColor: [
            "red",
            "blue",
            "green",
            "yellow",
            "brown",
            "pink",
            "grey",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [content]);
  return (
    <div>
      <div style={{ display: "flex" }} className="mt-5">
        <Heading>GDSC ASSIGNMENT</Heading>

        <div className="mb-3 w-[20%] inline-block ml-5">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch text-white">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-[10px] border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-white dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <button
              className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-xl transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={searchHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <PieChart chartData={chartData} />
      <ContentList>
        {content.map((val, index) => {
          return (
            <EachItem key={index} id={val.title}>
              <BannerImage style={{ borderRadius: "10px" }}>
                <img
                  src={val.banner_image}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                />
              </BannerImage>
              <Id>Id : {val.id}</Id>
              <Title>Title : {val.title}</Title>
              <Description>Description : {val.description}</Description>
              <DateAndTime>Date and Time : {val.date_time}</DateAndTime>
              <VenueCity>Venue City : {val.venue_city}</VenueCity>
              <VenueCountry>Venue Country : {val.venue_country}</VenueCountry>
              <VenueName>Venue Name : {val.venue_name}</VenueName>
              <OrganiserIcon>
                <img
                  src={val.organiser_icon}
                  style={{
                    height: "20%",
                    width: "20%",
                    objectFit: "cover",
                    // marginLeft: "40%",
                  }}
                />
              </OrganiserIcon>
              <OrganiserName>
                Organiser Name : {val.organiser_name}
              </OrganiserName>
            </EachItem>
          );
        })}
      </ContentList>
    </div>
  );
}

const Heading = styled.div`
  border: 2px solid white;
  width: 50%;
  height: 40px;
  color: white;
  text-align: center;
  padding-top: 5px;
  margin-left: 25%;
  border-radius: 10px;
  box-shadow: 1px 3px 13px -4px rgba(255, 255, 255, 1);
`;

const ContentList = styled.div`
  //   border: 2px solid white;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media screen and (min-width: 425px) {
    flex-direction: row;
  }
`;

const EachItem = styled.div`
  color: white;
  border: 2px solid white;
  // padding: 5px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: #171737;
  box-shadow: 1px 3px 13px -4px rgba(255, 255, 255, 1);
  height: 50%;
  width: 30%;
  @media screen and (min-width: 320px) {
    width: 90%;
  }
  @media screen and (min-width: 425px) {
    width: 30%;
  }
`;

const BannerImage = styled.div``;

const Id = styled.div`
  margin: 10px 10px;
`;

const Title = styled.div`
  margin: 10px 10px;
`;

const Description = styled.div`
  margin: 10px 10px;
`;

const DateAndTime = styled.div`
  margin: 10px 10px;
`;

const VenueCity = styled.div`
  margin: 10px 10px;
`;

const VenueCountry = styled.div`
  margin: 10px 10px;
`;

const VenueName = styled.div`
  margin: 10px 10px;
`;

const OrganiserIcon = styled.div`
  // text-align: center;
  display: flex;
  justify-content: center;
`;

const OrganiserName = styled.div`
  margin: 10px;
  text-align: center;
`;
