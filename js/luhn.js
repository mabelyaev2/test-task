const cardInput = document.querySelector('#card-input');
const form = document.querySelector('.payment-form');





const luhnAlg = (cardNum) => {
	const numSplit = cardNum.split('');

	if (numSplit.length !== 16) {
		return false;
	}

	numSplit.reverse().forEach((el, i, arr) => {
		if (i % 2 !== 0) {
			if (el * 2 > 9) {
				arr[i] *= 2;
				arr[i] -= 9;	
			} else {
				arr[i] *= 2;
			}
		}
	});

	const sumOfNumbers = numSplit.reduce((prev, next) => {
		return +prev + +next;
	});

	return sumOfNumbers % 10 === 0 ? true : false;
}


form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if (luhnAlg(cardInput.value) === true) {
		cardInput.classList.toggle('highlight')
	} else {
		document.querySelector('.invalid').style.display = 'block'
		cardInput.style.border = '1px solid red'
	}
});
