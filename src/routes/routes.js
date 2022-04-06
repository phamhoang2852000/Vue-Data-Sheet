import DataSheet from "@/pages/DataSheet.vue";
import Dropdowns from "@/pages/DropDowns.vue";

const routes = [
  {
    path: "/data-sheet",
    name: "Data Sheet",
    component: DataSheet,
  },
  {
    path: "/drop-down",
    name: "DropDowns",
    component: Dropdowns,
  },
];

export default routes;
