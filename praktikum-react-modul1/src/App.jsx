import React from "react";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import ItemMatkul from "./ItemMatkul";
import ProyekCard from "./ProyekCard";
import fotoSaya from "./assets/foto.png";

function App() {
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  const daftarSkill = [
    { id: 1, nama: "HTML & CSS", level: "Mahir" },
    { id: 2, nama: "JavaScript ES6+", level: "Menengah" },
    { id: 3, nama: "React JS", level: "Pemula" },
    { id: 4, nama: "Git & GitHub", level: "Menengah" },
  ];

  // 4 Proyek Tugas Kuliah Sederhana (HTML, CSS, Java)
  const daftarProyek = [
    {
      id: 1,
      judul: "Website Portofolio Pribadi",
      deskripsi:
        "Halaman web statis sederhana untuk menampilkan biodata, riwayat pendidikan, dan minat menggunakan struktur HTML semantik dan styling CSS.",
      teknologi: ["HTML5", "CSS3"],
    },
    {
      id: 2,
      judul: "Aplikasi Kalkulator Sederhana",
      deskripsi:
        "Latihan logika pemrograman dasar untuk membuat kalkulator aritmatika (tambah, kurang, kali, bagi) interaktif pada antarmuka web.",
      teknologi: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      judul: "Program Kasir Toko Sederhana",
      deskripsi:
        "Aplikasi berbasis Java untuk menghitung transaksi belanja, diskon otomatis, dan kembalian menggunakan logika percabangan serta perulangan.",
      teknologi: ["Java", "Dasar Pemrograman"],
    },
    {
      id: 4,
      judul: "To-Do List / Catatan Tugas",
      deskripsi:
        "Aplikasi pencatat daftar tugas harian kuliah berbasis web dengan fungsi menambahkan dan menandai tugas yang sudah selesai.",
      teknologi: ["HTML", "CSS", "DOM Manipulation"],
    },
  ];

  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <div
      style={{
        maxWidth: "860px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      {/* Profil Mahasiswa Praktikan */}
      <section style={{ marginBottom: "36px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama="Muhammad Kevin Aditio"
          npm="243040059"
          kelas="IF D - Praktikum web"
          status="Aktif"
          fotoUrl={fotoSaya}
        />

        <div style={{ marginTop: "12px" }}>
          <h4 style={{ margin: "0 0 8px 0", color: "#495057" }}>
            Daftar Keahlian:
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {daftarSkill.map((skill) => (
              <BadgeSkill
                key={skill.id}
                namaSkill={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rencana Praktikum Semester */}
      <section style={{ marginBottom: "36px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Daftar Rencana Praktikum Semester
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              kode={matkul.kode}
              nama={matkul.nama}
              sks={matkul.sks}
              hari={matkul.hari}
            />
          ))}
        </div>
      </section>

      {/* Showcase Portofolio Mini */}
      <section style={{ marginBottom: "36px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Showcase Portofolio Mini
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {daftarProyek.map((proyek) => (
            <ProyekCard
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
            />
          ))}
        </div>
      </section>

      {/* Uji Interaktivitas Event */}
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
