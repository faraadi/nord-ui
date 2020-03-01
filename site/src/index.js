import './index.css';

const codeSample = document.querySelector("code");

codeSample.addEventListener("click", function() {
	window.navigator.clipboard.writeText(codeSample.innerText).then(function(a,b,c) {console.log(a,b,c)})
});