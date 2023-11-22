
const Card = (props) => {
    return <>
    <div className="card w-25">
        <img src={props.link} class="card-img-top object-fit-fill" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>
    </>
};

export default Card;