const input = document.getElementById('validation-input');

input.addEventListener('blur', function () {
  const expectedLength = this.getAttribute('data-length');
  const inputValue = this.value.length;

  if (inputValue === +expectedLength) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
});