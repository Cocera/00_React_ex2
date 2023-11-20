import "./Header.css"

const Header = () => {
    return <div className="container overflow-hidden m-5">
        <h1 className="col">Family flowers &#127800;</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Chrysanthemum</a></li>
                <li class="breadcrumb-item"><a href="#">Tulip</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">Lily</a></li>
            </ol>
        </nav>
    </div>
};

export default Header;