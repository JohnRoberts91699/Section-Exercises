CREATE TABLE Team (
    team_id INT PRIMARY KEY,
    team_name VARCHAR(255),
    coach VARCHAR(255),
    captain VARCHAR(255),
    standing_id INT,
    FOREIGN KEY (standing_id) REFERENCES Standings(standing_id)
);


CREATE TABLE Player (
    player_id INT PRIMARY KEY,
    player_name VARCHAR(255),
    team_id INT,
    FOREIGN KEY (team_id) REFERENCES Team(team_id)
);


CREATE TABLE Referee (
    referee_id INT PRIMARY KEY,
    referee_name VARCHAR(255)
);


CREATE TABLE Match (
    match_id INT PRIMARY KEY,
    date DATE,
    season_id INT,
    FOREIGN KEY (season_id) REFERENCES Season(season_id)
);


CREATE TABLE TeamMatch (
    team_id INT,
    match_id INT,
    goals_scored INT,
    PRIMARY KEY (team_id, match_id),
    FOREIGN KEY (team_id) REFERENCES Team(team_id),
    FOREIGN KEY (match_id) REFERENCES Match(match_id)
);


CREATE TABLE RefereeMatch (
    referee_id INT,
    match_id INT,
    PRIMARY KEY (referee_id, match_id),
    FOREIGN KEY (referee_id) REFERENCES Referee(referee_id),
    FOREIGN KEY (match_id) REFERENCES Match(match_id)
);


CREATE TABLE Season (
    season_id INT PRIMARY KEY,
    start_date DATE,
    end_date DATE
);


CREATE TABLE Standings (
    standing_id INT PRIMARY KEY,
    team_id INT,
    season_id INT,
    points INT,
    rank INT,
    FOREIGN KEY (team_id) REFERENCES Team(team_id),
    FOREIGN KEY (season_id) REFERENCES Season(season_id)
);