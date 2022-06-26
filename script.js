const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("cat_image");
const fetchBtn = document.getElementById("fetch");

const obj = {
	name: "raed",
	age: 23,
	greeting: function () {
		return `hello ${this.name}`;
	},
};
obj.lastName = "bahri";
async function getFact() {
	const res = await fetch("https://cat-fact.herokuapp.com/facts/random");
	return await res.json();
}

fetchBtn.addEventListener("click", async () => {
	const data = await getFact();
	descriptionElement.innerText = data.text;
});
