"use strict";

const app = require("./app");
// const { PORT } = require("./config");

// app.listen(PORT, function () {
//   console.log(`Started on http://localhost:5000`);
// });

app.listen(process.env.PORT);

