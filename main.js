var root = 'http://jsonplaceholder.typicode.com';

$(".btn").on('click',function(){

  $.ajax({
    url: root + '/user',
    method: 'GET',
    success: function(show){
    document.getElementById('gabbia').innerHTML = show;
    //console.log(show);
    },
  });
})
