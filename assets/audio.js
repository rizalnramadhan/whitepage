// JavaScript Document

// Home
$(document).ready(function(){
	$("#hide").click(function() {
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

// Listen
$(document).ready(function(){
	var hutan = $("#audio-hutan")[0];
	$("#hutan").mouseover(function() {
	  hutan.play();
	});
	$("#hutan").mouseout(function() {
	  hutan.load();
	});

	var pemukiman = $("#audio-pemukiman")[0];
	$("#pemukiman").mouseover(function() {
	  pemukiman.play();
	});
	$("#pemukiman").mouseout(function() {
	  pemukiman.load();
	});

	var pasar = $("#audio-pasar")[0];
	$("#pasar").mouseover(function() {
	  pasar.play();
	});
	$("#pasar").mouseout(function() {
	  pasar.load();
	});

	var work = $("#audio-work")[0];
	$("#work").mouseover(function() {
	  work.play();
	});
	$("#work").mouseout(function() {
	  work.load();
	});

	var transportasi = $("#audio-transportasi")[0];
	$("#transportasi").mouseover(function() {
	  transportasi.play();
	});
	$("#transportasi").mouseout(function() {
	  transportasi.load();
	});
});

// About
$(document).ready(function(){
	var miki = $("#audio-miki")[0];
	$("#miki").mouseover(function() {
		miki.play();
	});
	$("#miki").mouseout(function() {
		miki.load();
	});

	var rizal = $("#audio-rizal")[0];
	$("#rizal").mouseover(function() {
		rizal.play();
	});
	$("#rizal").mouseout(function() {
		rizal.load();
	});
});

// Hutan
$(document).ready(function(){
	var baksil = $("#audio-baksil")[0];
	$("#baksil").mouseover(function() {
	  baksil.play();
	});

	var okok = $("#audio-okok")[0];
	$("#okok").mouseover(function() {
	  okok.play();
	});

	var lampung = $("#audio-lampung")[0];
	$("#lampung").mouseover(function() {
	  lampung.play();
	});

	var serangga = $("#audio-serangga")[0];
	$("#serangga").mouseover(function() {
	  serangga.play();
	});

	var air = $("#audio-air")[0];
	$("#air").mouseover(function() {
		air.play();
	});

	var pagi = $("#audio-pagi")[0];
	$("#pagi").mouseover(function() {
		pagi.play();
	});

	var jangkrik = $("#audio-jangkrik")[0];
	$("#jangkrik").mouseover(function() {
		jangkrik.play();
	});

	var air2 = $("#audio-air2")[0];
	$("#air2").mouseover(function() {
		air2.play();
	});

	var serang2 = $("#audio-serang2")[0];
	$("#serang2").mouseover(function() {
		serang2.play();
	});
});

// Pemukiman
$(document).ready(function(){
	var musik = $("#audio-musik")[0];
	$("#musik").mouseover(function() {
	  musik.play();
	});

	var murmur = $("#audio-murmur")[0];
	$("#murmur").mouseover(function() {
	  murmur.play();
	});

	var adzan = $("#audio-adzan")[0];
	$("#adzan").mouseover(function() {
	  adzan.play();
	});

	var balon = $("#audio-balon")[0];
	$("#balon").mouseover(function() {
	  balon.play();
	});

	var hujan = $("#audio-hujan")[0];
	$("#hujan").mouseover(function() {
		hujan.play();
	});

	var sariroti = $("#audio-sariroti")[0];
	$("#sariroti").mouseover(function() {
		sariroti.play();
	});

	var baso = $("#audio-baso")[0];
	$("#baso").mouseover(function() {
		baso.play();
	});

	var main = $("#audio-main")[0];
	$("#main").mouseover(function() {
		main.play();
	});

	var siomay = $("#audio-siomay")[0];
	$("#siomay").mouseover(function() {
		siomay.play();
	});
});

// Pasar
$(document).ready(function(){
	var mendoan = $("#audio-mendoan")[0];
	$("#mendoan").mouseover(function() {
	  mendoan.play();
	});

	var ayam = $("#audio-ayam")[0];
	$("#ayam").mouseover(function() {
	  ayam.play();
	});

	var goreng = $("#audio-goreng")[0];
	$("#goreng").mouseover(function() {
	  goreng.play();
	});

	var parut = $("#audio-parut")[0];
	$("#parut").mouseover(function() {
	  parut.play();
	});

	var kasir = $("#audio-kasir")[0];
	$("#kasir").mouseover(function() {
		kasir.play();
	});

	var barang = $("#audio-barang")[0];
	$("#barang").mouseover(function() {
		barang.play();
	});

	var kresek = $("#audio-kresek")[0];
	$("#kresek").mouseover(function() {
		kresek.play();
	});

	var jagal = $("#audio-jagal")[0];
	$("#jagal").mouseover(function() {
		jagal.play();
	});

	var mba = $("#audio-mba")[0];
	$("#mba").mouseover(function() {
		mba.play();
	});
});

// Work
$(document).ready(function(){
	var HITUNG = $("#audio-HITUNG")[0];
	$("#HITUNG").mouseover(function() {
	  HITUNG.play();
	});

	var BANGUN = $("#audio-BANGUN")[0];
	$("#BANGUN").mouseover(function() {
	  BANGUN.play();
	});

	var OTHERS = $("#audio-OTHERS")[0];
	$("#OTHERS").mouseover(function() {
	  OTHERS.play();
	});

	var ATM = $("#audio-ATM")[0];
	$("#ATM").mouseover(function() {
	  ATM.play();
	});

	var PRINT = $("#audio-PRINT")[0];
	$("#PRINT").mouseover(function() {
		PRINT.play();
	});

	var DEMO = $("#audio-DEMO")[0];
	$("#DEMO").mouseover(function() {
		DEMO.play();
	});

	var MOUSE = $("#audio-MOUSE")[0];
	$("#MOUSE").mouseover(function() {
		MOUSE.play();
	});

	var KEY = $("#audio-KEY")[0];
	$("#KEY").mouseover(function() {
		KEY.play();
	});

	var BANGUN2 = $("#audio-BANGUN2")[0];
	$("#BANGUN2").mouseover(function() {
		BANGUN2.play();
	});
});

// Transportasi
$(document).ready(function(){
	var PIRIWIT = $("#audio-PIRIWIT")[0];
	$("#PIRIWIT").mouseover(function() {
	  PIRIWIT.play();
	});

	var PESAWAT = $("#audio-PESAWAT")[0];
	$("#PESAWAT").mouseover(function() {
	  PESAWAT.play();
	});

	var TOA = $("#audio-TOA")[0];
	$("#TOA").mouseover(function() {
	  TOA.play();
	});

	var KUDA = $("#audio-KUDA")[0];
	$("#KUDA").mouseover(function() {
	  KUDA.play();
	});

	var TERMINAL = $("#audio-TERMINAL")[0];
	$("#TERMINAL").mouseover(function() {
		TERMINAL.play();
	});

	var PENGAMEN = $("#audio-PENGAMEN")[0];
	$("#PENGAMEN").mouseover(function() {
		PENGAMEN.play();
	});

	var MOBIL = $("#audio-MOBIL")[0];
	$("#MOBIL").mouseover(function() {
		MOBIL.play();
	});

	var KERETA = $("#audio-KERETA")[0];
	$("#KERETA").mouseover(function() {
		KERETA.play();
	});

	var MOTOR = $("#audio-MOTOR")[0];
	$("#MOTOR").mouseover(function() {
		MOTOR.play();
	});
});
