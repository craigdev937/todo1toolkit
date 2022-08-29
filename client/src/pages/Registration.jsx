import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../global/AuthSlice";
import { AUTH } from "../global/AuthAPI";

export const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        name: "", email: "", password: ""
    });
    const { name, email, password } = formData;
    const { error, loading, user } = useSelector((state) => state.auth);

    React.useEffect(() => {
        if (user) {
            navigate("/login");
        }
        dispatch(reset());
    }, [dispatch]);

    const handleChange = (event) => {
        setFormData((prevState) => ({...prevState, 
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name, email, password
        };
        dispatch(AUTH.Register(payload));
    };

    return (
        <React.Fragment>
            <section className="heading">
                <h1><FaUser />Register</h1>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <section className="form__group">
                        <input 
                            className="form__control" 
                            placeholder="Enter your name"
                            type="text" 
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </section>
                    <section className="form__group">
                        <input 
                            className="form__control"
                            placeholder="Enter your email"
                            type="text" 
                        />
                    </section>
                    <section className="form__group">
                        <input 
                            className="form__control"
                            placeholder="Enter your password"                            
                            type="password" 
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </section>
                    <section className="form__group">
                        <button className="btn btn-block">
                            Submit
                        </button>
                    </section>
                </form>
            </section>
        </React.Fragment>
    );
};



