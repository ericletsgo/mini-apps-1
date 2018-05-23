$(document).ready(function() {
  var app = {
    post: function(data) {
      $.ajax({
        url: 'http://127.0.0.1:8080',
        type: 'POST',
        contentType: 'application/json',
        data: data,
        success: function(data) {
          console.log(data);
          renderData(data);
        },
        error: function(data) {
          console.log('failed');
        },
      });
    }
  }

  $('#form').submit(function (event) {
    app.post($('textarea').val());
    event.preventDefault();
  });

  var renderData = function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#display').append('<tr>');
      for (var j = 0; j < data[i].length; j++) {
        $('#display').append(`<td>${data[i][j]}</td>`);
      }
      $('#display').append('</tr>');
    }
  }
});
