import { Request, Response } from "express"
import { DeletarClienteServices } from "../../services/Clientes/DeletarClienteServices"

class DeletarClienteController {
    async handle(req: Request, res: Response) {
        const { id } = req.body
        const deletarClienteServices = new DeletarClienteServices()
        const apagarUsuario = await deletarClienteServices.execute({
            id
        })
        return res.json(apagarUsuario)
    }

}

export { DeletarClienteController }