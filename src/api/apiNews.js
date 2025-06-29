// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// export const getNews = async ({page_number = 1, page_size = 10, category}) => {
// 	try {
// 		const response = await axios.get(`${BASE_URL}search`, {
// 			params: { apiKey: API_KEY, page_number, page_size, category },
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const getCategories = async () => {
// 	try {
// 		const response = await axios.get(`${BASE_URL}available/categories`, {
// 			params: { apiKey: API_KEY },
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };


//-----------------------------------

import { mockNews } from "./mockNews";

export const getNews = async ({ page_number = 1, page_size = 10, category }) => {
	try {
		// Симуляция задержки загрузки
		await new Promise((res) => setTimeout(res, 500));

		// Фильтрация по категории (если указана и не "All")
		const filtered = category && category !== "All"
			? mockNews.filter((item) => item.category === category)
			: mockNews;

		// Пагинация
		const startIndex = (page_number - 1) * page_size;
		const paginated = filtered.slice(startIndex, startIndex + page_size);

		return {
			total: filtered.length,
			page_number,
			page_size,
			news: paginated,
		};
	} catch (error) {
		console.log(error);
	}
};

export const getCategories = async () => {
	try {
		await new Promise((res) => setTimeout(res, 300));
		return {
			categories: ["react", "frontend", "javascript", "typescript", "design", "ai", "css"],
		};
	} catch (error) {
		console.log(error);
	}
};

