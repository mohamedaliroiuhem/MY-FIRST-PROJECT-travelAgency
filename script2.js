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
  function vacationInfo(name, email, numberP, sDate) {
   
    return {
        name: name,
        email: email,
        numberP: numberP,
        sDate: sDate,
       
    };
}

// create vacation
function bookVacation() {
    var book = {};
    book.vacations = [];

    book.add = function (name, email, numberP, sDate) {
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
    
   
    
    vacationBook.add(name, email, numberP, sDate);

    nameInput.value = '';
    emailInput.value = '';
    numberPInput.value = '';
    sDateInput.value = '';
}


function updateVacationList() {
    var vacationsToDisplay = vacationBook.vacations;

    each(vacationsToDisplay, function (vacation, index) {
   var message ='Mr/Mrs ' + vacation.name +' Your vacation was booked successfully. We will contact you before '+vacation.sDate
   alert(message);
    });
}




function openReservationForm() {
    
    document.getElementById('reservationModal').style.display = 'block';
   }

function closeReservationForm() {
   
document.getElementById('reservationModal').style.display = 'none';
}










