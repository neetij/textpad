window.onload = function() {

	var pad1 = document.getElementById('pad1');
	var pad2 = document.getElementById('pad2');
	var pad3 = document.getElementById('pad3');

	//http://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity/3866442#3866442
	function setEndOfContenteditable(contentEditableElement) {
		var range, selection;
		if(document.createRange) {
			range = document.createRange();
			range.selectNodeContents(contentEditableElement);
			range.collapse(false);
			selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}

	function handleWindowActive() {
		document.getElementById('pads').style.visibility='visible';
		// setEndOfContenteditable(pad1);
	}
	function handleWindowFocus() {
		if(typeof localStorage.textpad_buffer1 != 'undefined') {
			pad1.innerHTML = localStorage.textpad_buffer1;
		} else {
			pad1.innerHTML = '';
		}
		if(typeof localStorage.textpad_buffer2 != 'undefined') {
			pad2.innerHTML = localStorage.textpad_buffer2;
		} else {
			pad2.innerHTML = '';
		}
		if(typeof localStorage.textpad_buffer3 != 'undefined') {
			pad3.innerHTML = localStorage.textpad_buffer3;
		} else {
			pad3.innerHTML = '';
		}
		// document.getElementById(pad1).focus();
	}

	function saveProgress() {
		localStorage.textpad_buffer1 = pad1.innerHTML;
		localStorage.textpad_buffer2 = pad2.innerHTML;
		localStorage.textpad_buffer3 = pad3.innerHTML;
	}

	window.addEventListener("focus", handleWindowActive);
	window.addEventListener("blur", saveProgress);
	document.onkeyup = function() {
		saveProgress();
	}
	handleWindowFocus();

};