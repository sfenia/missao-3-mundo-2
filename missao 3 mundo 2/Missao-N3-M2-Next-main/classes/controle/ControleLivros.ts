import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
    {
        "codigo": 1,
        "codEditora": 1,
        "titulo": "O senhor dos anéis - A sociedade do anel",
        "resumo": "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.",
        "autores": ['J.R.R Tolkien']
    },{
        "codigo": 2,
        "codEditora": 2,
        "titulo": "O hobbit",
        "resumo": "Escrito para os filhos de J.R.R Tolkien, o Hobbit conquistou sucesso imediato quando foi publicado em 1937. Vendeu milhões de cópias em todo o mundo e estabeleceu-se como um dos livros mais influente da nossa geração.",
        "autores": ['J.R.R Tolkien']
    },{
        "codigo": 3,
        "codEditora": 3,
        "titulo": "A primavera da pontuação",
        "resumo": "Um livro que começa com um ponto final que quase vai para o beleléu promete! Um livro que, de um ponto a outro, mata de rir com quiproquó que tumultua o Reino de Ponto Alegre, território de nossa doidivanas Lingua Portuguesa",
        "autores": ['Vitor Ramil']
    },
]

class ControleLivros {
    obterLivros(){
        return livros
    }

    incluir(livro: Livro){
        let Livros = this.obterLivros()
        let maxId = Livros.reduce(
            (max, Livros) => (Livros["codigo"] > max ? Livros["codigo"] : max),0);
        livro.codigo = maxId+1
        livros.push(livro)
    }

    excluir(codigo:number){
        let index: number = this.obterLivros().findIndex(livro => livro["codigo"] === codigo )
        this.obterLivros().splice(index,1)
    }
}

export default ControleLivros