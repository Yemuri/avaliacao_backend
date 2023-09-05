import clientePrisma from "../../prisma";

class MostrarUsuarioServices {
    async execute() {
        const usuarios = await clientePrisma.user.findMany({})
        return (usuarios)
    }
}

export { MostrarUsuarioServices }