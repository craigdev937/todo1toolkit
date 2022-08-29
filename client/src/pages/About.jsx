import React from "react";

export const About = () => {
    const [message, setMessage] = React.useState("");
    let { number } = useParams();

    React.useEffect(() => {
        if (number) {
            setMessage("The Number is " + number);
        } else {
            setMessage("No number was provided.");
        }
    }, []);

    return (
        <React.Fragment>
            <h1>About</h1>
            <p>{message}</p>
        </React.Fragment>
    );
};



