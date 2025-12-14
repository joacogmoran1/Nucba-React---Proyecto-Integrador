import { BrowserRouter, Route, Routes } from "react-router";

// Providers
import { ProductsProvider } from "./context/Products.jsx";
import { MenuAndCartToggleProvider } from "./context/MenuAndCartToggle.jsx";
import { CartProvider } from "./context/Cart.jsx";
import { ModalProvider } from "./context/Modal.jsx";

// Components
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Products from "./pages/Products/Products.jsx";
import Contact from "./pages/Contact/Contact.jsx";


const router = (
	<BrowserRouter>
		
		<Routes>
		
			<Route element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/wines' element={<Products />} />
				<Route path='/contact' element={<Contact />} />
			</Route>
		
		</Routes>

	</BrowserRouter>
);

export default function App() {
	return <ProductsProvider>
		<CartProvider>
			<MenuAndCartToggleProvider>
				<ModalProvider>
					{ router }
				</ModalProvider>
			</MenuAndCartToggleProvider>
		</CartProvider>
	</ProductsProvider>
}