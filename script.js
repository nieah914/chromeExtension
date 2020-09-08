/*
//컨텐트 페이지의 모든 텍스트를 가져온다. 그 결과를 my body text 변수에 담는다.
var bodyText = 
document.querySelector('body').innerText;
alert(bodyText);

*/
//크롬 확장의 기능중에 tabs과 관련된 기능 중에 tab에 content페이지를 대상으로 아래와 같은 코드를 실행한다.
//var bodyText = document.querySelector("body").innerText;alert(bodyText);
//var input1 = document.getElementById("query") input1.onkeydown = function(event) {alert( "key: " + event.keyCode ); }
window.onload = function(){
	chrome.tabs.executeScript({
		code:'var bodyText = document.getElementsByClassName("se-canvas-bottom").innerText;alert(bodyText);'
	});
}
