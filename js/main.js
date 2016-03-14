var root = 'http://jsonplaceholder.typicode.com';

$(".btn").on('click',function(){
//$.get('html/post.html', function ( callPost ) {
  $.ajax({
    url: root + '/posts',
    method: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function(show){
  //    $('#gabbia').append(show);
      console.log(show);

      document.getElementById('gabbia').innerHTML = show

    },

 });

//  });

  $(".boxone").removeClass("appari");
 });
