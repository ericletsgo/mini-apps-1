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
});
