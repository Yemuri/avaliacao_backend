import clientePrisma from "../../prisma"

interface CriarCliente {
    id: number
    nome: string
    cpf: string
    celular: string
    rua: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
}

class CriarClienteServices {
    async execute({
        id,
        nome,
        cpf,
        celular,
        rua,
        complemento,
        bairro,
        cidade,
        estado
    }: CriarCliente) {
        if (!nome || !cpf || !celular || !rua || !bairro || !cidade || !estado) {
            throw new Error("Não são permitidos campos em branco");
        }
        const docRegistrado = await clientePrisma.clients.findFirst({
            where: {
                cpf: cpf
            }
        })
        if (docRegistrado) {
            throw new Error("CPF já registrado");
        }

        await clientePrisma.clients.create({
            data: {
                id: id,
                nome: nome,
                cpf: cpf,
                celular: celular,
                rua: rua,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            }
        })
        return { data: 'Dados salvos com sucesso' }
    }
}

export { CriarClienteServices }