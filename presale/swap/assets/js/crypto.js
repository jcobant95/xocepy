/* 
Crypto.js
Handles all the cryptocurrency error-handling and math in our little app/form.
*/

// Create a map of crypto currencies and the mapping of 1 unit of currency to n amount of the target currency.
let convert_to = "USDT";
// Edit the mapping of the currencies in the php file.
let start_crypto = new Array();
var mvalue;

// This function will run once and only once on page-load (i.e. per refresh)
document.addEventListener("DOMContentLoaded", function(){
	$.ajax({
		url: "./price.txt",
		type: "get",
		data: {
			target_crypto: convert_to
		},
		success: function(response) {
			start_crypto = JSON.parse(response);
		}
	});
});

//convert M/B

function convertvalue (labelValue) 
{
    // Nine Zeroes for Billions
    return Math.round(Math.abs(Number(labelValue)))
}

// Function that updates the result text-box with the value.
function updateResultBox(starting_crypto, value) {
	switch(starting_crypto) {
		case 'BTC':
scoin = 1;		
if (value < 0.0077) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to xAI with bonus you need to deposit <b> 0.011 BTC or higher </b></font>";
		disableswap();
	} else if (value < 0.023) {
			mvalue = 0.023 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BTC missing for 100% bonus";
			enableswap();				
	} else if (value < 0.077) {
		    mvalue = 0.077 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED"; 
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BTC missing for 200% bonus";
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[0] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
	depositvalue = value;
			break;
			
			
		case 'BNB':
scoin = 2;			
if (value < 0.88) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to xAI with bonus you need to deposit <b> 1 BNB or higher </b></font>";
		disableswap();
	} else if (value < 2.64) {
			mvalue = 2.64 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BNB missing for 100% bonus";
			enableswap();				
	} else if (value < 8.81) {
			mvalue = 8.81 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " BNB missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[1] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			

		case 'USDT':
scoin = 3;			
if (value < 499) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to xAI with bonus you need to deposit <b> 500 USDT - ERC20 or higher </b></font>";
		disableswap();
	} else if (value < 800) {
			mvalue = 800 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " USDT - ERC20 missing for 100% bonus";
			enableswap();				
	} else if (value < 1600) {
			mvalue = 1600 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " USDT - ERC20 missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[2] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;


			
		case 'XRP':
scoin = 4;			
if (value < 1000) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to xAI with bonus you need to deposit <b> 1000 XRP or higher </b></font>";
		disableswap();
	} else if (value < 7000) {
			mvalue = 7000 - value;
			mvalue = mvalue.toFixed(0);		
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " XRP missing for 100% bonus";
			enableswap();				
	} else if (value < 20000) {
			mvalue = 20000 - value;
			mvalue = mvalue.toFixed(0);	
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " XRP missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[3] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		case 'ETH':
scoin = 5;			
if (value < 0.16) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to xAI with bonus you need to deposit <b> 0.2 ETH or higher </b></font>";
		disableswap();
	} else if (value < 0.48) {
			mvalue = 0.48 - value;
			mvalue = mvalue.toFixed(2);			
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ETH missing for 100% bonus";
			enableswap();				
	} else if (value < 1.59) {
			mvalue = 1.59 - value;
			mvalue = mvalue.toFixed(2);			
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ETH missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[4] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/shib.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
			
		case 'ADA':
scoin = 6;			
if (value < 1000) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to xAI with bonus you need to deposit <b> 1000 ADA or higher </b></font>";
		disableswap();
	} else if (value < 3213) {
			mvalue = 3213 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[5] * 1.5);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/ada.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ADA missing for 100% bonus";
			enableswap();				
	} else if (value < 10711) {
			mvalue = 10711 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[5] * 2);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/ada.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " ADA missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[5] * 3);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/ada.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;

		case 'DOGE':
scoin = 7;			
if (value < 3127) {
		$("#resultBox")[0].value = "TOO LOW";
		document.getElementById("bonus").innerHTML = "<font color=\"red\">To swap to xAI with bonus you need to deposit <b> 10000 DOGE or higher </b></font>";
		disableswap();
	} else if (value < 9381) {
			mvalue = 9381 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[6] * 0.06);
			document.getElementById("bonus").innerHTML = "50% BONUS <img style=\"width:16px;\" src=\"assets/img/doge.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " DOGE missing for 100% bonus";
			enableswap();				
	} else if (value < 31270) {
			mvalue = 31270 - value;
			mvalue = mvalue.toFixed(2);
			$("#resultBox")[0].value = convertvalue(value * start_crypto[6] * 0.04);
			document.getElementById("bonus").innerHTML = "100% BONUS <img style=\"width:16px;\" src=\"assets/img/doge.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "Notification: ONLY " + mvalue + " DOGE missing for 200% bonus";			
			enableswap();				
	} else {
			$("#resultBox")[0].value = convertvalue(value * start_crypto[6] * 0.03);
			document.getElementById("bonus").innerHTML = "200% BONUS <img style=\"width:16px;\" src=\"assets/img/doge.png\"> INCLUDED";
			document.getElementById("addbonus").innerHTML = "";
			enableswap();				
	}
		depositvalue = value;
			break;
			
		default:
			resetResultBox();
	}
}


function enableswap() {
	$('#sbut').css('background-color', '#1582B9');
	enabled = 1;		
}

function disableswap() {
	$('#sbut').css('background-color', '#999a9c');
	enabled = 0;	
}

//copyfunction

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
}


// Update the result box to be null.
function resetResultBox() {
	$("#resultBox")[0].value = null;
	document.getElementById("bonus").innerHTML = "";
	disableswap();
}

// Function that runs on change of value in text-box.
$(document).ready(function() {	
	$("#floatTextBox").on('keyup', function convertInput() {
		if($("#floatTextBox").val() && $("#floatTextBox").val() > 0.00000001 && $("#floatTextBox").val() < 1000000000001) {
			updateResultBox($(".please").text().trim(), $("#floatTextBox").val());
		} else {
			resetResultBox();
		}
	});
});

// Function that runs on change of the coin type.
var symbolNode = document.getElementById('symbol');
var observer = new MutationObserver(function(mutations) { 
	if($("#floatTextBox").val() && $("#floatTextBox").val() > 0.00000001 && $("#floatTextBox").val() < 1000000000001) {
		updateResultBox($(".please").text().trim(), $("#floatTextBox").val());
	} else {
		resetResultBox();
	}
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(symbolNode, config);