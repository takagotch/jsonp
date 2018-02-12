//req: jQ.TwitterApi -> res: JSONP

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<script type="text/javascript">
  $(function(){
    $("input#search").on("click", function(){
      var keyword = $("input#keyword").val();
      console.log(keyword);
      return keyword.length ? search(keyword) : false;
    });
  });

  function myCallback(data){
    $("#result").empty();
    $.each(data.results, function(i, item){
      $("#result").append($("<li />")
	          .append($("<img />").attr("src", item.profile_image_url))
	          .append($("<p>").append(item.from_user+''+item.text)));
    });
  }

  function search(word){
    $("<script>")
	  .attr('type', 'text/javascript')
	  .attr('src', "http://search.twitter.com/search.json?rpp=10&callback=myCallback&q-" + word)
	  .appendTo($("head"));
  }
</script>

<input type="text" id="keyword" value="text" />
<input type="button" value="twitter keyword search" id="search" />
<div id="result"></div>

