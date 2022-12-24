const konversiDolarRp = (dl) => {
  let rp, hasil;
  rp = dl * 14000;
  hasil = rp.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  return hasil;
};

const input = document.getElementById("dolar");
const output = document.getElementById("output");

input.addEventListener("input", function (event) {
  const value = event.target.value;
  v = parseInt(value);
  if (konversiDolarRp(v) === "RpNaN") {
    output.innerHTML = "Maaf isi dengan number";
  } else {
    output.innerHTML = konversiDolarRp(v);
  }
});
