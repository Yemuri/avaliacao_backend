import { Response, Request } from "express"
import { MostrarUsuarioServices } from "../../services/Usuarios/ListarUsuarioServices"

class MostrarUsuarioController {
    async handle(req: Request, res: Response) {
        const mostrarUsuarioServices = new MostrarUsuarioServices()
        const usuarios = await mostrarUsuarioServices.execute()
        return res.json(usuarios)


    }
}

export { MostrarUsuarioController }