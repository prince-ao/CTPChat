CREATE TABLE message (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_from INT REFERENCES user NOT NULL,
    message_text TEXT NOT NULL,
    room_id INT REFERENCES room,
    friend_id INT REFERENCES friend,
    updated_at TIMESTAMP NOT NULL,
    sent_at TIMESTAMP NOT NULL
);