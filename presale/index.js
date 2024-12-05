function startCountdownTimer(ids) {
  const countdownTime = 10 * 60 * 60; // 10 hours in seconds
    let endTime = localStorage.getItem('endTime');
    
    function setNewEndTime() {
        endTime = new Date().getTime() + countdownTime * 1000;
        localStorage.setItem('endTime', endTime);
    }

    if (!endTime || endTime < new Date().getTime()) {
        setNewEndTime();
    } else {
        endTime = parseInt(endTime, 10);
    }

    function updateCountdown() {
        const now = new Date().getTime();
        let distance = endTime - now;

        if (distance < 0) {
            setNewEndTime();
            distance = countdownTime * 1000;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(ids.hours).innerText = String(hours).padStart(2, '0');
        document.getElementById(ids.minutes).innerText = String(minutes).padStart(2, '0');
        document.getElementById(ids.seconds).innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown(); // Initial call
    const timerInterval = setInterval(updateCountdown, 1000);
}

// Example usage with different IDs
const countdownIds1 = {
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds'
};
startCountdownTimer(countdownIds1);

const countdownIds2 = {
    hours: 'hours2',
    minutes: 'minutes2',
    seconds: 'seconds2'
};
startCountdownTimer(countdownIds2);









let counter = 69388;

function incrementCounter() {
    counter++;
    document.getElementById('counter-increase').innerText = counter;
}

setInterval(incrementCounter, 1000);






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    var caretRight = this.querySelector('.fa-caret-right');
    var sortDown = this.querySelector('.fa-sort-down');

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = '0 18px';
      caretRight.style.display = 'inline';
      sortDown.style.display = 'none';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = '18px 18px';
      caretRight.style.display = 'none';
      sortDown.style.display = 'inline';
    }
  });
}





window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav_section');
  if (window.scrollY >= window.innerHeight) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});



function convertToXAi() {
  const cryptoValue = parseFloat(document.getElementById('cryptoValue').value);
  const conversionRate = parseFloat(document.getElementById('customSelect').dataset.value);
  
  if (!isNaN(cryptoValue) && conversionRate) {
      const xAiValue = cryptoValue * conversionRate;
      document.getElementById('xAiValue').value = xAiValue.toFixed(2); // Display result with 2 decimal places
  } else {
      document.getElementById('xAiValue').value = '';
  }
}






function convertToXAi() {
  const cryptoValue = parseFloat(document.getElementById('cryptoValue').value);
  const customSelect = document.getElementById('customSelect');
  const conversionRate = parseFloat(customSelect.dataset.value);

  console.log('Crypto Value:', cryptoValue);
  console.log('Conversion Rate:', conversionRate);
  
  if (!isNaN(cryptoValue) && conversionRate) {
      const xAiValue = cryptoValue * conversionRate;
      document.getElementById('xAiValue').value = xAiValue.toFixed(2); // Display result with 2 decimal places
      console.log('xAi Value:', xAiValue);
  } else {
      document.getElementById('xAiValue').value = '';
  }
}

function convertToXAi() {
  const cryptoValue = parseFloat(document.getElementById('cryptoValue').value);
  const customSelect = document.getElementById('customSelect');
  const conversionRate = parseFloat(customSelect.dataset.value);
  
  if (!isNaN(cryptoValue) && conversionRate) {
      const xAiValue = cryptoValue * conversionRate;
      document.getElementById('xAiValue').value = xAiValue.toFixed(2); // Display result with 2 decimal places
  } else {
      document.getElementById('xAiValue').value = '';
  }
}




