const attendees = [
	"AM girl",
	"ROB boy",
	"JIM boy",
	"AM girl",
	"DAVE boy",
	"JO girl",
]; //["JOHN boy", "CARLA girl"]; // ["BOB boy", "SAM girl", "DAVE boy", "JO girl"];
let boys = [];
let girls = [];
let bC = 0,
	gC = 0;

attendees.forEach(a => {
	const [name, gender] = a.split(" ");
	if (gender === "girl") {
		gC++;
		girls.push(name);
	}
	if (gender === "boy") {
		bC++;
		boys.push(name);
	}
});

console.log({ boys, girls });
boys = boys.sort().reverse();
girls = girls.sort().reverse();

console.log({ bC, gC, boys, girls });

if ((bC + gC) % 2 !== 0 || bC + gC <= 2 || bC % 2 != 0 || gC % 2 != 0)
	return [];

const mid = (bC + gC) / 2;

let result = ["HOST"];

console.log({ mid });

for (let i = 0; i < bC + gC; i++) {
	if (i === mid) result.push("HOSTESS");
	if (i < mid) {
		result.push(girls.pop());
		result.push(boys.pop());
	}
	if (i >= mid) {
		result.push(boys.pop());
		result.push(girls.pop());
	}
}

console.log(result);
