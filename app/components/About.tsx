export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                            Driving the transition to <span className="text-yellow-500">Cleaner Energy</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                            Founded in 2024, SolarTech is dedicated to making solar energy accessible, affordable, and easy for everyone. We believe in a future where every roof generates its own clean power.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white text-xl font-bold mb-4">
                                    10+
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Years Experience</h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    Trusted expertise in solar installation and maintenance.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white text-xl font-bold mb-4">
                                    5k+
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Installations</h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    Powering thousands of homes and businesses across the region.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl bg-gray-100 dark:bg-zinc-800 p-8 h-full flex items-center justify-center">
                        {/* Visual element or quote instead of another image to balance content */}
                        <div className="text-center">
                            <blockquote className="text-xl font-medium text-gray-900 dark:text-white italic">
                                "SolarTech transformed our energy usage. The installation was seamless and the savings were immediate."
                            </blockquote>
                            <div className="mt-4 font-bold text-yellow-500">
                                - Sarah J., Homeowner
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
