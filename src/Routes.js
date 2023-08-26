import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "components/paginas/Inicio";
import SobreMim from "components/paginas/SobreMim";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Padrao from "components/paginas/Padrao";
import Post from "components/paginas/Post";
import NaoEncontrado from "components/paginas/NaoEncontrado";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />
      <Routes>
        <Route path="/" element={<Padrao/>}>
          <Route index Component={Inicio} />
          <Route path="sobremim" Component={SobreMim} />
        </Route>       
        <Route path="posts/:id/*" Component={Post} />
        <Route path="*" Component={NaoEncontrado}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
