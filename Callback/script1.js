import { Table } from "./moduletable.js";

// Ambil data
function getData(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        return callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  
//   const data = getData("https://jsonplaceholder.typicode.com/users/1", function(data) {
//       console.log(data);
//   });

// Proses Data Mana saja yang ingin Digunakan
function prosesData(data) {
    const columns = ['ID', 'Name', 'Username', 'Email', 'Adress', 'Company'];
    const rows = data.map(user => [
        user.id,
        user.name,
        user.username,
        user.email,
        `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
        user.company.name
    ]);
    return {columns, rows};
}

// Buat table, Agar Data yang diproses dapat di render dan dapat ditampilkan
function rendertable(data) {
    const hasilData = prosesData(data);
    const table = new Table({
        columns : hasilData.columns,
        data : hasilData.rows
    })
    //tampilkan table
    const tampil = document.getElementById("appData");
    table.render(tampil);
}


getData("https://jsonplaceholder.typicode.com/users",rendertable);