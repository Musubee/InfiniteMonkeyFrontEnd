import React, { useState, useEffect } from "react";
import { Box, Markdown, Text } from "grommet";

type SimulationDataType = {
	characterCount: string;
	generatedString: string;
	percentage: string;
	workTitle: string;
};

const UPDATE_INTERVAL = 500 // in ms

const CurrentSimulationState = (simulationDataProps: SimulationDataType) => {
	const { characterCount, generatedString, percentage, workTitle } = simulationDataProps;

	const [generatedStringIndex, setIndex] = useState(0);

	const updateString = () => generatedStringIndex < generatedString.length ? setIndex(prevIndex => prevIndex + 1) : setIndex(0);

	useEffect(() => {
		const interval = setInterval(() => {
			updateString();
			console.log(generatedStringIndex);
		}, UPDATE_INTERVAL);
		return () => clearInterval(interval);
	}, []);

	return (
		<Box pad="small">
			<Text>{"Current State"}</Text>
			<Text>{`${generatedString.slice(0, generatedStringIndex)}`}</Text>
			<Text>{`Character Count: ${characterCount}`}</Text>
			<Text>{`Percentage Complete: ${percentage}`}</Text>
			<Text>{`Title: ${workTitle}`}</Text>
		</Box>
	);
};

export default CurrentSimulationState;
