"use client";

export default function Home() {
	return (
		<main>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				onClick={async () => {
					await fetch("/api/emails", {
						method: "POST",
						body: JSON.stringify({
							email: "danicond97@gmail.com",
							firstName: "Daniel",
						}),
					});
				}}
			>
				Send Email
			</button>
		</main>
	);
}
