const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");
const fotoBtn = document.getElementById("file-name__foto");

chooseFile.addEventListener("change", function (e) {
  getImgData();
  document.getElementsByClassName('choose-file')[0].style.display = 'none';
});

fotoBtn.addEventListener('click', function () {
  chooseFile.click();
});


function getImgData() {
  const files = chooseFile.files[0];
  const fileName = files.name;

  if (files) {
    const fileNameEl = document.getElementById('file-name');
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
      fileNameEl.innerText = fileName;
    });
  }
}