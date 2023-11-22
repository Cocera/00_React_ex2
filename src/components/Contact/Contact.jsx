import React, { useEffect, useState } from "react";

const Contact = () => {

    const initialValue = {
        email: "",
        name: "",
        comment: ""
    };

    const [data, setData] = useState(initialValue);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    useEffect((() => {
        if (data.name.length < 3) {
          setMessage("Name must be at least 3 characters");
          setBtnDisabled(true);
        } else {
          setMessage(null);
          setBtnDisabled(false);
        }
      }, [data]));

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("info form", data);
        console.log(`Soy ${data.name} y mi correo es ${data.email}`);
        setMessage("Formulario enviado con éxito :D ! ! !");
        setTimeout(() => {
          setData(initialValue);
          navigate("/");
        }, 3000);
      };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="email" name="email" onChange={handleInputChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="name" onChange={handleInputChange} className="form-control" id="floatingInput" placeholder="Your name"/>
                    <label>User name</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Write comment</label>
                    <textarea className="form-control" name="comment" onChange={handleInputChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" disabled={btnDisabled} className="btn btn-primary">Submit</button>
            </form>
            {message}
        </>
    );
};

export default Contact;