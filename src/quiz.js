/* function myFunction(id) {
  var yak_maliyet = document.getElementById("fiyat").value;
  var adet = document.getElementById("miktar").value;
  var toplam = yak_maliyet * adet;
  document.getElementById("toplam_maliyet").innerHTML =
    toplam.formatMoney(2, ",", ".") + " TL";
}
Number.prototype.formatMoney = function (c, d, t) {
  var n = this,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(d{3})(?=d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
};
 */

function faturaHesapla() {
  //*******************inputlardan gelen degerleri okuma*********************
  let birimFiyati = document.getElementById("birimFiyati").value;
  let miktar = document.getElementById("miktar").value;
  let indirim = document.getElementById("indirim").value;
  let kdv = document.getElementById("kdv").value;

  //**********************Matamatiksel islemler******************************
  let toplamTutar = miktar * birimFiyati;
  let indirimOranı = birimFiyati - (birimFiyati / 100) * indirim; 
  let indirimliToplamTutar = toplamTutar - indirimOranı;
  let kdvOranı = birimFiyati* (kdv/100);
  let kdvliToplamTutar = toplamTutar + (toplamTutar * kdv) / 100;

  //*************************************************************************
  document.getElementById("ToplamTutar").value = toplamTutar;
  document.getElementById("İndirimTutarı").value = indirimliToplamTutar;
  document.getElementById("İndirimliToplamTutar").value = indirimOranı;
  document.getElementById("KdvTutarı").value= kdvOranı;
  document.getElementById("KdvliToplamTutar").value = kdvliToplamTutar;
}
