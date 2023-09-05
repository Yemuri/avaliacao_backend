import { Request, Response } from "express"
import { MostrarClienteServices } from "../../services/Clientes/ListarClienteServices"

class MostrarClienteController {
    async handle(req: Request, res: Response) {
        const mostrarClienteServices = new MostrarClienteServices()
        const clientes = await mostrarClienteServices.execute()
        return res.json(clientes)
    }
}

export { MostrarClienteController }