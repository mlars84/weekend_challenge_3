CREATE TABLE tasks (
    id SERIAL PRIMARY KEY NOT NULL,
    taskname VARCHAR(200),
    completionstatus boolean
);
