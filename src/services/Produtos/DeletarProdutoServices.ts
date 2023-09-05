import clientePrisma from "../../prisma"

interface DeletarProduto {
    id: string
}

class DeletarProdutoServices {
    async execute({ id }: DeletarProduto) {
        await clientePrisma.produtos.delete({
            where: {
                id: id
            }
        })
        return { dados: ` O produto ${id} foi apagado com sucesso` }
    }

}

export { DeletarProdutoServices }