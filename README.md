# Database persistence with Mongo

- Start by creating a new node.js application called `mongo_practice`
- Create an array of products (see properties below)
- Add endpoints for the following:
  - `GET` all products (no id)
  - `GET` a product by ID
  - `POST` to add a product with the following properties:
  ```
      {
        productID: Number,
        productName: String,
        price: Number,
        quantity: Number,
    }
  ```
- `POST` should display a message and not actually manipulate the array
- `GET`requests should return all products or the selected one by ID

## Postman
Create test cases for each of the 3 endpoints
