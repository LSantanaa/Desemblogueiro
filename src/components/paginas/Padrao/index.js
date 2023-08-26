import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function Padrao({children}){
  return(
      <main>
        <Banner/>
        <Outlet/>
        {children}
      </main>
     )
}