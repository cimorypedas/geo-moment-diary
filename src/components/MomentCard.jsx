import { Link } from "react-router-dom";

function MomentCard({
    id,
    title,
    date,
    location,
    photo
}) {

    return (

        <div className="card shadow-lg border-0 rounded-4 overflow-hidden mb-4">

            {
                photo ? (

                    <img
                        src={photo}
                        alt={title}
                        className="card-img-top"
                        style={{
                            height: "220px",
                            objectFit: "cover"
                        }}
                    />

                ) : (

                    <div
                        className="bg-light d-flex justify-content-center align-items-center"
                        style={{
                            height: "220px"
                        }}
                    >

                        <div className="text-center">

                            <i
                                className="bi bi-camera"
                                style={{
                                    fontSize: "70px",
                                    color: "#adb5bd"
                                }}
                            ></i>

                            <p className="mt-2 text-muted">

                                Belum Ada Foto

                            </p>

                        </div>

                    </div>

                )
            }

            <div className="card-body">

                <h5 className="fw-bold mb-3">

                    📷 {title}

                </h5>

                <div className="mb-2">

                    <span className="badge bg-success">

                        📅 {date}

                    </span>

                </div>

                <div className="mb-3">

                    <span className="badge bg-secondary">

                        📍 {location}

                    </span>

                </div>

                <Link
                    to={`/detail/${id}`}
                    className="btn btn-primary w-100 rounded-pill"
                >

                    <i className="bi bi-eye-fill me-2"></i>

                    Lihat Detail

                </Link>

            </div>

        </div>

    );

}

export default MomentCard;