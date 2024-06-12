import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "red",
});

const TitleContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

const Title = styled(Typography)({
  marginLeft: "8px",
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <TitleContainer>
          <TravelExploreIcon />
          <Title variant="h6">My Travel Journal</Title>
        </TitleContainer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