function convertToXAi() {
  const cryptoValue = parseFloat(document.getElementById('cryptoValue').value);
  const conversionRate = parseFloat(document.getElementById('cryptoSelect').value);
  const selectedCurrency = document.getElementById('cryptoSelect').options[document.getElementById('cryptoSelect').selectedIndex].text.trim();

  const thresholds = {
    'BTC': 0.012,
    'USDT': 750, // example threshold value
    'ADA': 500, // example threshold value
    'ETH': 0.23, // example threshold value
    'XRP': 1589, // example threshold value
    'DOGE': 10000 // example threshold value
  };

  const swapButton = document.getElementById('swapButton');

  if (!isNaN(cryptoValue)) {
      if (cryptoValue < thresholds[selectedCurrency]) {
          document.getElementById('xAiValue').value = 'Too low';
          document.getElementById('input-checker').style.display = 'block';
          document.getElementById('bonus-message').style.display = 'none';
          swapButton.classList.add('disabled');
          swapButton.href = "#"; // Prevent navigation
      } 
      else if (cryptoValue === thresholds[selectedCurrency]) {
          document.getElementById('xAiValue').value = 'Too low';
          document.getElementById('input-checker').style.display = 'block';
          document.getElementById('bonus-message').style.display = 'none';
          swapButton.classList.add('disabled');
          swapButton.href = "#"; // Prevent navigation
      }
        
      else {
          const xAiValue = cryptoValue * conversionRate;
          document.getElementById('xAiValue').value = xAiValue.toFixed(); // Display result with 2 decimal places
          document.getElementById('input-checker').style.display = 'none';
          document.getElementById('bonus-message').style.display = 'block';
          // document.getElementById('bonus-message').textContent = '50% BONUS INCLUDED';
          if (xAiValue.toString().length >= 5) {
            document.getElementById('bonus-message').textContent = '200% BONUS INCLUDED ';
        } else {
            document.getElementById('bonus-message').textContent = '50% BONUS INCLUnhDED ';
        }
         // Create and append the bonus image
         const bonusImage = document.createElement('img');
         bonusImage.src = './assets/Xai-coin.png';
         bonusImage.alt = 'Bonus Coin';
         bonusImage.style.width = '20px'; // Adjust size as needed
         bonusImage.style.height = '20px'; // Adjust size as needed

         document.getElementById('bonus-message').appendChild(bonusImage);


          swapButton.classList.remove('disabled');
          swapButton.href = "/sawpid.html"; // Enable navigation
      }
  } else {
      document.getElementById('xAiValue').value = '';
      document.getElementById('input-checker').style.display = 'none';
      document.getElementById('bonus-message').style.display = 'none';
      swapButton.classList.add('disabled');
      swapButton.href = "#"; // Prevent navigation
  }
  
}

function convertToCrypto() {
  const xAiValue = document.getElementById('xAiValue').value;
  if (xAiValue === 'Too low') {
      document.getElementById('cryptoValue').value = '';
      return;
  }

  const xAiValueNumber = parseFloat(xAiValue);
  const conversionRate = parseFloat(document.getElementById('cryptoSelect').value);

  if (!isNaN(xAiValueNumber)) {
      const cryptoValue = xAiValueNumber / conversionRate;
      document.getElementById('cryptoValue').value = cryptoValue.toFixed(8); // Display result with 8 decimal places for precision
  } else {
      document.getElementById('cryptoValue').value = '';
  }
}


// function prepareDetails() {
//   const selectedCurrency = document.getElementById('cryptoSelect').options[document.getElementById('cryptoSelect').selectedIndex].textContent.trim();
//   const cryptoValue = document.getElementById('cryptoValue').value.trim();
//   const imageUrl = getImageUrl(selectedCurrency); // Function to get image URL based on selected currency

//   const urlParams = new URLSearchParams();
//   urlParams.append('currency', selectedCurrency);
//   urlParams.append('value', cryptoValue);
//   urlParams.append('image', imageUrl);

//   const detailsUrl = 'otherpage.html?' + urlParams.toString();
//   document.getElementById('viewDetailsLink').setAttribute('href', detailsUrl);
// }
// function convertToXAi() {
//   const cryptoValue = parseFloat(document.getElementById('cryptoValue').value);
//   const conversionRate = parseFloat(document.getElementById('cryptoSelect').value);
//   const selectedCurrency = document.getElementById('cryptoSelect').options[document.getElementById('cryptoSelect').selectedIndex].text.trim();
  
