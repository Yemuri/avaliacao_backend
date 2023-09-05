import clientePrisma from "../../prisma"
// nome, fabricante, quantidade, preco  

interface CriarProdutos {
    nome: string
    fabricante: string
    quantidade: string
    preco: string
}

class CriarProdutoServices {
    async execute({
        nome,
        fabricante,
        quantidade,
        preco
    }: CriarProdutos) {
        if (!nome || !fabricante || !quantidade || !preco) {
            throw new Error("Não é possível deixar campos em branco");
        }

        await clientePrisma.produtos.create({
            data: {
                nome: nome,
                fabricante: fabricante,
                quantidade: quantidade,
                preco: preco
            }
        })
        return { dados: 'O produto foi cadastrado com sucesso' }

    }
}

export { CriarProdutoServices }