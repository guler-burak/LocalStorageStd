function ogrenciEkle() {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var yas = document.getElementById("yas").value;

    if (ad === '' || soyad === '' || yas === '') {
        alert("Lütfen tüm bilgileri doldurunuz.");
        return;
    }

    var ogrenci = {ad: ad, soyad: soyad, yas: yas};
    var ogrenciler = localStorage.getItem("ogrenciler");
    if (ogrenciler) {
        ogrenciler = JSON.parse(ogrenciler);
        ogrenciler.push(ogrenci);
    } else {
        ogrenciler = [ogrenci];
    }
    localStorage.setItem("ogrenciler", JSON.stringify(ogrenciler));

    document.getElementById("ad").value = "";
    document.getElementById("soyad").value = "";
    document.getElementById("yas").value = "";
    alert("Öğrenci başarıyla eklendi");
}

function ogrenciListele() {
    window.location.href = "ogrenci-listele.html"
}
