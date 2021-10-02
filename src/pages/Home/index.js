import react from "react";
import * as S from './styled'
import Top from '../../components/Atomic/Top'
import Menu from "../../components/Atomic/Menu";
import SlideShow from "../../components/Slide";
import Service from "../../components/Serviços";
import Footer from "../../components/Footer";


const Home = () => {

    return (
        < >
            <header>
                <Top/>
                <Menu/>
                
            </header>
            
                <SlideShow/>
                <Service/>
                <Footer/>
        </>
    )
}

export default Home;