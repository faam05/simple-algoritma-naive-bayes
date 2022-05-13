function menghitung() {
  var keuntungan = parseInt(document.getElementById("keuntungan").value);
  var kerugian = parseInt(document.getElementById("kerugian").value);
  var jam_kerja = parseInt(document.getElementById("jam_kerja").value);

  var pendidikan = document.getElementById("pendidikan").value;
  var profesi = document.getElementById("profesi").value;

  var hasil = document.getElementById("total");

  var total;

  if (isNaN(keuntungan) || isNaN(kerugian) || isNaN(jam_kerja)) {
    alert("isi keuntungan,kerugian dan jam kerja dengan angka!");
  } else {
    var capital = keuntungan - kerugian;

    if (capital <= 30429) {
      if (pendidikan == "2") {
        if (profesi == "Prof-specialty") {
          if (jam_kerja >= 66) {
            total =
              "Sepertinya calon customer berpenghasilan > 50.000$, dia merupakan target yang tepat untuk membeli produk anda";
          } else {
            total =
              "Sepertinya calon customer berpenghasilan < 50.000$, dia akan sulit membeli produk anda";
          }
        } else {
          total =
            "Sepertinya calon customer berpenghasilan < 50.000$, dia akan sulit membeli produk anda";
        }
      } else if (pendidikan == "6") {
        if (jam_kerja >= 33) {
          total =
            "Sepertinya calon customer berpenghasilan > 50.000$, dia merupakan target yang tepat untuk membeli produk anda";
        } else {
          total =
            "Sepertinya calon customer berpenghasilan < 50.000$, dia akan sulit membeli produk anda";
        }
      } else {
        total =
          "Sepertinya calon customer berpenghasilan < 50.000$, dia akan sulit membeli produk anda";
      }
    } else if (capital < 65214) {
      total =
        "Sepertinya calon customer berpenghasilan < 50.000$, dia akan sulit membeli produk anda";
    } else if (capital >= 65214) {
      total =
        "Sepertinya calon customer berpenghasilan > 50.000$, dia merupakan target yang tepat untuk membeli produk anda";
    }
  }
  hasil.value = total;
}
