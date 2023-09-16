CREATE TABLE direct_message (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_from INT REFERENCES user NOT NULL,
    user_to INT REFERENCES user NOT NULL,
    message_text TEXT NOT NULL,
    sent_at TIMESTAMP NOT NULL
);