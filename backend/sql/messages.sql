CREATE TABLE messages (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_from INT REFERENCES users NOT NULL,
    message_text TEXT NOT NULL,
    room_id INT REFERENCES rooms,
    friend_id INT REFERENCES friends,
    updated_at TIMESTAMP NOT NULL,
    sent_at TIMESTAMP NOT NULL
);