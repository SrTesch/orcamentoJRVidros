import logo from "../../../images/logo.png"
import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div>
            <p>
        <h1>Seja Bem-Vindo ao sistema da <br /> JR Vidros</h1>
        </p>
        <img src={logo} alt="Logo JR Vidros" />
        <nav>
            <Link to="/temperado" className="buttonsHome">Vidro Temperado</Link>
            <Link to="/comum" className="buttonsHome">Vidro Comum</Link>
            <Link to="/projetos" className="buttonsHome">Projetos</Link>
            <Link to="/fechamento" className="buttonsHome">Fechamento</Link>
            <Link to="/adm" className="buttonsHome">Editar valores</Link>
        </nav>
        </div>
    )
}