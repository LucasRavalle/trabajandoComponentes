import './Table.css'
import Row from './Row'

export default function Table(){

    const fila = [
        {
            titulo:"It",
            duracion:120,
            rating:5,
            genero:["Terror", "Acción"],
            premios:2
        },
        {
            titulo:"Figth Club",
            duracion:105,
            rating:8,
            genero:["Drama", "Suspenso", "Acción"],
            premios:5
        },
    ]

    return(
        <div className='table-responsive divTable'>
            <table>
                <tr>
                    <th>Titulo</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
                <Row filas={fila}/>
            </table>
        </div>
    )
}