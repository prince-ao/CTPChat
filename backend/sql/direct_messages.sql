CREATE TABLE direct_messages (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_from INT REFERENCES users NOT NULL,
    user_to INT REFERENCES users NOT NULL,
    message_text TEXT NOT NULL,
    sent_at TIMESTAMP NOT NULL
);