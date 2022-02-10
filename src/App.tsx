import React, { Fragment } from "react";
import { Box, Grommet, Header, Heading, Main } from "grommet";
import { Gremlin } from "grommet-icons";

import About from "./components/About";

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
          </Main>
        </Box>
      </Fragment>
    </Grommet>
  );
}

export default App;
