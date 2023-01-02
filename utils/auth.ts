import { getData } from "../hooks/useAsyncStorage";

export async function isLoggedIn(): Promise<boolean> {
    const token = await getData('TOKEN');

    return token ? true : false;

}