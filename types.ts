export type MassData = {
  massValue: number;
  massExponent: number;
};

export type VolData = {
  volValue: number;
  volExponent: number;
};

export type Planet = {
  id: string;
  name: string;
  isPlanet: boolean;
  mass: MassData;
  vol: VolData;
  gravity: number;
  avgTemp: number;
  moonsCount?: number;
  moons?: string[];
};

export type Asteroid = {
  name: string;
  discoveryYear: number;
  orbitalPeriod: number;
};

export type AllData = {
  planets: Planet[];
  asteroids: Asteroid[];
};
