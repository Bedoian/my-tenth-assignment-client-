import Banner from "../Components/Header/Banner";
import Benefit from "../Components/Header/Benefit";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <Banner></Banner>
            </div>
            <div className="mt-8">
                <Benefit></Benefit>
            </div>
        </div>
    );
};

export default Home;