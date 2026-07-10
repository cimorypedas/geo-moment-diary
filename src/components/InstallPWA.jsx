import { useEffect, useState } from "react";

function InstallPWA() {

    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {

        const handler = (e) => {

            e.preventDefault();

            setDeferredPrompt(e);

        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => {

            window.removeEventListener("beforeinstallprompt", handler);

        };

    }, []);

    const handleInstall = async () => {

        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

        setDeferredPrompt(null);

    };

    if (!deferredPrompt) return null;

    return (

        <button
            className="btn btn-success mb-4 w-100"
            onClick={handleInstall}
        >

            📲 Install Geo Moment Diary

        </button>

    );

}

export default InstallPWA;