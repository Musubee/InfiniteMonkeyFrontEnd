import React, { Fragment } from "react";
import { Box, Grommet, Header, Heading, Main } from "grommet";
import { Gremlin } from "grommet-icons";
import "./App.css";

import About from "./components/About";
import CurrentSimulationState from "./components/CurrentSimulationState";

function App() {
  return (
    <Grommet plain full>
      <Fragment>
        <Box direction="column" pad="medium">
          <Header>
            <Gremlin size="large" />
            <Heading>Infinite Monkey Simulation</Heading>
          </Header>
          <Main>
            <About />
            <CurrentSimulationState generatedString="abcdef" characterCount="6" percentage="23%" workTitle="Alphabet"/>
          </Main>
        </Box>
      </Fragment>
    </Grommet>
  );
}

export default App;
