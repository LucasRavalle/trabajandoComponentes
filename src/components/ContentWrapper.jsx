import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table'

export default function ContentWrapper(){

    const genres = ["Acción","Animación","Aventura","Ciencia Ficción","Comedia","Documental","Drama","Fantasia","Infantiles","Musical"]

    return(
        <div>
            <TopBar/>
            <ContentRowTop genres={genres} />
            <Table/>
            <Footer/>
        </div>
    )
}