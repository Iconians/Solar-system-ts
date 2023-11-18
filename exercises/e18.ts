// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../types";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]): number {
  const yearsAsteroidsFound = asteroids
    .map((asteroid) => asteroid.discoveryYear)
    .reduce<{ [key: string]: number }>((allDates, date) => {
      const currcount = allDates[date] ?? 0;
      let countedYears = {
        ...allDates,
        [date]: currcount + 1,
      };
      return countedYears;
    }, {});

  const yearMostAsteroidsFound = Object.keys(yearsAsteroidsFound).reduce(
    (acc: string, curr: string) => {
      const accValue = yearsAsteroidsFound[acc];
      const currValue = yearsAsteroidsFound[curr];
      return accValue !== undefined &&
        currValue !== undefined &&
        accValue > currValue
        ? acc
        : curr;
    },
    ""
  );
  return parseInt(yearMostAsteroidsFound);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
