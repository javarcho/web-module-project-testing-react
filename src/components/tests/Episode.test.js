import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


const TEST_MESSAGE = "test message";

const testEpisode = {
  id: 1,
  name: "",
  image:
    "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
  season: 1,
  number: 1,
  summary: TEST_MESSAGE,
  runtime: 1,
};

test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);
  const episodeSummary = screen.getByTestId("episode summary");
  expect(episodeSummary).not.toBeNull();
  expect(episodeSummary).toBeInTheDocument();
  expect(episodeSummary).toHaveTextContent(TEST_MESSAGE);
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={{ ...testEpisode, image: null }} />);
  const episodeImage = screen.getByAltText("./stranger_things.png");
  expect(episodeImage).not.toBeNull();
  expect(episodeImage).toBeInTheDocument();
});