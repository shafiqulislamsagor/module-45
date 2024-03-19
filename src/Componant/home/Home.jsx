import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="flex gap-5">
                <a href="/header">Header</a>
                <a href="/about">About</a>
            </div>
            <h2>This is the home component</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;