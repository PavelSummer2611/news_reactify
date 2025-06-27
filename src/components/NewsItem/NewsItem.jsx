import React from "react";
import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

export default function NewsItem({ item }) {
	return (
		<li className={styles.item}>
			<div
				className={styles.wrapper}
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<div className={styles.info}>
				<h1 className={styles.title}>{item.title}</h1>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	);
}
