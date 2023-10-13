CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name  VARCHAR(100),
    password VARCHAR(200) NOT NULL,
    grad_year VARCHAR(5),
    user_hash CHAR(4) NOT NULL,
    role_id INT REFERENCES roles NOT NULL,
    created_at TIMESTAMP NOT NULL
);