const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All the book names"));
bookRouter.get("/:bookname", (req, res) => {
	const { bookname } = req.params;
	res.send(`Book name: ${bookname}, written by Author`);
});

module.exports = bookRouter;
