import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Indie Lurkers</title>
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<Header />
			</main>
		</div>
	);
}
