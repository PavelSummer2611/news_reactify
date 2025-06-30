import React from "react";
import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";

export default function LatestNews({ banners, isLoading }) {
	return (
		<div className={styles.section}>
			<BannersList banners={banners} isLoading={isLoading} />
		</div>
	);
}
