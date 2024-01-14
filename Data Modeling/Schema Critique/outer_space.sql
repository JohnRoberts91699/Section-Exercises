DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE galaxies
(
  galaxy_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE planets
(
  planet_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_days FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy_id INT REFERENCES galaxies(galaxy_id)
);

CREATE TABLE moons
(
  moon_id SERIAL PRIMARY KEY,
  moon_name TEXT NOT NULL,
  planet_id INT REFERENCES planets(planet_id)
);

INSERT INTO galaxies (name)
VALUES
  ('Milky Way');

INSERT INTO planets
  (name, orbital_period_in_days, orbits_around, galaxy_id)
VALUES
  ('Earth', 365.25, 'The Sun', 1),
  -- Add other planet entries here...
  ('Gliese 876 b', 0.23, 'Gliese 876', 1);

INSERT INTO moons (moon_name, planet_id)
VALUES
  ('The Moon', 1),
  ('Phobos', 2),
  ('Deimos', 2),
  -- Add other moon entries here...
  ('S/2004 N 1', 4),
  ('Triton', 4),
  ('Nereid', 4),
  -- Add other moon entries here...
  ('Psamathe', 4),
  ('Neso', 4);
