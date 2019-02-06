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

const images = [
  "https://www.dike.lib.ia.us/images/sample-1.jpg/image",
  "http://www.usa-essays.com/blog/wp-content/uploads/2017/09/sample-5-1024x768.jpg",
  "https://3.img-dpreview.com/files/p/TS560x560~forums/54235388/8355b929725148edab693a6690cd3f87",
  "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/09/iPhone-7-Sample-Photo-13.jpg",
  "https://kbob.github.io/images/sample-4.jpg",
  "https://i.ytimg.com/vi/OTp8W251aiQ/maxresdefault.jpg",
  "https://picjumbo.com/wp-content/uploads/ink-in-water-abstract-free-photo-1570x1047.jpg",
  "http://sarahgilbertfox.com/wp-content/uploads/2017/04/long-time-coming-home-contemporary-abstract-expressionism-art-urban-city-sg-Fox-min.jpg",
]

async function seedNews(db) {
  const news = await db.collection('news');
  let i;
  for (i = 0; i < 8; i++) {
    const isFeatured = i < 3;
    await news.insertOne({ 
      "title": faker.company.catchPhrase(), 
      "description": faker.lorem.paragraph(), 
      "date": new Date(),
      "image": images[i],
      "featured": isFeatured,
    });
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