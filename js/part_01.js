$(function () {
  $.ajax({
    url: "./json/part_01.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $("#event > div").eq(i).find("img").attr("src", "img/" + data[i].url);
          $("#event > div").eq(i).find("span").text(data[i].title);
          $("#event > div").eq(i).find("p").text(data[i].exp);
        }
      }
    },
  });
});
