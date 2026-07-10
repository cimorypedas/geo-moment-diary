import Layout from "../components/Layout";

function About() {
    return (
        <Layout>

            <div className="text-center">

                <img
                    src="public/icon-192.png"
                    alt="Geo Moment Diary"
                    width="120"
                    className="mb-3"
                />

                <h2 className="fw-bold">

                    Geo Moment Diary

                </h2>

                <p className="text-muted">

                    Version 1.0

                </p>

            </div>

            <div className="card shadow border-0 rounded-4 mt-4">

                <div className="card-body">

                    <h5 className="mb-3">

                        📖 Tentang Aplikasi

                    </h5>

                    <p>

                        Geo Moment Diary merupakan aplikasi mobile berbasis
                        Progressive Web App (PWA) yang digunakan untuk
                        menyimpan momen perjalanan lengkap dengan foto,
                        lokasi GPS, dan catatan pribadi.

                    </p>

                </div>

            </div>

            <div className="card shadow border-0 rounded-4 mt-4">

                <div className="card-body">

                    <h5 className="mb-3">

                        ⚙ Teknologi

                    </h5>

                    <ul className="list-group list-group-flush">

                        <li className="list-group-item">

                            ⚛ React JS

                        </li>

                        <li className="list-group-item">

                            🎨 Bootstrap 5

                        </li>

                        <li className="list-group-item">

                            📱 Progressive Web App (PWA)

                        </li>

                        <li className="list-group-item">

                            💾 Local Storage

                        </li>

                        <li className="list-group-item">

                            📍 Geolocation API

                        </li>

                        <li className="list-group-item">

                            📷 Camera API

                        </li>

                        <li className="list-group-item">

                            🗺 Google Maps

                        </li>

                    </ul>

                </div>

            </div>

            <div className="card shadow border-0 rounded-4 mt-4">

                <div className="card-body text-center">

                    <h5>

                        👨‍💻 Pengembang

                    </h5>

                    <p className="mb-1">

                        Andi Haganta Ginting

                    </p>

                    <p className="text-muted">

                        Mata Kuliah Pemrograman Perangkat Bergerak

                    </p>

                    <small>

                        © 2026 Geo Moment Diary

                    </small>

                </div>

            </div>

        </Layout>
    );
}

export default About;