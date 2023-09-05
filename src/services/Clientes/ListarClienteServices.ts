import clientePrisma from "../../prisma"

class MostrarClienteServices {
    async execute() {
        const clientes = await clientePrisma.clients.findMany({})
        return (clientes)
    }
}

export { MostrarClienteServices }