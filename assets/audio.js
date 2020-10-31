// JavaScript Document

// Home
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

// Kota
$(document).ready(function(){
	var motor = $("#audio-motor")[0];
	$("#motor").mouseover(function() {
	  motor.play();
	});
//	$("#motor").mouseout(function() {
//	  motor.load();
//	});

	var burung = $("#audio-burung")[0];
	$("#burung").mouseover(function() {
	  burung.play();
	});
//	$("#burung").mouseout(function() {
//	  burung.load();
//	});

	var music = $("#audio-music")[0];
	$("#music").mouseover(function() {
	  music.play();
	});
//	$("#music").mouseout(function() {
//	  music.load();
//	});

	var dagang = $("#audio-dagang")[0];
	$("#dagang").mouseover(function() {
	  dagang.play();
	});
//	$("#dagang").mouseout(function() {
//	  dagang.load();
//	});

	var adzan = $("#audio-adzan")[0];
	$("#adzan").mouseover(function() {
		adzan.play();
	});
//	$("#adzan").mouseout(function() {
//		adzan.load();
//	});

	var machine = $("#audio-machine")[0];
	$("#machine").mouseover(function() {
		machine.play();
	});
//	$("#machine").mouseout(function() {
//		machine.load();
//	});

	var toa = $("#audio-toa")[0];
	$("#toa").mouseover(function() {
		toa.play();
	});
//	$("#toa").mouseout(function() {
//		toa.load();
//	});

	var mobil = $("#audio-mobil")[0];
	$("#mobil").mouseover(function() {
		mobil.play();
	});
//	$("#mobil").mouseout(function() {
//		mobil.load();
//	});

	var kereta = $("#audio-kereta")[0];
	$("#kereta").mouseover(function() {
		kereta.play();
	});
//	$("#kereta").mouseout(function() {
//		kereta.load();
//	});

	var murmur = $("#audio-murmur")[0];
	$("#murmur").mouseover(function() {
		murmur.play();
	});
//	$("#murmur").mouseout(function() {
//		murmur.load();
//	});

	var serangga = $("#audio-serangga")[0];
	$("#serangga").mouseover(function() {
		serangga.play();
	});
//	$("#serangga").mouseout(function() {
//		serangga.load();
//	});

	var sirens = $("#audio-sirens")[0];
	$("#sirens").mouseover(function() {
		sirens.play();
	});
//	$("#sirens").mouseout(function() {
//		sirens.load();
//	});
});
