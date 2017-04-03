var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("index");
});

app.get("/portfolio", function(req,res){
    res.render("portfolio");
});

app.get("/portfolio/:title", function(req,res){
    res.render("portfolio");
});

app.get("/blog", function(req, res){
		blogs = getblogs();
    res.render("blogList", {blogs: blogs});
});

app.get("/blog/:title", function(req, res){
		var title = req.params.title;
		var blogContent = getBlogContent(title);
		if (blogContent == "Post Not Found"){
			res.redirect("/*");
		}
		else{
			res.render("blogPost", {blog: blogContent});
		}
});

app.get("/*", function(req, res){
		res.send("Page Not Found");
});


var port = 10001;
app.listen(port, process.env.IP, function() {
    console.log('server listening on port ' + port);
});

function getBlogContent(title){
	var blogs = getblogs();
	for(var i =0; i<blogs.length; i++){
		if (blogs[i].title == title){
			return blogs[i];
		};
	};
	return "Post Not Found";
}

function getblogs(){
	var blogs = [
	{
		id: 1,
		title: "My First Blog",
		content: "This is my first blog...",
		date: "November 2nd 2016"
	},
	{
		id: 2,
		title: "My Second Blog",
		content: "This is my second blog...",
		date: "November 4th 2016"
	},
	]

	return blogs;
}
