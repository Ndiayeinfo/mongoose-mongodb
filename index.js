import mongoose from "mongoose";
import express from "express";
import Blog from './model/Blog.js';

const app = express()

mongoose.connect("mongodb://localhost:27017/myFirstDatabase")

app.listen(3001, () => {
    console.log("Server is running")
});

// Create a new blog post object
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    author: "You NDIAYE",
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  // Insert the article in our MongoDB database
  await article.save();

  // Find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);

// Create a new blog post and insert into database
const article2 = await Blog.create({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    author: "You NDIAYE",
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  
  console.log(article2);

article.title = "The Most Awesomest Post!!";
await article.save();
console.log(article);

const article3 = await Blog.findById("672a7e776081d14fc9b41932").exec();
console.log(article3);

const article4 = await Blog.findById("672a7e776081d14fc9b41932", "title slug content").exec();
console.log(article4);

const blog = await Blog.deleteOne({ title: "Awesome Post!" })
console.log(blog)