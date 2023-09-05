import clientePrisma from "../../prisma"
import { hash } from 'bcryptjs'

interface CriarUsuario {
    nome: string
    email: string
    senha: string
}

class CriarUsuarioServices {
    async execute({ nome, email, senha }: CriarUsuario) {
        if (nome == '' || email == '' || senha == '') {
            throw new Error("Não é permitido campo em branco");
        }
        const emailCad = await clientePrisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (emailCad) {
            throw new Error("E-mail já consta cadastrado");
        }
        const senhaCriptografada = await hash(senha, 8)
        const usuario = await clientePrisma.user.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCriptografada
            },
            select: {
                id: true,
                nome: true,
                email: true,
                senha: true
            }
        })
        return { dados: usuario }

    }

}

export { CriarUsuarioServices }