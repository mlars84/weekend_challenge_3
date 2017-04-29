CREATE TABLE tasks (
    id SERIAL PRIMARY KEY NOT NULL,
    taskname VARCHAR(12) UNIQUE,
    completionstatus boolean
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
