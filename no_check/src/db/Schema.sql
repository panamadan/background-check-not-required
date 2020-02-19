CREATE DATABASE No_Background_Check;

USE DATABASE No_Background_Check;

CREATE TABLE Job_Postings(
    Job_Title VARCHAR(50) NOT NULL,
    Company VARCHAR(50) NOT NULL,
    Salary INT,
    Summary VARCHAR(1000) NOT NULL,
);

