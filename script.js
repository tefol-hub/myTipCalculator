const billTotalInput = document.getElementById("billInput");
const userTipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("peopleNum");
const perPersonTotal = document.getElementById("ppTotalCal")

let People = Number(numberOfPeople.innerText);

const numberKeys = (txt, evt) => {
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode == 46) {
    if (txt.value.indexOf('.') === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
  return true;
  }
}

const calBill = () => {
  const input1 = Number(billTotalInput.value);
  const input2 = Number(userTipInput.value) / 100;
  const total = Number((input2 * input1) / People);
  perPersonTotal.innerText = `$${total.toFixed(2)}`;
}

const increment = () => {
  People++;
  numberOfPeople.innerText = People;
  return calBill();
}

const decrement = () => {
  if (People > 1) {
    People--;
    numberOfPeople.innerText = People;
    return calBill();
  } else {
    return;
  }
}

