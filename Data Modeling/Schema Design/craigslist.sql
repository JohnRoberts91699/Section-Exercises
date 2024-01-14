CREATE TABLE Region (
    region_id INT PRIMARY KEY,
    region_name VARCHAR(255)
);


CREATE TABLE User (
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255)
);


CREATE TABLE Post (
    post_id INT PRIMARY KEY,
    title VARCHAR(255),
    text TEXT,
    user_id INT,
    region_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (region_id) REFERENCES Region(region_id)
);


CREATE TABLE  Vategory (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255)
);


CREATE TABLE PostCategory (
    post_id INT,
    category_id INT,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);


CREATE TABLE UserRegion (
    user_id INT,
    region_id INT,
    PRIMARY KEY (user_id, region_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (region_id) REFERENCES Region(region_id)
);