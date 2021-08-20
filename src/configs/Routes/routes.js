import { lazy } from "react";

const Dashboard = lazy(() => import("../../pages/Dashboard"));
const Tables = lazy(() => import("../../pages/Tables"));
const ModalPage = lazy(() => import("../../pages/ModalPage"));
const IconsPage = lazy(() => import("../../pages/IconsPage"));
const ReduxBasic = lazy(() => import("../../pages/ReduxBasic"));
const ContohCRUD = lazy(() => import("../../pages/ContohCRUD"));
const DoCRUD = lazy(() => import("../../pages/ContohCRUD/DoCRUD"));
const Settings = lazy(() => import("../../pages/Settings"));
const SettingsOne = lazy(() => import("../../pages/Settings/PageOne"));

const routes = [
  {
    path: "dashboard/", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "table/", // the url
    component: Tables, // view rendered
  },
  {
    path: "modal/", // the url
    component: ModalPage, // view rendered
  },
  {
    path: "icons/", // the url
    component: IconsPage, // view rendered
  },
  {
    path: "basic-redux/", // the url
    component: ReduxBasic, // view rendered
  },
  {
    path: "contoh-crud/", // the url
    component: ContohCRUD, // view rendered
  },
  {
    path: "contoh-crud/do", // the url
    component: DoCRUD, // view rendered
  },
  {
    path: "contoh-crud/do/:id", // the url
    component: DoCRUD, // view rendered
  },
  {
    path: "settings/", // the url
    component: Settings, // view rendered
  },
  {
    path: "settings/satu", // the url
    component: SettingsOne, // view rendered
  },
];
export default routes;
