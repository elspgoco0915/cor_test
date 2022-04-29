var showloading = document.getElementById('loading');
var contents = document.getElementById('index');

// スライドの画像を先に読み込んでおく
var images = [
  "images/main_backimg1.jpg",
  "images/main_backimg2.jpg",
  "images/main_backimg3.jpg",
  "images/main_backimg4.jpg",
];
for($i = 0; $i < images.length; $i++){
  console.log($i);
  document.getElementById("index").style.backgroundImage = "url(" + images[$i] + ")";
}

window.addEventListener('load', function () {
  showloading.style.display = 'none';
  contents.classList.remove('hidden');
});
