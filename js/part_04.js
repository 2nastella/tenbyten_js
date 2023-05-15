$(function () {
  $.ajax({
    url: "./json/part_04.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".popular_thum").eq(i).find("img").attr("src", "img/" + data[i].url);
        }
      }
    },
  });
});
