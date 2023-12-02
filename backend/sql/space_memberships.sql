CREATE TABLE space_memberships (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    space_id INT REFERENCES spaces NOT NULL,
    user_id INT REFERENCES users NOT NULL,
    role VARCHAR(100),
    joined_at TIMESTAMP NOT NULL
);