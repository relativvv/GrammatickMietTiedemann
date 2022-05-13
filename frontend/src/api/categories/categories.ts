import { fetchHelper } from '../fetchHelper';
import { Category } from '../../types/categories';


export const getAllCategories = async (): Promise<Category[]> => {
    return await fetchHelper('/category/all');
}

export const getQuestions = async (id: number) => {
    return await fetchHelper(`/category/${id}`);
}
