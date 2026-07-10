import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Layout from "../components/Layout";
import MapPreview from "../components/MapPreview";

import {
    getMomentById,
    deleteMoment,
} from "../services/momentService";

function DetailMoment() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [moment, setMoment] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadMoment = async () => {

            const data = await getMomentById(id);

            setMoment(data);

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

                <Link
                    to="/"
                    className="btn btn-secondary mt-3"
                >

                    Kembali

                </Link>

            </Layout>

        );

    }

    const handleDelete = async () => {

        const result = await Swal.fire({

            title: "Yakin ingin menghapus?",

            text: "Data yang dihapus tidak dapat dikembalikan.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonText: "Ya, Hapus",

            cancelButtonText: "Batal",

            confirmButtonColor: "#dc3545",

        });

        if (!result.isConfirmed) return;

        await deleteMoment(moment.id);

        await Swal.fire({

            icon: "success",

            title: "Berhasil",

            text: "Moment berhasil dihapus.",

            timer: 1500,

            showConfirmButton: false,

        });

        navigate("/");

    };

    const openGoogleMaps = () => {

        window.open(

            `https://www.google.com/maps?q=${moment.latitude},${moment.longitude}`,

            "_blank"

        );

    };

    return (

        <Layout>

            <div className="card shadow">

                {moment.foto && (

                    <img
                        src={moment.foto}
                        alt={moment.judul}
                        className="card-img-top"
                        style={{
                            height: "250px",
                            objectFit: "cover",
                        }}
                    />

                )}

                <div className="card-body">

                    <h3 className="mb-3">

                        {moment.judul}

                    </h3>

                    <hr />

                    <div className="mb-3">

                        <strong>Isi Catatan</strong>

                        <p className="mt-2">

                            {moment.catatan}

                        </p>

                    </div>

                    <div className="mb-3">

                        <strong>Tanggal</strong>

                        <p className="mt-2">

                            {moment.tanggal}

                        </p>

                    </div>

                    <div className="mb-3">

                        <strong>Latitude</strong>

                        <p className="mt-2">

                            {moment.latitude}

                        </p>

                    </div>

                    <div className="mb-3">

                        <strong>Longitude</strong>

                        <p className="mt-2">

                            {moment.longitude}

                        </p>

                    </div>

                    <div className="mb-4">

                        <h5 className="mb-3">

                            🗺️ Lokasi Moment

                        </h5>

                        <MapPreview
                            latitude={Number(moment.latitude)}
                            longitude={Number(moment.longitude)}
                        />

                    </div>

                    <div className="mb-4">

                        <button
                            className="btn btn-primary w-100"
                            onClick={openGoogleMaps}
                        >

                            📍 Buka di Google Maps

                        </button>

                    </div>

                    <div className="d-flex gap-2">

                        <Link
                            to={`/edit/${moment.id}`}
                            className="btn btn-warning"
                        >

                            Edit

                        </Link>

                        <button
                            className="btn btn-danger"
                            onClick={handleDelete}
                        >

                            Hapus

                        </button>

                        <Link
                            to="/"
                            className="btn btn-secondary"
                        >

                            Kembali

                        </Link>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default DetailMoment;