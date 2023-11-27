# Builtt

Local php server was on port 8000

MySQL to create tabel in DB which was used

create table products
(
    id          int auto_increment
        primary key,
    name        varchar(255)   not null,
    price       decimal(10, 2) not null,
    volume      varchar(10)    not null,
    description text           null,
    url         text           null
);

In folder frontend -> builttFe run npm install if needed, then npm run dev to run local server