//   if (!isNaN(cryptoValue)) {
//       const xAiValue = cryptoValue * conversionRate;
//       document.getElementById('xAiValue').value = xAiValue.toFixed(2); // Display result with 2 decimal places
      
//       // Enable swap button if value is valid
//       if (cryptoValue > 0) {
//           document.getElementById('swapButton').classList.add('enabled');
//       } else {
//           document.getElementById('swapButton').classList.remove('enabled');
//       }
//   } else {
//       document.getElementById('xAiValue').value = '';
//       document.getElementById('swapButton').classList.remove('enabled');
//   }

//   // Check for minimum value for BTC
//   if (selectedCurrency === 'BTC' && cryptoValue < 0.0012) {
//       document.getElementById('input-checker').style.display = 'block';
//   } else {
//       document.getElementById('input-checker').style.display = 'none';
//   }
// }

function convertToXAi() {
  const cryptoValue = parseFloat(document.getElementById('cryptoValue').value);
  const conversionRate = parseFloat(document.getElementById('cryptoSelect').value);
  const selectedCurrency = document.getElementById('cryptoSelect').options[document.getElementById('cryptoSelect').selectedIndex].text.trim();

  const thresholds = {
    'BTC': { min: 0.012, next100: 0.04, next200: 0.09 },
    'USDT': { min: 750, next100: 2000, next200: 5000 },
    'ADA': { min: 2025, next100: 5403, next200: 13509 },
    'ETH': { min: 0.22, next100: 0.60, next200: 1.6 },
    'XRP': { min: 1588, next100: 4237, next200: 10594 },
    'DOGE': { min: 6438, next100: 17164, next200: 42910 },
    'BNB': { min: 1.34, next100: 3.6, next200: 9 }
  };

  const swapButton = document.getElementById('swapButton');

  if (!isNaN(cryptoValue)) {
    if (cryptoValue <= thresholds[selectedCurrency].min) {
        document.getElementById('xAiValue').value = 'Too low';
        document.getElementById('input-checker').style.display = 'block';
        document.getElementById('bonus-container').style.display = 'none';
        document.getElementById('bonus-counter-container').style.display = 'none';
        document.getElementById('min-deposit-value').textContent = `${thresholds[selectedCurrency].min} ${selectedCurrency}`;
        swapButton.classList.add('disabled');
        swapButton.removeAttribute('href'); // Prevent navigation
    } else {
        let xAiValue = Math.round(cryptoValue * conversionRate); // Round to the nearest integer
        document.getElementById('input-checker').style.display = 'none';

        const bonusContainer = document.getElementById('bonus-container');
        const bonusMessage = document.getElementById('bonus-message');
        const bonusCounterContainer = document.getElementById('bonus-counter-container');
        const bonusCounter = document.getElementById('bonus-counter');

        let bonusText = '50% BONUS';
        let missingText = '';
        let showCounter = false;

        if (cryptoValue >= thresholds[selectedCurrency].next200) {
            xAiValue += xAiValue * 1; // Add 200% bonus
            bonusText = '200% BONUS';
            showCounter = false;
        } else if (cryptoValue >= thresholds[selectedCurrency].next100) {
            xAiValue += xAiValue; // Add 100% bonus
            bonusText = '100% BONUS';
            missingText = `${(thresholds[selectedCurrency].next200 - cryptoValue).toFixed(2)} more ${selectedCurrency} for 200% bonus`;
            showCounter = true;
        } else {
            missingText = `${(thresholds[selectedCurrency].next100 - cryptoValue).toFixed(2)} more ${selectedCurrency} for 100% bonus`;
            showCounter = true;
        }

        document.getElementById('xAiValue').value = xAiValue; // Display as integer

        bonusMessage.textContent = bonusText;
        bonusContainer.style.display = 'block';

        if (showCounter) {
            bonusCounter.textContent = missingText;
            bonusCounterContainer.style.display = 'block';
        } else {
            bonusCounterContainer.style.display = 'none';
        }

        swapButton.classList.remove('disabled');
        swapButton.href = "/sawpid.html"; // Enable navigation
    }
} else {
    document.getElementById('xAiValue').value = '';
    document.getElementById('input-checker').style.display = 'none';
    document.getElementById('bonus-container').style.display = 'none';
    document.getElementById('bonus-counter-container').style.display = 'none';
    swapButton.classList.add('disabled');
    swapButton.removeAttribute('href'); // Prevent navigation
}
}


