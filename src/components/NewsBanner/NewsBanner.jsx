import React from "react";
import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import withSkeleton from "../../helpers/hocs/withSkeleton";

const NewsBanner = ({ item }) => {
	return (
		<header className={styles.banner}>
			<Image image={item.image} />
			<h1 className={styles.title}>{item.title}</h1>
			<p className={styles.extra}>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</header>
	);
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
