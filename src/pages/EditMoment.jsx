import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Layout from "../components/Layout";
import CameraInput from "../components/CameraInput";

import {
    getMomentById,
    updateMoment
} from "../services/momentService";

function EditMoment() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [moment, setMoment] = useState(null);

    const [judul, setJudul] = useState("");
    const [catatan, setCatatan] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {

        const loadMoment = async () => {

            const data = await getMomentById(id);

            if (data) {

                setMoment(data);

                setJudul(data.judul);
                setCatatan(data.catatan);
                setTanggal(data.tanggal);
                setLatitude(data.latitude);
                setLongitude(data.longitude);
                setImage(data.foto || "");

            }

            setLoading(false);

        };

        loadMoment();

    }, [id]);

    if (loading) {

        return (

            <Layout>

                <div className="text-center mt-5">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    />

                    <p className="mt-3">

                        Memuat data...

                    </p>

                </div>

            </Layout>

        );

    }

    if (!moment) {

        return (

            <Layout>

                <div className="alert alert-danger">

                    Data tidak ditemukan.

                </div>

            </Layout>

        );

    }

    const handleGetLocation = () => {

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

                Swal.fire({

                    icon: "success",

                    title: "Lokasi Berhasil",

                    text: "Lokasi berhasil diperbarui.",

                    timer: 1200,

                    showConfirmButton: false

                });

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

        await updateMoment({

            id: moment.id,

            judul,

            catatan,

            tanggal,

            foto: image,

            latitude,

            longitude

        });

        await Swal.fire({

            icon: "success",

            title: "Berhasil",

            text: "Moment berhasil diperbarui.",

            timer: 1500,

            showConfirmButton: false

        });

        navigate("/");

    };

    return (

        <Layout>

            <h3 className="mb-4">

                ✏️ Edit Moment

            </h3>

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
                        readOnly
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
                        readOnly
                    />

                </div>

                <div className="d-flex gap-2">

                    <button
                        type="submit"
                        className="btn btn-warning flex-fill"
                    >

                        Simpan Perubahan

                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate(-1)}
                    >

                        Batal

                    </button>

                </div>

            </form>

        </Layout>

    );

}

export default EditMoment;