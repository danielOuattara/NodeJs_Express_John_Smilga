const express = require("express");
const app = express();
const { products } = require("./data");

// first route launched
app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

// products page
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    // get all products whithout description
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// single product page
app.get("/api/products/:productID", (req, res) => {
  const singleProduct = products.find((product) => {
    return product.id === Number(req.params.productID);
  });
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

// single review page for a single product item
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

// query
app.get("/api/v1/search", (req, res) => {
  console.log(req.query);
  const reqQuery = req.query;
  res.json({ response: reqQuery });
});

// query again
app.get("/api/v1/finder", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length === 0) {
    // return res.status(200).send('no products matched your search');
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
