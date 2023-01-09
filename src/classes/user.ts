import { useAppDispatch } from "../store";

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}
class User {
    [key: string]: any;
    id: string;
    name: string;
    email: string;
    password: string;

    constructor(id: string, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static async register(user: User) {
        const Dispatch = useAppDispatch()
    }

    static async save(user: User) {

    }

    static async delete(user: User) {

    }

    static async getUser(user: User) {

    }

    get(attributes: string[] = []) {

        if (attributes.length === 0) {
            return {
                name: this.name,
                email: this.email,
                password: this.password
            }
        }

        let result = {} as User;
        for (let attribute of attributes) {
            result[attribute] = this[attribute];
        }
        return result;
    }

}

export default User;