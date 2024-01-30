import { BrowserRouter, Route, Routes } from "react-router-dom";
import Temperado from "../pages/temperado";
import Comum from "../pages/comum";
import Projetos from "../pages/projetos";
import Fechamento from "../pages/fechamento";
import Adm from "../pages/adm";

export default function RouterComponent(){
    return(
        <div className="routes">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Temperado />} />
                    <Route path="/temperado" element={<Temperado />}/>
                    <Route path="/comum" element={<Comum />}/>
                    <Route path="/projetos" element={<Projetos />}/>
                    <Route path="/fechamento" element={<Fechamento />} />
                    <Route path="/adm" element={<Adm />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}