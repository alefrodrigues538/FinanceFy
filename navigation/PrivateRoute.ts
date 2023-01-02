import { getData } from '../hooks/useAsyncStorage'

async function PrivateRoute() {
    const token = await getData('TOKEN');

    return !!token;
}

export default PrivateRoute