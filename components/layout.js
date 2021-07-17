import Header from "./header";
import Footer from "./footer";

export default function Layout( {children} ) {
    return (
        <div>
            <Header />
                <main className="w-full bg-gray-800 z-40">{children}</main>
            <Footer />
        </div>
    )
}