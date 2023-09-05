import { Response, Request } from "express"
import { ListarProdutoServices } from "../../services/Produtos/ListarProdutoServices"

class MostrarProdutoController {
    async handle(req: Request, res: Response) {
        const listarProdutoServices = new ListarProdutoServices()
        const produtos = await listarProdutoServices.execute()
        return res.json(produtos)
    }
}


export { MostrarProdutoController }