import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_solar.png"
                    alt="Modern solar home"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
                    Power Your Future <br />
                    <span className="text-yellow-400">With Solar Energy</span>
                </h1>
                <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow-md">
                    Sustainable, efficient, and affordable solar solutions for residential and commercial properties. Join the renewable revolution today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20">
                        Get Started
                    </a>
                    <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full text-lg transition-all">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
