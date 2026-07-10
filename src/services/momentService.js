import { dbPromise } from "./db";

const STORAGE_KEY = "geo_moment_diary";

/*
|--------------------------------------------------------------------------
| Migrasi otomatis dari LocalStorage ke IndexedDB
|--------------------------------------------------------------------------
*/

async function migrateData() {

    const db = await dbPromise;

    const count = await db.count("moments");

    if (count > 0) return;

    const oldData = localStorage.getItem(STORAGE_KEY);

    if (!oldData) return;

    const moments = JSON.parse(oldData);

    for (const item of moments) {

        await db.put("moments", item);

    }

    console.log("✅ Data berhasil dimigrasikan ke IndexedDB");

}

/*
|--------------------------------------------------------------------------
| GET ALL
|--------------------------------------------------------------------------
*/

export async function getMoments() {

    await migrateData();

    const db = await dbPromise;

    return await db.getAll("moments");

}

/*
|--------------------------------------------------------------------------
| SAVE
|--------------------------------------------------------------------------
*/

export async function saveMoment(moment) {

    await migrateData();

    const db = await dbPromise;

    await db.put("moments", moment);

}

/*
|--------------------------------------------------------------------------
| GET BY ID
|--------------------------------------------------------------------------
*/

export async function getMomentById(id) {

    await migrateData();

    const db = await dbPromise;

    return await db.get(
        "moments",
        Number(id)
    );

}

/*
|--------------------------------------------------------------------------
| UPDATE
|--------------------------------------------------------------------------
*/

export async function updateMoment(moment) {

    await migrateData();

    const db = await dbPromise;

    await db.put(
        "moments",
        moment
    );

}

/*
|--------------------------------------------------------------------------
| DELETE
|--------------------------------------------------------------------------
*/

export async function deleteMoment(id) {

    await migrateData();

    const db = await dbPromise;

    await db.delete(
        "moments",
        Number(id)
    );

}