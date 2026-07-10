import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import FloatingButton from "../components/FloatingButton";
import MomentCard from "../components/MomentCard";

import { getMoments } from "../services/momentService";
import InstallPWA from "../components/InstallPWA";

function Home() {

    const [moments, setMoments] = useState([]);
    const location = useLocation();

    useEffect(() => {

            const loadMoments = async () => {

                const data = await getMoments();

                data.sort((a, b) => b.id - a.id);

                setMoments(data);

            };

            loadMoments();

        }, [location]);

    return (
        <Layout>
            
            <div className="text-center mb-4">

                <h2 className="fw-bold">

                    📖 Geo Moment Diary

                </h2>

                <p className="text-muted">

                    Simpan Momen Terbaikmu 📸

                </p>

                <span className="badge bg-primary fs-6">

                    Total Moment : {moments.length}

                </span>

            </div>

            <InstallPWA />

            {
                moments.length === 0 ? (

                    <div className="text-center mt-5">

                        <div
                            style={{
                                fontSize: "80px"
                            }}
                        >

                            📷

                        </div>

                        <h4>

                            Belum Ada Moment

                        </h4>

                        <p className="text-muted">

                            Tekan tombol + untuk membuat moment pertamamu.

                        </p>

                    </div>

                ) : (

                    moments.map((item) => (

                        <MomentCard
                            key={item.id}
                            id={item.id}
                            title={item.judul}
                            date={item.tanggal}
                            location={`${Number(item.latitude).toFixed(5)}, ${Number(item.longitude).toFixed(5)}`}
                            photo={item.foto}
                        />

                    ))

                )
            }

            <FloatingButton />

        </Layout>
    );
}

export default Home;