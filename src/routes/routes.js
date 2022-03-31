import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import TableSheet from "@/pages/TableSheet.vue";
import DataSheet from "@/pages/DataSheet.vue";
import Dropdown from "@/pages/Dropdowns.vue";

const routes = [
  {
    path: "/data-sheet",
    name: "Data Sheet",
    component: DataSheet,
  },
  {
    path: "/drop-down",
    name: "DropDown",
    component: Dropdown,
  },
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "table-sheet",
        name: "Table Sheet",
        component: TableSheet,
      },
      
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;
