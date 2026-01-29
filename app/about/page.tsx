import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-16">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-zinc-900 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-8">
                        Expertise Behind <br />
                        <span className="text-yellow-500">Every Installation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        At SolarTech, we don't just install panels; we deliver engineered energy solutions. Our technical management team ensures every residential project meets the highest standards of efficiency and safety.
                    </p>
                </div>
            </section>

            {/* Leadership / Tech Manager Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/tech_manager.png"
                                alt="Technical Manager inspecting solar system"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-12 lg:mt-0">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technical Leadership</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Our operations are led by seasoned technical managers who oversee every phase of the installation process. From the initial site survey to the final system commissioning, we ensure that your residential solar system is optimized for maximum output.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-yellow-500 p-3 rounded-lg text-black font-bold">1</div>
                                    <div>
                                        <h4 className="text-xl font-bold dark:text-white">Precision Inspection</h4>
                                        <p className="text-gray-500 dark:text-gray-400">Every component is rigorously tested to withstand environmental stresses and deliver consistent power.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-yellow-500 p-3 rounded-lg text-black font-bold">2</div>
                                    <div>
                                        <h4 className="text-xl font-bold dark:text-white">Custom Engineering</h4>
                                        <p className="text-gray-500 dark:text-gray-400">Residential roofs vary; our technical team designs specific mounting and wiring solutions for every home.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-yellow-500 p-3 rounded-lg text-black font-bold">3</div>
                                    <div>
                                        <h4 className="text-xl font-bold dark:text-white">Lifelong Support</h4>
                                        <p className="text-gray-500 dark:text-gray-400">Our after-sales technical support team is always available to monitor your systems and provide expert advice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 bg-yellow-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-gray-900">
                        <div>
                            <div className="text-5xl font-black mb-2">1,200+</div>
                            <div className="text-lg font-bold uppercase tracking-wider">Homes Powered</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">24/7</div>
                            <div className="text-lg font-bold uppercase tracking-wider">Technical Monitoring</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">100%</div>
                            <div className="text-lg font-bold uppercase tracking-wider">Safety Certified</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
