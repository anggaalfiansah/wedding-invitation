import MOMENT_BERSAMA from "assets/images/cutecat.jpg";

export const CONFIG = {
  // warna
  BASE_COLOR: "#D7B7A9",
  SECOND_COLOR: "#e6faff",
  TEXT_COLOR: "#000",
  // data pria
  MEMPELAI_PRIA: "Miong Miong",
  MEMPELAI_PRIA_PANGGILAN: "Miong",
  BAPAK_MEMPELAI_PRIA: "Meong (Alm)",
  IBU_MEMPELAI_PRIA: "Meung",
  // data wanita
  MEMPELAI_WANITA: "Miung Miung",
  MEMPELAI_WANITA_PANGGILAN: "Miung",
  BAPAK_MEMPELAI_WANITA: "Pus Miong",
  IBU_MEMPELAI_WANITA: "Pus Miung",
  // detail lokasi dan waktu
  TANGGAL_PERNIKAHAN: "2050-12-31 09:00",
  ALAMAT_PERNIKAHAN: "Jalan kita Masih Panjang No. 69",
  // detail lokasi dan waktu akad
  TAG_LOKASI_AKAD_NIKAH: "Gedung KUA Indah",
  LOKASI_AKAD_NIKAH: "Gedung KUA Indah",
  TANGGAL_AKAD_NIKAH: "2050-12-31 09:00",
  // detail lokasi dan waktu resepsi
  TAG_LOKASI_RESEPSI_NIKAH: "Rumah Miung",
  LOKASI_RESEPSI_NIKAH: "Rumah Miung",
  TANGGAL_RESEPSI_NIKAH: "2050-12-31 09:00",
  // Foto Moment Bahagia : link/image (rekomendasi image)
  MOMENT_BAHAGIA_FOTO: MOMENT_BERSAMA,
  // Google Map > Share
  LINK_MAPS_IFRAME_ALAMAT_PERNIKAHAN:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.663868076938!2d106.82448507485435!3d-6.175733993811684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTAnMzIuNiJTIDEwNsKwNDknMzcuNCJF!5e0!3m2!1sid!2sid!4v1692540432213!5m2!1sid!2sid",
  LINK_MAPS_DIRECTION_ALAMAT_PERNIKAHAN: "https://goo.gl/maps/3Gj9Tpz78CJaCNNY6",
  LINK_MAPS_DIRECTION_ALAMAT_PERNIKAHAN_AKAD: "https://goo.gl/maps/3Gj9Tpz78CJaCNNY6",
  LINK_MAPS_DIRECTION_ALAMAT_PERNIKAHAN_RESEPSI: "https://goo.gl/maps/3Gj9Tpz78CJaCNNY6",
  // GENERATOR : https://decomaan.github.io/google-calendar-link-generator/
  LINK_CALENDAR: "https://www.google.com/calendar/render?action=TEMPLATE&text=My+Wedding&details=Wedding&location=Jalan+Kita+Masih+Panjang+No.+69&dates=20501231T140500Z%2Fundefined",
  // Turut Mengundang : string[]
  TURUT_MENGUNDANG: ["H. Maung Al Hasyim", "Dr. Meong Al Sina", "Keluarga Besar Maung"],
  // Transfer Tujuan : { bank_name: string, no_rek: string, rek_name: string }[]
  TRANSFER_TUJUAN: [
    { bank_name: "Bank Nasional Spongebob", no_rek: "0123456789", rek_name: "Miung Miung" },
    { bank_name: "E-Wallet X", no_rek: "08123456789", rek_name: "Miung Miung" },
    { bank_name: "E-Wallet Y", no_rek: "08123456789", rek_name: "Miong Miong" },
  ],
};

// aset gambar
export { default as WELCOME_FRAME } from "assets/images/welcome-frame.png";
export { default as BUNGA_SAMBUTAN } from "assets/images/bunga-sambutan.png";
export { default as BUNGA_IKAT } from "assets/images/ikat-bunga.png";
export { default as BACKGROUND_BUNGA } from "assets/images/background-bunga.png";
export { default as BACKGROUND_BUNGA2 } from "assets/images/background-bunga-2.png";
export { default as BACKGROUND_BUNGA3 } from "assets/images/background-bunga-3.png";
export { default as GARIS_BUNGA } from "assets/images/garis-bunga.png";
export { default as BACKGROUND_BUNGA4 } from "assets/images/background-bunga-4.png";
// aset svg
export { ReactComponent as SVG_STATIC } from "assets/svg/static.svg";
export { ReactComponent as SVG_INTERACTIVE } from "assets/svg/interactive.svg";