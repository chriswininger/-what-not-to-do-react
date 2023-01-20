import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div className="wntdr-page">
            <h1>
               Welcome
            </h1>

            <main>
                <ul>
                    <li>
                        <Link to="/example-1">Example 1</Link>
                    </li>
                </ul>
            </main>
        </div>
    )
}
