const BASE_URL = 'http://localhost:42069';

export const fetchHelper = async (url: string) => {
    try {
        const resp = await fetch(BASE_URL + url);

        if (resp.status === 200) {
            return await resp.json();
        }
        return null;
    } catch (e) {
        return null;
    }
}
