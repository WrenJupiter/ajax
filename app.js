console.log("Let's get this party started!");
const gifs = $("#gifs");
const search = $("#search");

function add(res) {
  let dat = res.data.length;
  if (dat) {
    let num = Math.floor(Math.random() * dat);
    let newDiv = $("<div>");
    let newGif = $("<img>", {
      src: res.data[num].images.original.url,
    });
    newDiv.append(newGif);
    gifs.append(newDiv);
  }
}

$("form").on("submit", async function info(e) {
  e.preventDefault();
  let query = search.val();
  search.val("");
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: query,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  add(res.data);
});

const del = $("#del");
del.on("click", function () {
  gifs.empty();
});
