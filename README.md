# notepad-node

A basic backend only notepad application.

- TechStack: nodejs + express + mongodb[mongoose]
- Testing framework : Jest
- Documentation: Swagger `http://localhost:9000/api-docs/`
- [Postman Collection](https://github.com/rathishsekar/notepad-node/tree/main/resources/)

## Start App in local

```
docker compose up
```

OR

Prerequisites: setup mongoDB in local [help](https://zellwk.com/blog/local-mongodb/)

```js
// Install dependencies
npm i

// Start server [Default port : 9000]
node src/server.js
```

## Test

```
npm run test
```
