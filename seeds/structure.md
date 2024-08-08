# Creating db
```
CREATE DATABASE eventer;
```

## Creating tables
```
CREATE TABLE IF NOT EXISTS person (
  id SERIAL PRIMARY KEY,
  pseudonim VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  birth DATE
)

CREATE TABLE IF NOT EXISTS event (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  content TEXT,
  time_created TIMESTAMP DEFAULT NOW(),
  time_updated TIMESTAMP DEFAULT NOW(),
  owner_id INTEGER REFERENCES person ON DELETE CASCADE
)

CREATE TABLE IF NOT EXISTS tag (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  description TEXT
)

CREATE TABLE IF NOT EXISTS event_tag (
  event_tag_id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES event (id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tag (id) ON DELETE CASCADE
)

```

## Inserting values
```
INSERT INTO person (pseudonim, password, first_name, last_name, birth) VALUES 
  ('magma', 'admin1', 'Alexey', 'Romanov', '2005-04-23'),
  ('tester', 'tester', 'Oleg', 'Kovalev', '1999-10-12'),
  ('mazda', 'fast!', 'Eric', 'Ostrovsky', '2005-01-17');

INSERT INTO event (title, content, time_created, time_updated, owner_id) VALUES
  ('swimming night', 'It was amazing. Really. Enjoyed it', DEFAULT, DEFAULT, 1),
  ('101scam', 'I have scammed 500 dollars. It just took 1 minute!', DEFAULT, DEFAULT, 3),
  ('New python script', 'I created new script. It parses sber', DEFAULT, DEFAULT, 2),
  ('Apples', 'I was eating apples in a garden. It was tasty!', DEFAULT, DEFAULT, 1);

INSERT INTO tag (name, description) VALUES
  ('sport', 'tag that describes sport events'),
  ('music', 'tag that shows events reflecting music staff'),
  ('home', 'tag that relates to home staff'),
  ('night', 'tag that describes event with night-related staff'),
  ('meal', 'tag that describes meal and food'),
  ('programming', 'tag that describes programming and coding');

INSERT INTO event_tag (event_id, tag_id) VALUES 
  (1, 1),
  (1, 4),
  (4, 3),
  (4, 5),
  (3, 6)

```
