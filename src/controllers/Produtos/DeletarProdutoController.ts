import { Request, Response } from "express"
import { DeletarProdutoServices } from "../../services/Produtos/DeletarProdutoServices"

class DeletarProdutoController {
    async handle(req: Request, res: Response) {
        const { id } = req.body
        const deletarProdutoServices = new DeletarProdutoServices()
        const apagarProduto = await deletarProdutoServices.execute({ id })
        return res.json(apagarProduto)
    }
}

export { DeletarProdutoController }