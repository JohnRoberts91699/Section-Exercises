DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passengers
(
  passenger_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE locations
(
  location_id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE airlines
(
  airline_id SERIAL PRIMARY KEY,
  airline_name TEXT NOT NULL
);

CREATE TABLE tickets
(
  ticket_id SERIAL PRIMARY KEY,
  passenger_id INT REFERENCES passengers(passenger_id),
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline_id INT REFERENCES airlines(airline_id),
  from_location_id INT REFERENCES locations(location_id),
  to_location_id INT REFERENCES locations(location_id)
);

INSERT INTO passengers (first_name, last_name)
VALUES
  ('Jennifer', 'Finch'),
  ('Thadeus', 'Gathercoal'),
  ('Sonja', 'Pauley'),
  ('Waneta', 'Skeleton'),
  ('Berkie', 'Wycliff'),
  ('Alvin', 'Leathes'),
  ('Cory', 'Squibbes');

INSERT INTO locations (city, country)
VALUES
  ('Washington DC', 'United States'),
  ('Tokyo', 'Japan'),
  ('Los Angeles', 'United States'),
  ('Seattle', 'United States'),
  ('Paris', 'France'),
  ('Dubai', 'UAE'),
  ('New York', 'United States'),
  ('Cedar Rapids', 'United States'),
  ('Charlotte', 'United States'),
  ('Sao Paolo', 'Brazil'),
  ('Chicago', 'United States'),
  ('Mexico City', 'Mexico'),
  ('Casablanca', 'Morocco'),
  ('Beijing', 'China'),
  ('New Orleans', 'United States'),
  ('Santiago', 'Chile');

INSERT INTO airlines (airline_name)
VALUES
  ('United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ('Air China'),
  ('American Airlines'),
  ('Avianca Brasil');

INSERT INTO tickets
  (passenger_id, seat, departure, arrival, airline_id, from_location_id, to_location_id)
VALUES
  (1, '33B', '2018-04-08T09:00:00', '2018-04-08T12:00:00', 1, 1, 3),
  -- Add other ticket entries here...
  (7, '10D', '2019-01-20T19:30:00', '2019-01-20T22:45:00', 7, 10, 15);
