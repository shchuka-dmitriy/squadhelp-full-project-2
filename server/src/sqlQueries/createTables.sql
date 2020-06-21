-- According to ./server/src/controllers/sockets/ChatController.js in table "Conversation" field "participants"
-- is an array with two elements - [participant1, participant2]
CREATE TABLE "Participants"
(
    id        serial  PRIMARY KEY NOT NULL,
    creator   integer REFERENCES "Users" (id) ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL UNIQUE,
    recipient integer REFERENCES "Users" (id) ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL UNIQUE,
    CONSTRAINT noRepeat CHECK ( creator < recipient )
);

-- According to ./server/src/controllers/sockets/ChatController.js in table "Conversation" field "blackList"
-- is an array with two boolean elements - [false, false],
-- and field "blackList" is an array with the same two boolean elements - [false, false] that's why create
-- one table instead two
CREATE TABLE "BlackAndFavoriteList"
(
    id                  serial PRIMARY KEY NOT NULL,
    firstPartStatus     boolean NOT NULL,
    secondPartStatus    boolean NOT NULL
);

-- CREATE TABLE "BlackList"
-- (
--     id                  serial PRIMARY KEY NOT NULL,
--     firstPartStatus     boolean NOT NULL,
--     secondPartStatus    boolean NOT NULL
-- );
--
-- CREATE TABLE "FavoriteList"
-- (
--     id                  serial PRIMARY KEY NOT NULL,
--     firstPartStatus     boolean NOT NULL,
--     secondPartStatus    boolean NOT NULL
-- );

INSERT INTO "BlackAndFavoriteList" VALUES
(false, false),
(true, true),
(false, true),
(true, false);

CREATE TABLE "Conversations"
(
    id            serial  PRIMARY KEY NOT NULL,
    participants  integer REFERENCES "Participants" (id) ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL,
    blackList     integer REFERENCES "BlackAndFavoriteList" (id) ON DELETE NO ACTION ON UPDATE NO ACTION NOT NULL
                            DEFAULT 0,
    favoriteList  integer REFERENCES "BlackAndFavoriteList" (id) ON DELETE NO ACTION ON UPDATE NO ACTION NOT NULL
                            DEFAULT 0,
    createdAt     timestamp default NOW() NOT NULL,
    updatedAt     timestamp default NOW() NOT NULL,
    CONSTRAINT checkLists CHECK ( blackList < 4 AND favoriteList < 4)
);

CREATE TABLE "Messages"
(
    id             serial PRIMARY KEY                                                           NOT NULL,
    sender         integer REFERENCES "Users" (id)        ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL,
    body           text                                                                         NOT NULL DEFAULT '',
    conversation   integer REFERENCES "Conversations" (id) ON DELETE CASCADE ON UPDATE CASCADE  NOT NULL UNIQUE,
    createdAt      timestamp DEFAULT NOW() NOT NULL,
    updatedAt      timestamp DEFAULT NOW() NOT NULL
);

CREATE TABLE "Catalogs"
(
    id              serial  PRIMARY KEY                     NOT NULL,
    userId          integer REFERENCES "Users" (id)         ON DELETE NO ACTION ON UPDATE CASCADE NOT NULL,
    catalogName     varchar(128)                            NOT NULL CHECK ( catalogName != '' ),
    chats           integer REFERENCES "Conversations" (id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL UNIQUE
);

-- AUTOMATIC TIMESTAMPS WITH POSTGRESQL for field "updatedAt"
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.updatedAt = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON "Conversations"
    FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON "Messages"
    FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();