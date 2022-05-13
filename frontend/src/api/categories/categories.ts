import { fetchHelper } from '../fetchHelper';


export const getAllCategories = async () => {
    return await fetchHelper('/category/all');
}

export const getQuestions = async (id: number) => {
    return await fetchHelper(`/category/${id}`);
}
