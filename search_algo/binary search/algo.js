var container = document.getElementById("array");
// array of blocks
function generatearray() {


var arr = [];


for (var i = 0; i < 20; i++) {

	var val = Number(Math.ceil(Math.random() * 100));
	arr.push(val);
}


arr.sort(function (a, b) {
	return a - b;
});

for (var i = 0; i < 20; i++) {
	var value = arr[i];

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
}

// Asynchronous BinarySearch function
async function BinarySearch(delay = 900) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

//Extracting the value of the element to be searched
var num = document.getElementById("fname").value;

//Colouring all the blocks violet
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#6b5b95";
}

output.innerText = "";

// BinarySearch Algorithm

var start = 0;
var end = 19;
var flag = 0;
while (start <= end) {
	
	blocks[start].style.backgroundColor="yellow";
	blocks[end].style.backgroundColor="yellow";
	var mid = Math.floor((start + end) / 2);
	blocks[mid].style.backgroundColor = "#FF4949";

	var value = Number(blocks[mid].childNodes[0].innerHTML);  // label is child of block!

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Current element is equal to the element
	//entered by the user
	if (value == num) {
	  output.innerText = "Element Found";
	  blocks[mid].style.backgroundColor = "#13CE66";
	  flag = 1;
	  break;
	}

	blocks[start].style.backgroundColor="6b5b95";
	blocks[end].style.backgroundColor="6b5b95";
	if (value > num) {
	   end = mid - 1;
	   blocks[mid].style.backgroundColor = "#6b5b95";
	} else {
	   start = mid + 1;
	   blocks[mid].style.backgroundColor = "#6b5b95";
	}
}
if (flag === 0) {
	output.innerText = "Element Not Found";
}
}
generatearray();