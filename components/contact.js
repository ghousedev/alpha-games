export default function Contact() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-6 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
                    <iframe  className="absolute inset-0" style={{height:"100%", width:"100%"}} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4878.067671234766!2d0.9090467569583933!3d52.315388520806046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70455b7aae8c54ae!2sAlpha%20Games!5e0!3m2!1sen!2suk!4v1626169498068!5m2!1sen!2suk" loading="lazy"></iframe>
                    <div className="bg-white relative flex flex-wrap mx-6 py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            {/* <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a class="text-indigo-500 leading-relaxed">example@email.com</a> */}
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">PHONE</h2>
                            <p className="leading-relaxed">01359 250707</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}