<script>
  import Tabulator from "tabulator-tables"; //import Tabulator library
  import { onMount } from "svelte";
  import * as data_major from "./data/major_stats.json";

  var table;

  onMount(async () => {
    table = new Tabulator("#example-table", {
      data: data_major.default, //set initial table data
      columns: [
        // { title: "Kode Prodi", field: "id_major", headerFilter:true, responsive:2 },
        { title: "Program Studi", field: "major_name", headerFilter:true , responsive:0},
        { title: "Perguruan Tinggi", field: "university_name" , headerFilter:true, responsive:0},
        { title: "Rumpun", field: "type" , headerFilter:"select", headerFilterParams:{values:{"science":"science", "humanities":"humanities", "":""}}, responsive:2},
        { title: "Peminat", field: "applicants", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=", responsive:2},
        { title: "Kapasitas", field: "capacity", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=", responsive:2},
        // { title: "Skor Terendah", field: "lowest_score" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=", responsive:2},
        // { title: "Skor Tertinggi", field: "highest_score" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=", responsive:2},
        { title: "Est. Passing Grade", field: "passing_grade" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=", responsive:0},
        { title: "Est. Rasio Diterima", field: "acceptance_ratio", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=", responsive:0 }
      ],
      pagination: "local",
      layout:"fitColumns",
      responsiveLayout:"collapse",
      paginationSize: 25,      
      movableColumns: true
    });
  });
  
  function onSort(col, mode = "desc") {
    table.setSort(col, mode);
    table.clearFilter();
    if (col == "acceptance_ratio") table.setFilter("acceptance_ratio", ">", 0);
  }

</script>
    <span class="menu">
      <button on:click={ () => onSort("applicants")} >Jurusan Favorit</button>
      <button on:click={ () => onSort("capacity")} >Kapasitas Terbanyak</button>
      <button on:click={ () =>  onSort("passing_grade")} >Passing Grade Tertinggi</button>
      <button on:click={ () => onSort("acceptance_ratio", "asc")} >Jurusan Terketat</button>
    </span>

<div id="example-table" />
