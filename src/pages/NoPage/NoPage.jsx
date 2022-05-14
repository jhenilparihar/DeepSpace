import { Link } from "react-router-dom";
import './style.css'
import compass from './compass.gif'
const NoPage = () => {
    return (
        <>
        <div class="contain">
            <div class="big_text">
                <h1>4<img class="compass" src={compass} />4</h1>
                <h2>This page is lost.</h2>
                <p>We've explored deep and wide,<br /> but we can't find the page you were looking for.</p>
                <Link to="/">Navigate back home</Link>
            </div>
        </div>
        </>
    )
};
export default NoPage;
