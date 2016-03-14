var root = 'http://jsonplaceholder.typicode.com';

$(".btn").on('click',function(){
  $.ajax({
    url: root + '/posts',
    method: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function(show){


  var len = show.length;
  for (var i = 0; i < len; i++) {
    //  document.getElementById('gabbia').innerHTML = (show[i].title);
    document.getElementById('gabbia').innerHTML = (show[i].body);

      }

    },

  });

  $(".boxone").removeClass("appari");

});
