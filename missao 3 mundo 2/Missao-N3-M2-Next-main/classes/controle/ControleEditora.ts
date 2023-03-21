import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
    {
        "codEditora": 1,
        "nome": "Amazon",
    },{
        "codEditora": 2,
        "nome": "Submarino",
    },{
        "codEditora": 3,
        "nome": "Intríseca",
    },
]

class ControleEditoras {
    getNomeEditora(codEditora:number){
        return this.getEditoras().filter((editora) => editora.codEditora === codEditora )[0].nome
    }

    getEditoras(){
        return editoras
    }
}

export default ControleEditoras