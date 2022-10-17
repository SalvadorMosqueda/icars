import {ClientLayout} from "../layouts"
import {Home} from "../pagues/Client"
import {Error404} from "../pagues"
const routesClient = [{
    path: '/',
    layout: ClientLayout,
    component: Home
},
]

export default routesClient
