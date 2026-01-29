import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupportForm from "../components/SupportForm";
import Image from "next/image";

const ServiceSection = ({ title, description, imageSrc, reversed = false }: { title: string, description: string, imageSrc: string, reversed?: boolean }) => (
    <section className={`py-20 ${reversed ? 'bg-zinc-50 dark:bg-zinc-900/50' : 'bg-white dark:bg-black'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`lg:flex lg:items-center lg:gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {description}
                    </p>
                    <div className="mt-8">
                        <a href="/#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-500 transition-colors">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-16">
            <Navbar />

            {/* Header */}
            <div className="bg-yellow-500 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Our Dedicated Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-800 max-w-2xl mx-auto">
                        From initial consultation to lifelong maintenance, we are your partners in clean energy.
                    </p>
                </div>
            </div>

            <ServiceSection
                title="Expert Recommendations"
                description="Our journey starts with understanding your needs. Our energy consultants provide detailed site assessments and energy usage analysis to recommend the perfect solar system tailored for your specific residential property and energy goals."
                imageSrc="/hero_solar.png"
            />

            <ServiceSection
                title="Residential Installation"
                description="We specialize in high-efficiency residential solar installations. Our certified team ensures a seamless transition to solar, handling everything from permit acquisition to the final panel placement on your roof."
                imageSrc="/service_residential.png"
                reversed
            />

            <ServiceSection
                title="After-Sales Support"
                description="Our commitment doesn't end with installation. Our professional technical team provides 24/7 monitoring and on-site support to ensure your system performs at peak efficiency for decades."
                imageSrc="/technical_team.png"
            />

            {/* Support Form Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900" id="support">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white capitalize mb-6">
                                Technical Team & Support
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                Experiencing an issue with your system? Our technical experts are ready to help. Please fill out the support form, and we'll prioritize your request based on the urgency level.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                    <span className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 font-bold">1</span>
                                    <span>24/7 Remote Monitoring</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                    <span className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 font-bold">2</span>
                                    <span>48-Hour On-site Response Guarantee</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                    <span>✨ Premium Warranty Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-0">
                            <SupportForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
