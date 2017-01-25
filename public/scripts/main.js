function searchQuery() {
    var searchQuery = JSON.stringify({searchQuery : $("#searchtext").val()});
    console.log(searchQuery);
    $.ajax({
      url: '/searchtext',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: searchQuery,
      success: function(returnedData){
        //console.log(returnedData);
        window.alert("Data Processed Successfully!");
      },
      error: function(){
        window.alert("Request Processing Failed!")
      }
    });
}
