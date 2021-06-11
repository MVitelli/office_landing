const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/temas/sucesiones"],
    exact: true,
    component: "Sucesiones",
  },
  {
    path: ["/temas/derecho-laboral"],
    exact: true,
    component: "DerechoLaboral",
  },
  {
    path: ["/temas/divorcio"],
    exact: true,
    component: "Divorcio",
  },
  {
    path: ["/temas/accidentes"],
    exact: true,
    component: "AccidentesDeTransito",
  },
];

export default routes;
