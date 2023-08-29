"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";

export default function Navbar() {
  const [content, setContent] = useState([]);
  const [meta, setMeta] = useState(0);
  const [apistatus, setApistatus] = useState(false);

  const getResponse = async () => {
    const response = await axios.get("https://gdscdev.vercel.app/api");
    console.log(response.data.content);
    setContent(response.data.content.data);
    setMeta(response.data.content.meta);
    setApistatus(true);
    console.log(content);
  };
  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div>
      <Heading>GDSC ASSIGNMENT</Heading>
      <ContentList>
        {content.map((val, index) => {
          return (
            <EachItem key={index}>
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
  height: 30px;
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
  flex-direction: column;
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
`;

const BannerImage = styled.div``;

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
  text-align: center;
`;

const OrganiserName = styled.div`
  margin: 10px;
  text-align: center;
`;
