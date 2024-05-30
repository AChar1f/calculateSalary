function reveal() {
    let x = document.querySelector('#salaryInfo');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function calcsal() {
    let SalaryWindow = document.getElementById('SalaryWindow');
    let hourlyRate = document.getElementById('hourlyRate').value;
    let numberHours = document.getElementById('numberHours').value;
    let employedYes = document.getElementById('yes').checked;
    let employedNo = document.getElementById('no').checked;

    // if (employedNo) {
    //     document.getElementById('hourlyRate').classList.add('hidden');
    //     document.getElementById('numberHours').classList.add('hidden');
    //     document.getElementById('Out').classList.add('hidden');
    // } else {
    //     document.getElementById('hourlyRate').classList.remove('hidden');
    //     document.getElementById('numberHours').classList.remove('hidden');
    //     document.getElementById('Out').classList.remove('hidden');

        let ans = eval(+hourlyRate * +numberHours);
        SalaryWindow.value = `Hi. Your salary is R${ans}`;
    }

