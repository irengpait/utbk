<script>
  import Tabulator from "tabulator-tables"; //import Tabulator library
  import { onMount } from "svelte";
  import * as data_major from "./data/major_stats.json";

  onMount(async () => {
    var table = new Tabulator("#example-table", {
      data: data_major.default, //set initial table data
      columns: [
        { title: "Kode Prodi", field: "id_major", headerFilter:true },
        { title: "Program Studi", field: "major_name", headerFilter:true },
        { title: "Perguruan Tinggi", field: "university_name" , headerFilter:true},
        { title: "Peminat", field: "applicants", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Kapasitas", field: "capacity", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Skor Terendah", field: "lowest_score" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Skor Tertinggi", field: "highest_score" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Est. Passing Grade", field: "passing_grade" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Est. Rasio Diterima", field: "acceptance_ratio", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=" }
      ],
      pagination: "local",
      layout:"fitColumns",
      paginationSize: 25,      
      movableColumns: true
    });
  });
</script>

<div id="example-table" />
