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
    for (var i = 0; i < data.length -1; i++) {
      $('#display').append(`<th>${data[i]}<th>`);

      if (data[i] === '\n') {
        $('#display').append('</tr><tr>');

        for (var j = i; j < data.length -1; j++) {
          $('#display').append(`<td>${data[j]}<td>`);

          if (data[j] === '\n') {
            $('#display').append('</tr><tr>');
          }

          if (j === data.length - 2) {
            $('#display').append('</tr>');
          }
        }
      }

    }

  }
});
