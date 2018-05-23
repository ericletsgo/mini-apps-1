$(document).ready(function() {
  var app = {
    post: function(jsonData) {
      $.ajax({
        url: 'http://127.0.0.1:8080',
        type: 'POST',
        contentType: 'application/json',
        data: jsonData,
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
    console.log($('textarea').val())
    event.preventDefault();
  });
});
