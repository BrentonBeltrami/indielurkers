import Foot from "./Footer";
import Navbar from "./NavBar";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col h-screen">
			<Navbar {...children} />
			<div className="flex-grow bg-gray-900">{children}</div>
			<Foot />
		</div>
	);
}
