const cardInput = document.querySelector('.submit-inp');
const cardPrv = document.querySelector('.card-prove');





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


cardPrv.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if (luhnAlg(cardInput.value) === true) {
		e.target.classList.toggle('highlight')
	} else {
		alert('Wrong card number')
	}
});
