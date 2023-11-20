import "./Home.css"

const Home = (props) => {
    return <div className="container overflow-hidden m-5">
        <h1>Introduction to {props.title}</h1>
        <p>Descripción de texto. La flor es la estructura reproductiva característica de las plantas llamadas espermatofitas o fanerógamas. La función de una flor es producir semillas a través de la reproducción sexual. Para las plantas, las semillas son la próxima generación y sirven como el principal medio a través del cual las especies se perpetúan y se propagan.</p>
        <div className="img_square">
            <img className="shadow object-fit-cover border rounded" src={props.link}/>
        </div>
    </div>
};

export default Home;
