// JavaScript Document
$(document).ready(function(){
	$("#hide").click(function(){
	  $("#hide").hide();
	});

	var welcome = $("#audio-welcome")[0];
	$("#welcome").mouseover(function() {
	  welcome.play();
	});
	$("#welcome").mouseout(function() {
	  welcome.load();
	});

	var narration = $("#audio-narration")[0];
	$("#narration").mouseover(function() {
	  narration.play();
	});
	$("#narration").mouseout(function() {
	  narration.load();
	});

	var listen = $("#audio-listen")[0];
	$("#listen").mouseover(function() {
	  listen.play();
	});
	$("#listen").mouseout(function() {
	  listen.load();
	});

	var ask = $("#audio-ask")[0];
	$("#ask").mouseover(function() {
	  ask.play();
	});
	$("#ask").mouseout(function() {
	  ask.load();
	});

	var about = $("#audio-about")[0];
	$("#about").mouseover(function() {
	  about.play();
	});
	$("#about").mouseout(function() {
	  about.load();
	});
});
