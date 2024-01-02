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
  
    function vacationInfo(price, image, startDate, endDate) {
    var fileName;

    fileName = image.name; 

    return {
        startDate: startDate,
        endDate: endDate,
        price: price,
        image: image,
        fileName: fileName
    };
}
  //create vaction
function bookVacation() {
        var book = {};
        book.vacations = [];

        book.add = function (price, image, startDate, endDate) {
     
            this.vacations.push(vacationInfo(price, image, startDate, endDate));
            updateVacationList();
        };
      return book;
    }

    var vacationBook = bookVacation();
    


    function addVacation() {
     
        var priceInput = document.getElementById('price');
        var imageInput = document.getElementById('imageInput');
        var startDateInput = document.getElementById('statDate');
        var endDateInput = document.getElementById('endDate');
      
        var price = priceInput.value;
        var image = imageInput.files[0];
        var startDate = new Date(startDateInput.value);
        var endDate = new Date(endDateInput.value);
        
        vacationBook.add(price, image, startDate, endDate);

      
        priceInput.value = '';
        imageInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
    }

    function updateVacationList(filteredVacations) {
      
    var vacationListDiv = document.getElementById('vacationList');
    vacationListDiv.innerHTML = '';
    var vacationsToDisplay = filteredVacations || vacationBook.vacations;
    each(vacationsToDisplay,function (vacation, index) {
        var vacationCard = document.createElement('div');
        vacationCard.className = 'vacation-card';

        var imageUrl = URL.createObjectURL(vacation.image);

        vacationCard.innerHTML = '<img src="' + imageUrl + '" alt="Vacation Image">' +
      '<p><strong><span style="color: blue; font-size: 22px;">Vacation in ' + vacation.fileName.replace(/\.[^/.]+$/, "") +
      '</span> </strong> <br> - <strong>Période de vacances:</strong> ' +
         formatDate(vacation.startDate) + ' - ' + formatDate(vacation.endDate) + '</p>' +
      '<p><strong>Price:</strong> ' + vacation.price + ' TND</p>' +
        '<button onclick="deleteVacation(' + index + ')">Delete</button>';
        vacationListDiv.appendChild(vacationCard);
    });
}



function deleteVacation(index) {
    vacationBook.vacations.splice(index, 1);
    updateVacationList();
}

function formatDate(date) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }


//search filter
function applyFilter() {
    var filterKeyword = document.getElementById('filterKeyword').value.toLowerCase();

    var filteredVacations =filter(vacationBook.vacations,function (vacation) {
        
        return vacation.fileName.toLowerCase().includes(filterKeyword);
    });

 
    updateVacationList(filteredVacations);
}