const BASE_URL = 'https://api.grammatickmiettiedemann.relativv.de';

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
