import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";
import type { NewsApiResponse } from "../../interfaces";

export default function LatestNews() {
	const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

	return (
		<div className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</div>
	);
}
