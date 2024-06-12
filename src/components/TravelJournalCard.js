import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "16px",
  borderBottom: "1px solid #ccc",
  boxShadow: "none",
  width: "60vw",
  height: "max-content",
  "@media (max-width: 1100px)": {
    width:"80vw"
  },
  "@media (max-width: 600px)": {
    flexDirection: "column",
    width:"80vw"
  },

});

const Media = styled(CardMedia)({
  height: "100%",
  width: "100%",
});

const Content = styled(CardContent)({
  paddingLeft: "33px",
  display: "grid",
  gap: "5%",
  "@media (max-width: 600px)": {
    paddingLeft: "3px",
  },
});

const Title = styled(Typography)({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "30.26px",
});

const DateText = styled(Typography)({
  fontSize: "15px",
  fontWeight: "700",
  marginTop: "2%",
});

const Description = styled(Typography)({
  fontSize: "16px",
  lineHeight: "29.36px",
});

const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  "@media (max-width: 600px)": {
    display: "grid",
    gap:"5%"
  },
});

const JapanText = styled(Typography)({
  marginRight: "10px",
  fontSize: "15px",
  fontWeight: "400",
  letterSpacing: "0.17em",
});

const StyledLink = styled(Link)({
  marginRight: "10px",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "12.39px",
  color: "#918E9B",
});

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{ fill: "#F55A5A" }}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);


const TravelJournalCard = ({
  image,
  country,
  link,
  title,
  dates,
  description,
}) => {
  return (
    <StyledCard>
      <Grid container pb={4}>
        <Grid item xs={12} sm={3}>
          <Media component="img" image={image} title={title} />
        </Grid>
        <Grid item xs={12} sm={9} mt={4} mb={3}>
          <Content>
            <Header>
              <JapanText style={{display:"flex", alignItems:"center"}}>
                <LocationIcon fontSize="small" style={{ marginRight: "4px"}} />
                {country}
              </JapanText>
              <StyledLink href={link} target="_blank" rel="noopener">
                View on Google Maps
              </StyledLink>
            </Header>
            <Title>{title}</Title>
            <DateText>{dates}</DateText>
            <Description>{description}</Description>
          </Content>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default TravelJournalCard;
