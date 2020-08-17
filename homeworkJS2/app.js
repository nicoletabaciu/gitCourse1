const nameInput1 = document.querySelector('#name-input1');

nameInput1.addEventListener('input', function (event) {
  nameInput1.value, event.target === nameInput1
})

const nameInput2 = document.querySelector('#name-input2');

nameInput2.addEventListener('input', function (event) {
  nameInput2.value, event.target === nameInput2
})

const button = document.querySelector('#Submit')


function submitButton() {
  console.log('click')
  console.log('nameInput1', nameInput1.value)
  console.log('nameInput2', nameInput2.value)

  if (nameInput1.value && nameInput2.value) {
    console.log('este valida')
    showConfirmation()
  } else if (nameInput1.value) {
    nameInput2.classList.add('invalid')
  }
  else {
    nameInput1.classList.add('invalid')
  }

}
button.addEventListener('click', submitButton)

function showConfirmation() {
  var x = document.getElementById("showC")
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}