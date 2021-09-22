import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./header'))
const Footer = dynamic(() => import('./footer'))

export default function Layout( {children} ) {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col">
            <Header />
                <main className="w-full bg-gray-800 z-40 flex-grow">{children}</main>
            <Footer />
        </div>
    )
}