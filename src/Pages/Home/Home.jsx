import CountryCard from "../../Components/CountryCard/CountryCard";
import Banner from "../../Components/Header/Banner/Banner";
import Benefit from "../../Components/Header/Benifit/Benefit";
import HomeCard from "../../Components/HomeCard/HomeCard";


const Home = () => {
    return (
        <div>
            <div className="mt-10">
               <Banner></Banner>
            </div>
            <div className="mt-8">
                <Benefit></Benefit>
                <HomeCard></HomeCard>
                <CountryCard></CountryCard>
            </div>
        </div>
    );
};

export default Home;