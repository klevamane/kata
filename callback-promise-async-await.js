// create a get function to get all posts
// create a create function to create a new post

let posts = [];

function getPosts() {
  return posts;
}

function createPost(post, callback) {
  posts.push(post);
  callback();
}

createPost({ title: "title", description: "description" }, getPosts);
console.log(getPosts());

const createPostPromise = (post) => {
  return new Promise((resolve, reject) => {
    posts.push(post);
    const error = false;

    if (error) {
      reject("Error occurred");
    }
    resolve("Post successfully created");
  });
};

createPostPromise({ title: "newest", description: "bestes" })
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
