DROP TABLE IF EXISTS marvelMovies;

CREATE TABLE marvelMovies (
    id serial PRIMARY KEY,
    title varchar (50),
    photoPath varchar (50),
    release varchar (50),
    rating float,
    summary text
);