import express = require('express');
import { router } from "./router";
// Create a new express application instance
const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// load router
for (const route of router) {
    app.use(route.getRouter());
}


app.listen(3000, ()=> {
  console.log('Example app listening on port 3000!');
});
