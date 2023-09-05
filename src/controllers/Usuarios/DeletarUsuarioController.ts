import { Request, Response } from "express";
import { DeletarUsuarioServices } from "../../services/Usuarios/DeletarUsuarioServices";

class DeletarUsuarioController {
    async handle(req: Request, res: Response) {
        const { id } = req.body
        const deletarUsuarioServices = new DeletarUsuarioServices()
        const apagarUsuario = await deletarUsuarioServices.execute({
            id
        })
        return res.json(apagarUsuario)
    }
}

export { DeletarUsuarioController }