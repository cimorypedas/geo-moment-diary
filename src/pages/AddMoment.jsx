import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import CameraInput from "../components/CameraInput";

import { saveMoment } from "../services/momentService";

import Swal from "sweetalert2";

function AddMoment() {
    const navigate = useNavigate();

    const [judul, setJudul] = useState("");
    const [catatan, setCatatan] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [image, setImage] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {

        handleGetLocation(false);

    }, []);

    const handleGetLocation = (showAlert = true) => {

    if (!navigator.geolocation) {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Browser tidak mendukung Geolocation."
                });

                return;

            }

            navigator.geolocation.getCurrentPosition(

                (position) => {

                    setLatitude(position.coords.latitude);

                    setLongitude(position.coords.longitude);

                    if (showAlert) {

                        Swal.fire({

                            icon: "success",

                            title: "Lokasi Berhasil",

                            text: "Lokasi berhasil diambil.",

                            timer: 1200,

                            showConfirmButton: false

                        });

                    }

                },

                () => {

                    Swal.fire({

                        icon: "error",

                        title: "Gagal",

                        text: "Lokasi tidak dapat diambil."

                    });

                }

            );

        };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const moment = {
            id: Date.now(),
            judul,
            catatan,
            tanggal,
            foto: image,
            latitude,
            longitude,
        };

        await saveMoment(moment);

        Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Moment berhasil disimpan.",
            timer: 1500,
            showConfirmButton: false,
        }).then(() => {
            navigate("/");
        });
    };

    return (
        <Layout>
            <h3 className="mb-4">Tambah Moment</h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">
                        Judul
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={judul}
                        onChange={(e) => setJudul(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Isi Catatan
                    </label>

                    <textarea
                        className="form-control"
                        rows="4"
                        value={catatan}
                        onChange={(e) => setCatatan(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Tanggal
                    </label>

                    <input
                        type="date"
                        className="form-control"
                        value={tanggal}
                        onChange={(e) => setTanggal(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Foto
                    </label>

                    <CameraInput
                        image={image}
                        setImage={setImage}
                    />
                </div>

                <div className="mb-3">

                    <button

                        type="button"

                        className="btn btn-primary w-100"

                        onClick={handleGetLocation}

                    >

                        📍 Ambil Lokasi Saya

                    </button>

                </div>


                <div className="mb-3">
                    <label className="form-label">
                        Latitude
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Longitude
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success w-100"
                >
                    Simpan
                </button>

            </form>

        </Layout>
    );
}

export default AddMoment;