// import "./Card.css";

const Card = (props) => {
    return <>
    <div class="card mb-3">
        <img src={props.link} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    </>
};

export default Card;