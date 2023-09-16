CREATE TABLE user (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name  VARCHAR(100),
    user_hash CHAR(4) NOT NULL,
    role_id INT REFERENCES role NOT NULL,
    create_at TIMESTAMP NOT NULL
);