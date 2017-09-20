const express = require("express")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")


app.get("/", (req, res) => {
	let articles = [
		{id: 1, title: "Article 1", author: "Me", body: "Hello World"},
		{id: 2, title: "Article 2", author: "Me Too", body: "Hello World Hello World"},
		{id: 3, title: "Article 3", author: "Me Three", body: "Hello World Hello World Hello World"},
	]
	res.render("index", {
		title: "Articles",
		articles: articles
	})
})

app.get("/articles/add", (req, res) => {
	res.render("add_article", {
		title: "Add Article"
	})
})


app.listen(3000, () => {
	console.log("Server started on port 3000")
})