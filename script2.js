function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  function vacationInfo(name, email, numberP, sDate,textTitle) {
   
    return {
        name: name,
        email: email,
        numberP: numberP,
        sDate: sDate,
        textTitle:textTitle
    };
}

// create vacation
function bookVacation() {
    var book = {};
    book.vacations = [];

    book.add = function (name, email, numberP, sDate,textTitle) {
        this.vacations.push(vacationInfo(name, email, numberP, sDate));
        updateVacationList();
    };

    return book;
}

var vacationBook = bookVacation();

function addVacation() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var numberPInput = document.getElementById('numberP');
    var sDateInput = document.getElementById('sDate');
   
    var cardElement = document.getElementById('cardId');
    var name = nameInput.value;
    var email = emailInput.value;
    var numberP = numberPInput.value;
    var sDate = sDateInput.value;
    
   
    var textTitle = cardElement.querySelector('.text-title').innerText;

    vacationBook.add(name, email, numberP, sDate,textTitle);

    nameInput.value = '';
    emailInput.value = '';
    numberPInput.value = '';
    sDateInput.value = '';
}


function updateVacationList(filteredVacations) {
    var vacationsToDisplay = filteredVacations || vacationBook.vacations;

    each(vacationsToDisplay, function (vacation, index) {
   var message ='Mr/Mrs ' + vacation.name +'Your vacation was booked successfully. We will contact you before '+vacation.sDate
   alert(message);
    });
}




function openReservationForm() {
    
    document.getElementById('reservationModal').style.display = 'block';
   }

function closeReservationForm() {
   
document.getElementById('reservationModal').style.display = 'none';
}




window.onclick = function(event) {

    var modal = document.getElementById('reservationModal');

    if (event.target === modal) {

        modal.style.display = 'none';
    }
}






