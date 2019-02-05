# News Manager/Viewer

## Backend
The backend is implement in NodeJS using Koa framework. It runs on port `3001`. To start the backend:

```
$ cd server
$ npm run dev
```

## Database

The database runs in MongoDB. Make sure you have `mongod` service running. Use the following script to create and seed the database:

```
$ cd server
$ npm run seed
```
After running this commenda should have a MongoDB database called `fl-news`.


## Frontend
The frontend was created using `create-react-app`. to start the frontend run:

```
$ cd frontend
$ npm start
```