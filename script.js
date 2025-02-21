function ubahWarna() {
  const judul = document.getElementById("judul");
  judul.style.color = judul.style.color === "white" ? "#3f8e00" : "white";
}

function tampilkanPesan(event) {
  event.preventDefault(); // Mencegah form melakukan reload halaman
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan");

  if (nama.trim()) {
    pesan.textContent = `Halo, ${nama}! Selamat datang di website kami!`;
  } else {
    pesan.textContent = "Nama tidak boleh kosong!";
  }
}
