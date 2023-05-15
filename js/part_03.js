$(function () {
  $.ajax({
    url: "./json/part_03.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".r_box").eq(i).find("img").attr("src", "img/" + data[i].url);
          $(".r_box").eq(i).find("p:first").text(data[i].title);
          $(".r_box").eq(i).find("p.r_box_text").text(data[i].exp);
        }
      }
    },
  });
});
