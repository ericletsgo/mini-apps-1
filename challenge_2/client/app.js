$(document).ready() {
  var app = {
    post: function(query) {
      $.ajax({
        url: 'http://127.0.0.1:8080/',
        method: 'POST',
        data: query,
        success: function(data) {
          console.log('success!');
        },
        error: function(data) {
          console.log('failed');
        },
      });
    },

    get: function() {
      $.ajax({
        url: 'http://127.0.0.1:8080/',
        method: 'GET',
        success: function(data) {

        },
        error: function(data) {

        },
      });
    }
  }

  $('#button').click(function (event) {
    console.log(event);
    console.log(document.getElementById('testField').val());
    event.preventDefault();
    // console.log($('input:first').val());
  });
}
