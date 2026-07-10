import { openDB } from "idb";

export const dbPromise = openDB("GeoMomentDiaryDB", 1, {

    upgrade(db) {

        if (!db.objectStoreNames.contains("moments")) {

            db.createObjectStore("moments", {
                keyPath: "id"
            });

        }

    },

});