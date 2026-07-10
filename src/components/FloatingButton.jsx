import { Link } from "react-router-dom";

function FloatingButton() {

    return (

        <Link
            to="/add"
            className="btn btn-primary rounded-circle shadow"
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                width: "65px",
                height: "65px",
                fontSize: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >

            +

        </Link>

    );

}

export default FloatingButton;