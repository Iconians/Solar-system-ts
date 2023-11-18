// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { AllData } from "../types";

export function getAveragePlanetsTemperature(data: AllData) {
  return (
    data.planets
      .map((planet) => planet.avgTemp)
      .reduce((acc, curr) => acc + curr) / 8
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
