import { Response, Request } from "express"
import { CriarUsuarioServices } from "../../services/Usuarios/CriarUsuarioServices"


class CriarUsuarioController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha } = req.body

        const criarUsuarioServices = new CriarUsuarioServices()
        const usuarios = await criarUsuarioServices.execute({
            nome, email, senha
        })

        return res.json(usuarios)

    }
}

export { CriarUsuarioController }