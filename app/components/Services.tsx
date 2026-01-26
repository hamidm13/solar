import Image from 'next/image';

const ServiceCard = ({ title, description, imageSrc }: { title: string, description: string, imageSrc: string }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-gray-100 dark:border-zinc-800 transition-all hover:shadow-2xl">
        <div className="relative h-64 w-full overflow-hidden">
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
            </p>
            <div className="mt-6">
                <span className="text-yellow-600 dark:text-yellow-500 font-semibold group-hover:text-yellow-500 transition-colors cursor-pointer flex items-center gap-2">
                    Learn more &rarr;
                </span>
            </div>
        </div>
    </div>
);

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-yellow-600 dark:text-yellow-500 tracking-wide uppercase">Our Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Comprehensive Solar Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        From cozy homes to massive industrial complexes, we provide tailored energy systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <ServiceCard
                        title="Residential Installation"
                        description="Turn your roof into a power plant. Save on electricity bills and increase your home value with our custom residential solar panels."
                        imageSrc="/service_residential.png"
                    />
                    <ServiceCard
                        title="Commercial Projects"
                        description="Scale your energy savings. We design high-efficiency solar arrays for warehouses, offices, and large commercial facilities."
                        imageSrc="/service_commercial.png"
                    />
                    {/* Reusing residential for now as maintenance/other placeholder or I could have generated another one. 
              Let's use residential again but crop/context or just use the hero one for variety if needed. 
              Actually, I'll just use a 'Maintenance' concept with one of existing or generate new? 
              I'll use hero for the third one to save time/tokens if it fits, or just 2 cols? 
              Plan said cards for Res, Com, Maintenance. 
              I'll use the Hero image for 'Maintenance & Support' for now to be efficient. 
          */}
                    <ServiceCard
                        title="Maintenance & Support"
                        description="Ensure peak performance. Our dedicated team provides ongoing monitoring, cleaning, and maintenance for your solar system."
                        imageSrc="/hero_solar.png"
                    />
                </div>
            </div>
        </section>
    );
}
