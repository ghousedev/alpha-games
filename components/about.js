import Image from 'next/image'

export default function About() {
    return (
        <section className="text-gray-300 body-font">
            <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" alt="Image of a gaming table with an active game." src="/gaming-table.jpg" width={600} height={400} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-lg">
                    <p className="mb-4 leading-relaxed">Alpha Games is a family business that aims to combine our enthusiasm for tabletop gaming, models, painting and trading card games with a desire to provide outstanding customer service and build a community where newcomers and long standing enthusiasts can come together and share a passion for gaming.</p>
                    <p className="mb-4 leading-relaxed">Alpha Games has a wide variety of stock in store including popular well known tabletop games such as Warhammer 40k, Age of Sigmar, Blood Bowl, Magic the Gathering, Bolt Action, X-Wing and also more niche offerings.

                        Many gaming accessories are also available including paints, die sets, card sleeves, cases, foam inserts and folders.</p>
                    <p>Our store also provides a number of gaming tables that are open for public use, one room for card and board games and a larger room with larger tables for war games etc.</p>

                </div>
            </div>
        </section>
    )
}