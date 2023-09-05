import { Request, Response } from "express"
import { CriarProdutoServices } from "../../services/Produtos/CriarProdutoServices"

class CriarProdutoController {
    async handle(req: Request, res: Response) {
        const { nome, fabricante, quantidade, preco } = req.body

        const criarProdutoServices = new CriarProdutoServices()
        const produtos = await criarProdutoServices.execute({
            nome,
            fabricante,
            quantidade,
            preco
        })
        return res.json(produtos)

    }

}

export { CriarProdutoController }