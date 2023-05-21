$(document).ready(function () {
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  generateCalendar(currentMonth, currentYear);

  $('#prev-month').click(function () {
    if (currentMonth == 0) {
      currentMonth = 11;
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    }
    generateCalendar(currentMonth, currentYear);
  });

  $('#next-month').click(function () {
    if (currentMonth == 11) {
      currentMonth = 0;
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
    generateCalendar(currentMonth, currentYear);
  });

  function generateCalendar(month, year) {
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var calendarBody = $('#calendar-body');
    calendarBody.empty();

    $('#current-month-year').text(months[month] + ' ' + year);

    var date = 1;
    for (var i = 0; i < 6; i++) {
      var row = $('<tr></tr>');
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          var cell = $('<td></td>');
          row.append(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          var cell = $('<td></td>').text(date);
          if ((j === 0 || j === 6) && i > 0) {
            cell.addClass('weekend');
          }
          row.append(cell);
          date++;
        }
      }
      calendarBody.append(row);
    }
  }
});
