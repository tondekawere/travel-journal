import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import TravelJournal from "./components/TravelJournal";
import Header from "./components/Header";

const Root = styled(Container)({
  fontFamily: "Inter, sans-serif",
  padding:"0"
  
});

function App() {
  return (
    <Root>
      <Header/>
      <TravelJournal />
    </Root>
  );
}

export default App;
