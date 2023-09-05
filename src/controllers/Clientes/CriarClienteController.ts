import { Request, Response } from "express"
import { CriarClienteServices } from "../../services/Clientes/CriarClienteServices"

class CriarClienteController {
    async handle(req: Request, res: Response) {
        const {
            id,
            nome,
            cpf,
            celular,
            rua,
            complemento,
            bairro,
            cidade,
            estado
        } = req.body

        const criarClientesServices = new CriarClienteServices()
        const cliente = await criarClientesServices.execute({
            id,
            nome,
            cpf,
            celular,
            rua,
            complemento,
            bairro,
            cidade,
            estado
        })
        return res.json(cliente)

    }
}

export { CriarClienteController }