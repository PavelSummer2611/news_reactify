import React from "react";
import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";

export default function LatestNews() {
	const { data, isLoading } = useFetch(getLatestNews);

	return (
		<div className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</div>
	);
}
