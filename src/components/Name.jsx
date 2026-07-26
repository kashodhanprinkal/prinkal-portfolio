"use client"

import ParticleOrbitEffect from "./lightswind/particle-orbit-effect"

export default function hero(){
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
            {/*particle background  */}

            <div className="absolute insert-0 z-0 ">
                <ParticleOrbitEffect
                particleCount={30}
                radius={80}
                intensity={1.2}
                 colorRange={[180, 270]}
                autoColors={true}
                />
            </div>

            {/*Main Content */}
            <div className="relative z-10 text-center px-6 ">
                <h1 className="text-4xl md:text-6xl font-bold ">
                    Hello
                    I,m Prinkal
                </h1>
            </div>
        </section>
    )
}