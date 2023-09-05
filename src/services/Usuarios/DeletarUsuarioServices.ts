import clientePrisma from "../../prisma"

interface DeletarUsuario {
    id: string
}
class DeletarUsuarioServices {
    async execute({ id }: DeletarUsuario) {
        await clientePrisma.user.delete({
            where: {
                id: id
            }
        })
        return { dados: 'Registro apagado com sucesso' }

    }
}

export { DeletarUsuarioServices }