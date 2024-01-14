DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE artists
(
  artist_id SERIAL PRIMARY KEY,
  artist_name TEXT NOT NULL
);

CREATE TABLE producers
(
  producer_id SERIAL PRIMARY KEY,
  producer_name TEXT NOT NULL
);

CREATE TABLE songs
(
  song_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration INTERVAL NOT NULL,
  release_year SERIAL NOT NULL,
  album TEXT NOT NULL
);

CREATE TABLE song_artists
(
  song_id INT REFERENCES songs(song_id),
  artist_id INT REFERENCES artists(artist_id),
  PRIMARY KEY (song_id, artist_id)
);

CREATE TABLE song_producers
(
  song_id INT REFERENCES songs(song_id),
  producer_id INT REFERENCES producers(producer_id),
  PRIMARY KEY (song_id, producer_id)
);

INSERT INTO artists (artist_name)
VALUES
  ('Hanson'),
  ('Queen'),
  ('Mariah Carey'),
  ('Boyz II Men'),
  ('Lady Gaga'),
  ('Bradley Cooper'),
  ('Nickelback'),
  ('Jay Z'),
  ('Alicia Keys'),
  ('Katy Perry'),
  ('Juicy J'),
  ('Maroon 5'),
  ('Christina Aguilera'),
  ('Avril Lavigne'),
  ('Destiny''s Child');

INSERT INTO producers (producer_name)
VALUES
  ('Dust Brothers'),
  ('Stephen Lironi'),
  ('Roy Thomas Baker'),
  ('Walter Afanasieff'),
  ('Benjamin Rice'),
  ('Rick Parashar'),
  ('Al Shux'),
  ('Max Martin'),
  ('Cirkut'),
  ('Shellback'),
  ('Benny Blanco'),
  ('The Matrix'),
  ('Darkchild');

INSERT INTO songs
  (title, duration, release_year, album)
VALUES
  ('MMMBop', '03:58', 1997, 'Middle of Nowhere'),
  -- Add other song entries here...
  ('Say My Name', '04:00', 1999, 'The Writing''s on the Wall');

INSERT INTO song_artists
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (3, 4),
  (4, 5),
  (4, 6),
  (5, 7),
  (5, 8),
  (6, 9),
  (6, 10),
  (7, 11),
  (7, 12),
  (8, 13),
  (8, 14),
  (9, 15),
  (10, 16);
  
INSERT INTO song_producers
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (4, 5),
  (5, 6),
  (6, 7),
  (7, 8),
  (8, 9),
  (9, 10);
