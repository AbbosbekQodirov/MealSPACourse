import { API_URL } from "./config";

const getMealById = async (mealId) => {

    try {
        const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
        return await response.json()
    } catch (err) {
        return "error";
    }


}

const getAllCategories = async () => {
    try {
        const response = await fetch(API_URL + 'categories.php');
        return await response.json();
    } catch (err) {
        return "error";
    }
}

const getFilterCategory = async (categoryName) => {

    try {
        const response = await fetch(API_URL + 'filter.php?c=' + categoryName)
        return await response.json()
    } catch (err) {
        return "error";
    }


}

export { getMealById, getAllCategories, getFilterCategory }