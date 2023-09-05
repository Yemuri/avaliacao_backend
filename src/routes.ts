import { Router } from 'express'
import { CriarClienteController } from './controllers/Clientes/CriarClienteController'
import { MostrarUsuarioController } from './controllers/Usuarios/ListarUsuarioController'
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { DeletarUsuarioController } from './controllers/Usuarios/DeletarUsuarioController'
import { MostrarClienteController } from './controllers/Clientes/ListarClienteController'
import { DeletarClienteController } from './controllers/Clientes/DeletarClienteController'
import { CriarProdutoController } from './controllers/Produtos/CriarProdutoController'
import { MostrarProdutoController } from './controllers/Produtos/ListarProdutoController'
import { DeletarProdutoController } from './controllers/Produtos/DeletarProdutoController'




const rota = Router()

//Usuários
rota.post('/CriarUsuarios', new CriarUsuarioController().handle)
rota.get('/MostrarUsuarios', new MostrarUsuarioController().handle)
rota.delete('/DeletarUsuarios', new DeletarUsuarioController().handle)

//Clientes
rota.post('/CriarClientes', new CriarClienteController().handle)
rota.get('/MostrarClientes', new MostrarClienteController().handle)
rota.delete('/DeletarClientes', new DeletarClienteController().handle)

//Produtos
rota.post('/CriarProdutos', new CriarProdutoController().handle)
rota.get('/MostrarProdutos', new MostrarProdutoController().handle)
rota.delete('/DeletarProdutos', new DeletarProdutoController().handle)



export { rota }