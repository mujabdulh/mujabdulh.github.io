# Tutorial Dokumentasi menggunakan Vuepress 
Tulisan ini berisi langkah-langkah menggunakan vuepress untuk keperluan konten static web seperti dokumentasi, petunjuk teknis, FAQ, dan seterusnya. 

Secara garis besar tutorial ini terdiri dari kebutuhan software apa saja supaya sistem dapat menjalankan vuepress, kemudian konfigurasi project vuepress, dilanjutkan terakhir pengisian konten project tersebut.

## Requirement Software
### npm 

#### Download npm (melalui nodejs)

NPM sendiri didistribusikan melalui software node yang artinya saat node.js diinstall, otomatis npm ikut terinstall. Pada saat tutorial ini dibuat, digunakan **node versi 10.16.3.** yang bisa didapatkan langsung dari [website nodejs](https://nodejs.org/en/).

![node-download](./img/node-download.png)

Klik download button versi yang terdapat tulisan ***LTS***



#### Install nodejs

Lakukan instalasi nodejs pada sistem dengan langkah-langkah seperti software lain pada umumnya. 

![nodejs-installer](./img/nodejs-installer.png)

Pada screenshoot tutorial ini diurutkan langkah instalasi dari kiri ke kanan. Checked pada opsi checkbox License Agreement.

![nodejs-installing](./img/nodejs-installing-1.png)

Biarkan secara default pada window pilih direktori instalasi, serta pada windows fitur-fitur yang akan diinstall.

![nodejs-installing](./img/nodejs-installing-2.png)

Konfirmasi install nodejs dengan pilih button ***Yes***

![nodejs-installing](./img/nodejs-installing-3.png)

Tunggu proses instalasi hingga selesai, diakhiri klik button ***Finish***

![nodejs-installing](./img/nodejs-installing-4.png)



#### Verifikasi npm & node
Untuk memastikan terinstall, lakukan verifikasi melalui commandpromt / cmd. Klik start windows, ketik cmd lalu arahkan mouse dan klik kiri. 

<img src="./img/cmd-start.png" alt="cmd-start" style="zoom:75%;" />

Setelah muncul Comand Prompt, masukan baris kode berikut satu per satu dilajutkan menekan keyboard Enter
cek versi npm : 

`npm -v`

cek versi nodejs: 

`node -v` 

<img src="./img/cmd-npm-version.png" alt="npm-check" style="zoom:75%;" />

Ditampilkannya versi node sesuai installer di awal menandakan instalasi berhasil dilakukan di sistem

### vuepress 

Vuepress sebagai static site generator yang dioptimalkan untuk pembuatan dokumentasi teknis. instalasi vuepress akan dibahas pada bagian selanjutnya yaitu setup project



## Setup Project

### Instalasi vuepress

- Tentukan **direktori project**. Default lokasi awal biasanya terletak di C:\Users\nama_user\ . 
  Untuk membuat folder project baru, ketikan command: `mkdir nama_project` , maka otomatis sistem akan create direktori nama_project. 
  Lalu arahkan command line aktif ke direktori project tsb. `cd nama_project`  

  ![cmd-directory](./img/cmd-directory.png)

  

- Buat konfigurasi awal project dgn command: `npm init `. Nantinya npm akan melakukan generate 1 file, yaitu package.json 

  ![npm-init](./img/npm-init-1.png)

  tekan tombol keyboard Enter di setiap input command untuk membiarkan konfigurasi secara default. Untuk keperluan vuepress ini, file **package.json** ini nantinya akan diubah. Ketik ***yes*** untuk konfirmasi terakhir.

  ![npm-init](./img/npm-init-2.png)

- **Install vuepress** sebagai dependensi local  berdasarkan dokumentasi <https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project> 
  Masih di direktori project, ketik command: `npm install -D vuepress` 

  ![vuepress-install](./img/vuepress-install.png)

  tunggu proses instalasi vuepress hingga selesai dan muncul teks **+ vuepress ... added packages** seperti gambar berikut

  ![vuepress-installed](./img/vuepress-installed.png)



### File README

- create file baru **README.md** di dalam direktori docs
  Masih di direktori project, buat direktori docs  menggunakan command: `mkdir docs`
  Kemudian buat file README.md sebagai permulaan `echo '# Hello VuePress' > docs/README.md`, sehingga file README.md akan tergenerate otomatis di dalam folder docs

- ubah script pada file **package.json**
  ![package-json](./img/package-json-default.png)

  hapus semua key kecuali **scripts** dan **devDependencies**. Ubah script menjadi berikut
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

![package-json](./img/package-json-edit.png)

Selanjutnya save file package.json 

#### Preview static web

- untuk preview kontennya pada mode development, ketik command `npm run docs:dev` 
  ![vuepress-dev](./img/vuepress-dev.png)

  buka URL default tersebut di browser <http://localhost:8080/> 
  ![vuepress-dev](./img/vuepress-dev-2.png)

- Sebelum generate static web, lakukan terminate / hentikan mode development tersebut dengan menekan keyboard **Ctrl+C** sebanyak 1 sampai 2 kali, lalu ketik Y
  ![vuepress-dev-terminate](./img/vuepress-dev-terminate.png)



### Konfigurasi Project

#### Struktur Folder 

Pada dasarnya vuepress memiliki struktur folder yang cukup fleksibel. File/folder yang digunakan pada tutorial ini dalam **folder .vuepress** antara lain:

1. folder **public**

   menyimpan sumber logo static web, dan favicon 

2. file **config.js**

   Mengatur title, logo, deskripsi, dan seterusnya <https://vuepress.vuejs.org/guide/basic-config.html#config-file> 

![vue-structure](./img/vue-structure.png)

Buat struktur Folder tersebut. Dari direktori project aktif, arahkan ke dalam folder docs: 
`cd docs`

buat folder .vuepress: 
`mkdir .vuepress`

buat folder public di dalam folder .vuepress:
`mkdir .\.vuepress\public`

![project-structure](./img/project-structure.png)

buat file config.js (berupa script kosong) di dalam folder .vuepress:
`echo '' > .\.vuepress\config.js`

![config-js](./img/config-js.png)



#### Edit konfigurasi 

Ubah script konfigurasi di file **config.js** tadi untuk mengatur icon, title page, dan sebagainya <https://vuepress.vuejs.org/theme/default-theme-config.html> 

```
module.exports = {
  title: 'Title Static Web',
  description: 'Deksripsi Static Web',
  themeConfig: {
    docsDir: 'docs',
    logo: '/sampleicon.png'
  }
}
```

![config-js](./img/config-js-edit.png)

Icon logo pada header dan favicon diambil dari folder public

![public-resource](./img/public-resource.png)

## Edit Konten

untuk edit konten terdapat di file **README.md** 








