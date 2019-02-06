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

## Tasks Under Development
### Critical

- Move sensitive data and environmental variables data to and `.env` file. This includes JWT secret, API URL and other constants on both, frontend and backend

- Ability to upload an image to a third party service like Firebase or S3. Right now accepts only strings

- Create and delete new. Right now can only be updated

- The frontend is still not sending the Bearer token. The backend is expecting it, but I removed that requiremente on the `PUT /news` route, to be able to test.

- Unit and integration testing, at least for login, and to test functionality like featured items

### Nice to have
- Finish the Featured checkbox functionality
