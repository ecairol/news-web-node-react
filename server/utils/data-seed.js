const mongoose = require('mongoose');
const faker = require('faker');
const async = require('async');
const bcrypt = require('bcrypt');
const News = require('../src/news/model');
const User = require('../src/user/model');

mongoose.connect('mongodb://localhost:27017/fl-news', {useNewUrlParser: true});

mongoose.connection.once('connected', () => {
  const db = mongoose.connection;
  db.dropDatabase();
  seedUsers(db);
  seedNews(db);

  console.log("MongoDB seeded successfully. Please press Cmd+C.");
});


async function seedNews(db) {
  const news = await db.collection('news');
  let i;
  for (i = 0; i < 8; i++) {
    await news.insertOne({ "title": faker.company.catchPhrase(), "description": faker.lorem.paragraph(), "date": new Date() });
  }
}

async function seedUsers(db) {
  const users = await db.collection('users');
  const SALT_WORK_FACTOR = 10;

  const admin = new User({
    username: "admin",
    password: "secret"
  });

  await admin.save();
  
  //await users.insertOne({ "username": "admin", "password": "secret" });
}