import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TrandingToys from "./TrandingToys/TrandingToys";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <TrandingToys></TrandingToys>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;