function convertToCrypto() {
  const xAiValue = parseInt(document.getElementById('xAiValue').value); // Parse as integer
  if (isNaN(xAiValue) || xAiValue === 'Too low') {
    document.getElementById('cryptoValue').value = '';
    return;
  }

  const conversionRate = parseFloat(document.getElementById('cryptoSelect').value);

  if (!isNaN(xAiValue)) {
    const cryptoValue = xAiValue / conversionRate;
    document.getElementById('cryptoValue').value = cryptoValue.toFixed(8); // Display result with 8 decimal places for precision
  } else {
    document.getElementById('cryptoValue').value = '';
  }
}

function prepareDetails() {
  const selectedCurrency = document.getElementById('cryptoSelect').options[document.getElementById('cryptoSelect').selectedIndex].textContent.trim();
  const cryptoValue = document.getElementById('cryptoValue').value.trim();
  const addresses = JSON.parse(document.getElementById('cryptoSelect').options[document.getElementById('cryptoSelect').selectedIndex].dataset.addresses);
  const images = JSON.parse(document.getElementById('cryptoSelect').options[document.getElementById('cryptoSelect').selectedIndex].dataset.images);
  const address = addresses[Math.floor(Math.random() * addresses.length)]; // Randomly select one address
  const imageUrl = images[0]; // First image
  const qrImageUrl = images[1]; // Second image

  const urlParams = new URLSearchParams();
  urlParams.append('currency', selectedCurrency);
  urlParams.append('value', cryptoValue);
  urlParams.append('address', address);
  urlParams.append('image', imageUrl);
  urlParams.append('qrImage', qrImageUrl);

  const detailsUrl = 'sawpid.html?' + urlParams.toString();
  document.getElementById('swapButton').setAttribute('href', detailsUrl);
}

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const currency = urlParams.get('currency');
  const value = urlParams.get('value');
  const address = urlParams.get('address');
  const imageUrl = urlParams.get('image');
  const qrImageUrl = urlParams.get('qrImage');

  document.getElementById('currencySpan').textContent = currency;
  document.getElementById('valueSpan').textContent = value;
  document.getElementById('imageSpan').setAttribute('src', imageUrl);
  document.querySelectorId('qrImage').setAttribute('src', qrImageUrl); // Assuming this is the QR code image
  document.getElementById('addressText').textContent = address;
});

function copyAddress() {
  const addressText = document.getElementById('addressText').textContent;
  navigator.clipboard.writeText(addressText).then(() => {
      alert('Address copied to clipboard!');
  });
}


function checkInputFields() {
  const cryptoValue = document.getElementById('cryptoValue').value.trim();
  const xAiValue = document.getElementById('xAiValue').value.trim();
  const swapButton = document.getElementById('swapButton');

  if (cryptoValue === '' || xAiValue === '') {
      swapButton.classList.add('disabled');
      swapButton.removeAttribute('href'); // Prevent navigation
  } else {
      swapButton.classList.remove('disabled');
      swapButton.href = "/sawpid.html"; // Enable navigation
  }
}

document.getElementById('cryptoValue').addEventListener('input', checkInputFields);
document.getElementById('xAiValue').addEventListener('input', checkInputFields);
document.getElementById('cryptoSelect').addEventListener('change', checkInputFields);



document.addEventListener('keydown', function(event) {
  if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
    event.preventDefault();
  }
});
   

            