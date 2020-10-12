# Rensselaer-e-trade-Dashboard

## Overview
Tired of posting threads on Facebook, Craigslist, Reddit, Poshmark and all different kinds of website -- just to sell something? This is a web application where students at RPI can sell/buy second-hand products in 1 centralized place so that everyone's lives can be easier!

## Requirement
- node
- postgreSQL

## Installation

- Install dependencies using `npm install`

- cd into the server directory, and run

  ```
  psql -f items.sql
  ```
  to create and seed the Postgres database
  
- 
  Run

  ```
  npm start
  ```
  in the project root directory and visit `localhost:3000` to view the live application.

- Once the application is up and running, you may use the `localhost:3001/api/item` endpoint to access the backend API.

## Troubleshooting

- If there's a problem with the `concurrently` dependency, run this command `npm i concurrently --save-dev` in the root directory to manually install it.
- If you are a Mac user, you may follow this [blog post](https://dataschool.com/learn-sql/how-to-start-a-postgresql-server-on-mac-os-x/) to get PostgreSQL installed.

## How to Contribute

contact me via
- [email](mailto:jiawenlincontact@gmail.com?Subject=Hi!)
