
const gifForm = $("#gif-form");



gifForm.submit(e => {
  e.preventDefault();
  const searchTerm = $(".search").val();
  const url = `https://api.giphy.com/v1/gifs/search?&q=${searchTerm}g&limit=30&api_key=cXppniS57sjO0pzHAogffb7C9OYCxHFp`;
  $.get(url)
    .done(resp => {
      showGiphs(resp.data.slice(0, 40));
    })
    .fail(console.log);
});

function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = "";
  output = dataArray
    .map(
      imgData =>
        `<a href="${imgData.images.original.url}" alt="${
          imgData.title
        }" target="_blank"><img src="${imgData.images.original.url}"></a>`
    )
    .join("");
  $(".results").html(output);
}

$(function() {
  $(".toggle").on("click", function() {

  if($(".item").hasClass("active")){
          $(".item").removeClass("active");
  }
  else{
      $(".item").addClass("active");
  }
})
});