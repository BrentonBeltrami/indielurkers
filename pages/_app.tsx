import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { UserContextProvider } from "../lib/UserContext";
import { supabase } from "../utils/initSupa";

function MyApp({ Component, pageProps }) {
	return (
		<UserContextProvider supabaseClient={supabase}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserContextProvider>
	);
}

export default MyApp;
