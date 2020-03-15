const exampleOneBtn = document.querySelector("#modal-toggler");
const exampleOneModal = document.querySelector("#modal-example");

exampleOneBtn.onclick = function(e) {
	exampleOneModal.classList.add("open");
}
exampleOneModal.onclick = function(e) {
	exampleOneModal.classList.remove("open");
}

const exampleTwoBtn = document.querySelector("#modal-toggler2");
const exampleTwoModal = document.querySelector("#modal-example2");

exampleTwoBtn.onclick = function() {
	exampleTwoModal.classList.add("open");
}

exampleTwoModal.onclick = function(e) {
	if(e.target.isEqualNode(exampleTwoModal)) exampleTwoModal.classList.remove("open");
}