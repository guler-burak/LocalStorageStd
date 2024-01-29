var ogrenciler = [];
window.onload = function() {
    var ogrenciler = localStorage.getItem("ogrenciler");
    if (ogrenciler) {
        ogrenciler = JSON.parse(ogrenciler);
        for (var i = 0; i < ogrenciler.length; i++) {
            var ogrenci = ogrenciler[i];

            var table = document.getElementById("liste");

            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = ogrenci.ad;
            cell2.innerHTML = ogrenci.soyad;
            cell3.innerHTML = ogrenci.yas;

            var editButton = document.createElement("button");
            editButton.innerHTML = "Düzenle";
            editButton.classList.add("btn", "btn-secondary", "custom-button");
            editButton.style.marginTop = "10px";
            editButton.addEventListener("click", ogrenciDuzenle.bind(null, i));
            cell4.appendChild(editButton);

            cell4.appendChild(document.createTextNode(" "));

            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Sil";
            deleteButton.classList.add("btn", "btn-secondary", "custom-button");
            deleteButton.style.marginTop = "10px";
            deleteButton.addEventListener("click", ogrenciSil.bind(null, i));
            cell4.appendChild(deleteButton);
        }
    }
};

function ogrenciDuzenle(ogrenciIndex) {
    var ogrenciler = JSON.parse(localStorage.getItem("ogrenciler"));
    var ogrenci = ogrenciler[ogrenciIndex];
  
    var ad = prompt("Yeni adı girin:", ogrenci.ad);
    var soyad = prompt("Yeni soyadı girin:", ogrenci.soyad);
    var yas = prompt("Yeni yaşını girin:", ogrenci.yas);
  
    ogrenci.ad = ad;
    ogrenci.soyad = soyad;
    ogrenci.yas = yas;
  
    localStorage.setItem("ogrenciler", JSON.stringify(ogrenciler));
    window.location.reload();
  
  }
  
  
function ogrenciSil(ogrenciIndex) {
  var confirmed = confirm("Öğrenciyi silmek istediğinize emin misiniz?");
  if (confirmed) {
    var table = document.getElementById("liste");
    var rowIndex = ogrenciIndex + 1;
    table.deleteRow(rowIndex);

    var ogrenciler = JSON.parse(localStorage.getItem("ogrenciler"));
    ogrenciler.splice(ogrenciIndex, 1);
    localStorage.setItem("ogrenciler", JSON.stringify(ogrenciler));
  }
}
  
  function goToIndex() {
    window.location.href = "index.html";
  }
  