// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// export const getNews = async ({page_number = 1, page_size = 10, category, keywords}) => {
// 	try {
// 		const response = await axios.get(`${BASE_URL}search`, {
// 			params: { apiKey: API_KEY, page_number, page_size, category, keywords },
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const getLatesNews = async () => {
// 	try {
// 		const response = await axios.get(`${BASE_URL}latest-news`, {
// 			params: { apiKey: API_KEY },
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

export const getNews = async ({
	page_number = 1,
	page_size = 10,
	category,
	keywords,
}) => {
	try {
		// Симуляция задержки загрузки
		await new Promise((res) => setTimeout(res, 500));

		// Фильтрация по категории (если указана и не "All")
		let filtered =
			category && category !== "All"
				? mockNews.filter((item) => item.category === category)
				: mockNews;

		// Фильтрация по ключевым словам (если keywords переданы и не пустой массив)
		if (keywords && keywords.length > 0) {
			filtered = filtered.filter((item) =>
				item.keywords.some((kw) => keywords.includes(kw))
			);
		}

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

export const getLatestNews = async () => {
	try {
		// Симуляция сетевой задержки
		await new Promise((res) => setTimeout(res, 500));

		// Сортировка по дате публикации (от новых к старым)
		const sorted = [...mockNews].sort(
			(a, b) => new Date(b.published) - new Date(a.published)
		);

		// Возвращаем только первые 5
		const latest = sorted.slice(0, 25);

		return {
			news: latest,
		};
	} catch (error) {
		console.log("Ошибка в getLatestNews:", error);
	}
};

export const getCategories = async () => {
	try {
		await new Promise((res) => setTimeout(res, 300));
		return {
			categories: [
				"react",
				"frontend",
				"javascript",
				"typescript",
				"design",
				"ai",
				"css",
			],
		};
	} catch (error) {
		console.log(error);
	}
};
