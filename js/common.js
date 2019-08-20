const form = document.querySelector('.payment-form');




const trimFunc = () => {
  const cardInsert = document.querySelector('#card-input');
  const nameInp = document.querySelector('#name-input');
  const surnInp = document.querySelector('#surname-input')

  if (cardInsert, nameInp, surnInp) {
    const value = cardInsert.value.trim();
    const nameVal = nameInp.value.trim();
    const surnVal = surnInp.value.trim()

    if (value.length != 16 || value === '') {
      cardInsert.style.border = '1px solid red';
    } else {
        cardInsert.style.border = '1px solid green';
    }

    if (value === '') {
        cardInsert.style.border = '1px solid red';
        document.querySelector('.descr').style.display = 'block'
        document.querySelector('.invalid').style.display = 'none'
    }

    if (nameVal === '') {
        nameInp.style.border = '1px solid red'
    } else {
        nameInp.style.border = '1px solid green';
    }

    if (surnVal === '') {
        surnInp.style.border = '1px solid red' }
        else {
            surnInp.style.border = '1px solid green';
          }
    }
 }



form.addEventListener('submit', (e) => {
  e.preventDefault();
  trimFunc();
});