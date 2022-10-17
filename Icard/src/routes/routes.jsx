import routesAdmin from "./routes.admin";
import routesClient from "./routes.cliente";
import { Error404 } from "../pagues/Error404";

import { BasicLayout } from "../layouts/BasicLayout";

const routes = [...routesAdmin, ...routesClient,
    //si no encuntra nada de arriba manda aqui
    {
        path: '*',
        layout: BasicLayout,
        component: Error404
    }

]

export default routes;