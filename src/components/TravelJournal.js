import React from "react";
import { Grid } from "@mui/material";
import TravelJournalCard from "./TravelJournalCard";

const TravelJournal = () => {
  const cardsData = [
    {
      // image: "https://source.unsplash.com/WLxQvbMyfas",
      image: "/fiji.png",
      country: "JAPAN",
      link: "https://www.google.com/maps",
      title: "Mount Fuji",
      dates: "12 Jan, 2021 - 24 Jan, 2021",
      description:
        "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    },
    {
      image: "/sydney.png",
      country: "AUSTRALIA",
      link: "https://www.google.com/maps",
      title: "Sydney Opera House",
      dates: "27 May, 2021 - 8 Jun, 2021",
      description:
        "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    },
    {
      image: "/gjord.png",
      country: "NORWAY",
      link: "https://www.google.com/maps",
      title: "Geirangerfjord",
      dates: "01 Oct, 2021 - 18 Oct, 2021",
      description:
        "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    },
  ];

  return (
    <Grid container spacing={3} justifyContent="center" mt={5} mb={3}>
      {cardsData.map((card, index) => (
        <Grid item key={index}>
          <TravelJournalCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TravelJournal;
