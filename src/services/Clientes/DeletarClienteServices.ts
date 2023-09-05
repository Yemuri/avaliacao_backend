import clientePrisma from "../../prisma"

interface DeletarCliente {
    id: number
}

class DeletarClienteServices {
    async execute({ id }: DeletarCliente) {
        await clientePrisma.clients.delete({
            where: {
                id: id
            }
        })
        return { dados: 'Registro apagado com sucesso' }

    }

}

export { DeletarClienteServices }