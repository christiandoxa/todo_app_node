-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-05-10 01:45:57.998

-- tables
-- Table: ACCOUNT
CREATE TABLE ACCOUNT
(
    ID_ACCOUNT int          NOT NULL AUTO_INCREMENT,
    EMAIL      varchar(100) NOT NULL,
    PASSWORD   varchar(100) NOT NULL,
    CONSTRAINT ACCOUNT_pk PRIMARY KEY (ID_ACCOUNT)
);

-- Table: NOTE
CREATE TABLE NOTE
(
    ID_NOTE    int       NOT NULL AUTO_INCREMENT,
    ID_ACCOUNT int       NOT NULL,
    NOTE       TEXT      NOT NULL,
    CREATED_AT timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT NOTE_pk PRIMARY KEY (ID_NOTE)
);

-- foreign keys
-- Reference: NOTE_ACCOUNT (table: NOTE)
ALTER TABLE NOTE
    ADD CONSTRAINT NOTE_ACCOUNT FOREIGN KEY NOTE_ACCOUNT (ID_ACCOUNT)
        REFERENCES ACCOUNT (ID_ACCOUNT);

-- End of file.

