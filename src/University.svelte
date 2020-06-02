<script>
  import Tabulator from "tabulator-tables"; //import Tabulator library
  import { onMount } from "svelte";
  import * as data_major from "./data/university_stats.json";

  onMount(async () => {
    var table = new Tabulator("#example-table", {
      data: data_major.default, //set initial table data
      columns: [        
        { title: "Universitas", field: "university_name", headerFilter:true },
        { title: "Kapasitas", field: "capacity" , headerFilter:true},
        { title: "Pelamar", field: "applicants" , headerFilter:"select", headerFilterParams:{values:{"science":"science", "humanities":"humanities", "":""}}},
        { title: "Jml. Prodi", field: "major", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Jml. Prodi Saintek", field: "major_science", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Jml. Prodi Soshum", field: "major_humanities" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Skor Rata2", field: "avg_score" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Skor Terendah", field: "min_score" , headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
        { title: "Skor Tertinggi", field: "max_score", headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">=" }
      ],
      pagination: "local",
      layout:"fitColumns",
      responsiveLayout:"hide",
      paginationSize: 25,      
      movableColumns: true
    });
  });
</script>

<div id="example-table" />
