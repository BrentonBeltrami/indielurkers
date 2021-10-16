import Foot from "./Footer";
import Navbar from "./NavBar";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Navbar {...children} />
			<div className="">{children}</div>
			<Foot />
		</div>
	);
}
