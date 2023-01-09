import firebase from "../config/firebase";

class Database<T> {
    async create(ref: string, data: T): Promise<void> {
        const dataRef = firebase.database().ref(ref);
        await dataRef.set(data);
    }

    async get(ref: string): Promise<T> {
        const dataRef = firebase.database().ref(ref);
        const snapshot = await dataRef.once("value");
        return snapshot.val();
    }

    async update(ref: string, data: T): Promise<void> {
        const dataRef = firebase.database().ref(ref);
        await dataRef.update(data);
    }

    async delete(ref: string): Promise<void> {
        const dataRef = firebase.database().ref(ref);
        await dataRef.remove();
    }
}

export default Database;