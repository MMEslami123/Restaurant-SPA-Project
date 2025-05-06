import Home from "./pages/home/Home";
import ContactUs from "./pages/contactUs/ContactUs";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import BookTable from "./pages/bookTable/BookTable";
import AddFood from "./pages/addFood/AddFood";
export const routes = [
  { path: "/", element: <Home /> },
  { path: "/aboutUs", element: <ContactUs /> },
  { path: "/cart", element: <Cart /> },
  { path: "/product/:cartId", element: <AddFood /> },
  { path: "/login", element: <Login /> },
  { path: "/bookTable", element: <BookTable /> },
];
