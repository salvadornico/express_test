const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

mongoose.connect("mongodb://localhost/nodekb")
const db = mongoose.connection
db.once("open", () => {
	console.log("Connected to MongoDB")
})
db.on("error", err => {
	alert(err)
})

const app = express()

const Article = require("./models/article")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
	Article.find({}, (err, articles) => {
		if (err) {
			console.log(err)
		}
		res.render("index", {
			title: "Articles",
			articles: articles
		})
	})
})

app.get("/articles/add", (req, res) => {
	res.render("add_article", {
		title: "Add Article"
	})
})

app.post("/articles/add", (req, res) => {
	let article = new Article()
	article.title = req.body.title
	article.author = req.body.author
	article.body = req.body.body

	article.save(err => {
		if (err) {
			console.log(err)
		} else {
			res.redirect("/")
		}
	})
})

app.listen(3000, () => {
	console.log("Server started on port 3000")
})
