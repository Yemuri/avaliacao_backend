import clientePrisma from "../../prisma"


class ListarProdutoServices {
    async execute() {
        const produtos = await clientePrisma.produtos.findMany({})
        return (produtos)
    }
}


export { ListarProdutoServices }