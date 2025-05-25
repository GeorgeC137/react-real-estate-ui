import "./homepage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
    return ( 
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        lorem ipsum, my ideal day starts at 4AM. I wake up then meditate for 20 mins. After that I hit the gym/workout till 5:00AM. Then I head to the shower, read a book till 5:45AM. then I start my work at 6AM.. 
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>8+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>17</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>503+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default HomePage;