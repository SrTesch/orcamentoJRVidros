export default function Nav(){
    return(
        <div>
            <nav>
                <p style={{marginTop: "5px"}}>Páginas</p>
                <a href="/temperado" className="buttonsHome">Vidro Temperado</a>
                <a href="/comum" className="buttonsHome">Vidro Comum</a>
                <a href="/projetos" className="buttonsHome">Projetos</a>
                <a href="/fechamento" className="buttonsHome">Fechamento</a>
                <a href="/adm" className="buttonsHome">Editar valores</a>
            </nav>
        </div>
    )
}