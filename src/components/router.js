import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from './Cadastro.vue'
import Entrarnafila from './Entrarnafila.vue'
import Login from './Login.vue'
import Outback12 from './Outback12.vue'
import Confirmado from './Confirmado.vue'
import Home from './Home.vue'
import FilaRestaurante from './FilaRestaurante.vue'
import MeuRestaurante from './MeuRestaurante.vue'
import CadastroRestaurante from './CadastroRestaurante.vue'
import LoginAdmin from './LoginAdmin.vue'
import Admin from './Admin.vue'
import EditarConta from './EditarConta.vue'
import UserSpace from './UserSpace.vue'
import AlterarDados from './AlterarDados.vue'
import Historico from './Historico.vue'
import Restaurantes from './Restaurantes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/entrarnafila',
      name: 'EntrarnaFila',
      component: Entrarnafila,
    },
    {
      path: '/outback12',
      name: 'FilaOutback12',
      component: Outback12,
    },
    {
      path: '/confirmado',
      name: 'Confirmado',
      component: Confirmado,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/filaRestaurante',
      name: 'FilaRestaurante',
      component: FilaRestaurante,
    },
    {
      path: '/meuRestaurante',
      name: 'MeuRestaurante',
      component: MeuRestaurante,
    },
    {
      path: '/cadastroRestaurante',
      name: 'CadastroRestaurante',
      component: CadastroRestaurante,
    },
    {
      path: '/espaco_usuario',
      name: 'EspacoUsuario',
      component: UserSpace,
    },
    {
      path: '/alterar_dados',
      name: 'AlterarDados',
      component: AlterarDados,
    },
    {
      path: '/historico',
      name: 'Historico',
      component: Historico,
    },
    {
      path: '/restaurantes',
      name: 'Restaurantes',
      component: Restaurantes,
    },
    {
      path: '/loginAdmin',
      name: 'LoginAdmin',
      component: LoginAdmin,
    },
    {
      path: '/editarConta',
      name: 'EditarConta',
      component: EditarConta,
    },
  ],
})
