var current = 1;
var total = 5;
var currentFile;

function init() {
	//
	// current_img 에 현재 이미지 카운트 표시
	// total_img 에 전체 이미지 카운트 표시
	document.getElementById("current_img").innerHTML = current;
	document.getElementById("total_img").innerHTML = total;
	document.getElementById("current_file").innerHTML = currentFile;
	printFileName();
}
	
function previous() {
	//
	current = current - 1;
	if (current < 1) {
		current = total;
	}
	changeImage();
	printFileName();
}

function next() {
	//
	current = current + 1;
	if(current > total) {
		current = 1;
	}
	changeImage();
	printFileName();
}

function changeImage() {
	var slide_image = document.getElementById("slide_image");
	slide_image.src = "./image/image_"+ current +".jpg";
	// 현재 이미지 번호 출력
	document.getElementById("current_img").innerHTML = current;
	
	var slide_imagee = document.getElementById("slide_imagee");
	slide_imagee.src = "./image/image_"+ current +".jpg";
	document.getElementById("current_img").innerHTML = current;
}

function printFileName() {
	var fullPath = slide_image.src;
	fullPath = "./image/image_"+ current +".jpg";
	var lastIndex = fullPath.lastIndexOf("/");
	currentFile = fullPath.substring(lastIndex +1);
	document.getElementById("current_file").innerHTML = currentFile;
	
	var full_Path = slide_imagee.src;
	full_Path = "./image/image_"+ current +".jpg";
	var lastIndex = full_Path.lastIndexOf("/");
	currentFile = full_Path.substring(lastIndex +1);
	document.getElementById("current_file").innerHTML = currentFile;
}