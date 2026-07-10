import { useRef } from "react";

function CameraInput({ image, setImage }) {

    const fileInputRef = useRef();

    const handleChange = (event) => {

        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {

            setImage(reader.result);

        };

        reader.readAsDataURL(file);

    };

    return (

        <div>

            {
                image ? (

                    <img
                        src={image}
                        alt="Preview"
                        className="img-fluid rounded border mb-3"
                        style={{
                            maxHeight: "250px",
                            objectFit: "cover",
                            width: "100%"
                        }}
                    />

                ) : (

                    <div
                        className="border rounded d-flex justify-content-center align-items-center mb-3"
                        style={{
                            height: "220px",
                            background: "#f8f9fa"
                        }}
                    >

                        <div className="text-center">

                            <i
                                className="bi bi-camera"
                                style={{ fontSize: 60 }}
                            ></i>

                            <p className="mt-2">

                                Belum ada foto

                            </p>

                        </div>

                    </div>

                )
            }

            <input

                type="file"

                accept="image/*"

                capture="environment"

                className="d-none"

                ref={fileInputRef}

                onChange={handleChange}

            />

            <button

                type="button"

                className="btn btn-primary w-100"

                onClick={() => fileInputRef.current.click()}

            >

                📷 Ambil Foto

            </button>

        </div>

    );

}

export default CameraInput;