const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const express = require("express");

const app = express();
require("dotenv").config();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
	console.log(`Express server is listening on port 3000!`);
});
