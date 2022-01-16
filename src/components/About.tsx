import React from "react";
import { Box, Markdown } from "grommet";

const ABOUT_COPY = `
# About

The **Infinite Monkey Theorem** is a thought experiment to showcase the unfathomable nature of _infinity_. It states that given infinite time, a monkey typing at a keyboard will almost certainly recreate the entire works of Shakespeare. In fact, the monkey will probably recreate every and any finite-length text. This website seeks to simulate the process through random character generation in hopes of:

1. Showing how long recreating Shakespeare would really take;
2. Hopefully getting lucky and seeing some longer correctly-generated strings.
`;

const About = () => {
  return (
    <Box pad="small">
      <Markdown>{ABOUT_COPY}</Markdown>
    </Box>
  );
};

export default About;
