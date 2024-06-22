const movies = require("../movies.json");
const fs = require("fs");

let updated = [];

movies.forEach(m => updated.push({ title: m.title, cast: m.cast }));

const json = JSON.stringify({
	movies: updated,
});

fs.writeFile("movies.json", json, "utf8", () => console.log("done"));

console.log(movies);
