# Creating db
```
CREATE DATABASE eventer_db;
```

## Creating tables
```
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  birth DATE,
  
)

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  content TEXT,
  time_created TIMESTAMP DEFAULT NOW(),
  time_updated TIMESTAMP DEFAULT NOW(),
  owner_id REFERENCES users ON DELETE CASCADE,

)
```
