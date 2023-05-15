$(function(){
    $.ajax({
        url:"./json/part_02.json",
        dataType:"json",
        success:function(data){
            if(data.length>0){
                for(var i in data){
                 $(".md_sell div").eq(i).find("img").attr("src", "img/" + data[i].url);
                 $(".md_sell div").eq(i).find("p.name").text(data[i].title);
                 $(".md_sell div").eq(i).find("p:last").text(data[i].price);
	      $(".md_sell div").eq(i).find("p:last").addClass(data[i].class);
                }
            }
        }
    });
});


