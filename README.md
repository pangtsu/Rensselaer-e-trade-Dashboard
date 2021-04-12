# Rensselaer-e-trade-Dashboard

## Overview

Tired of posting on Facebook, Craigslist, Reddit, Poshmark and all different websites -- just to sell/buy something? This is a web application made for students at RPI to sell/buy second-handed products effortlessly!

**Stack**: *A single-page webapp using React for the frontend (Webpack + Babel Build), Nodejs (Multer Middleware & Sequelize ORM) and PostgreSQL for the backend to perform basic CRUD operation.*

![Drag Racing](UI-pics/dashboard.png)

## Requirement

- node
- postgreSQL

## Installation

- Install dependencies using `npm install` in the project root, frontend, and server directories.

- cd into the server directory, and run

  ```
  psql -f items.sql
  ```

  to create and seed the Postgres database

- Run

  ```
  npm start
  ```

  in the project root directory and visit `localhost:8081` to view the live application.

## Backend API Endpoints

- **Get Items** : /api/item/:key
- **Create Item**: /api/item
- **Update/Delete Item**: /api/item/:id
- **Upload Single File**: /api/file/upload
- **List All Files**: /api/file/info
- **Fetch File in Base64**: /api/file/:id
- **Download File**: /api/file/download/:id

  i.e., `http://localhost:8080/api/item/AC` shall return

  ```
  {"status":"success","data":[{"itemname":"AC","price":200,"category":"Home Appliances","descriptions":"used portable AC, originally at $400","imageids":[1]}],"message":"Retrieved item"}
  ```

## Troubleshooting

- If there's a problem with the `concurrently` dependency, run this command `npm i concurrently --save-dev` in the root directory to manually install it.
- If you are a Mac user, you may follow this [blog post](https://dataschool.com/learn-sql/how-to-start-a-postgresql-server-on-mac-os-x/) to get PostgreSQL installed.

## Code of Conduct

When making a new feature or a bug fix, please make a new branch from Master or the branch you're trying to modify. On your command line, run

```
git checkout **(original branch name)**
git branch [new branch name]
git checkout [new branch name]
```

Branch names should be concise and self-explanatory. Please make your branch names lowercase and use hyphens (-) for spaces. You don't need to prepend your branch name with or include other details such as your name. For example, a feature branch for updating the about page UI might be called about-styles or about-page-ui.

When you have changes to your local code base in your new branch, commit push them with

```
git commit -m [Commit message]
git push
```

Commit messages should be concise and self-explanatory, just like branch names.

Once your have completed your feature or fixed you bug, please perform a Pull Request into master, even if you are an admin. Pull requests provide a more readable commit log, highlighting major features and changes. On the Github repository website, click new pull request and select "master" <- "your branch name". This requires an admin to approve your changes before they are live on the develop branch.

## How to Contribute

contact me via

- [email](mailto:jiawenlincontact@gmail.com?Subject=Hi!)

to get access to this repo or simply create a PR.
