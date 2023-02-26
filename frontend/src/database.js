import { openDB } from "idb";

const setupDatabase = async () => {
  const db = await openDB("sesh-logger", 1, {
    upgrade(db) {
      db.createObjectStore("sessions");
    },
  });

  return db;
};

const putInDatabase = async (db, store, key, content) => {
  (await db).put(store, content, key);
};

const getFromDatabase = async (db, store, key) => {
  return (await db).get(store, key);
};

const getAllFromDatabase = async (db, store) => {
  return (await db).getAll(store);
};

export { setupDatabase, putInDatabase, getFromDatabase, getAllFromDatabase };
