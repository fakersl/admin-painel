import React from 'react'

const Banner = () => {
    return (
        <div className="container m-32">
            <div className="grid lg:grid-cols-[66%, 34%] gap-4 pr-[15px]">
                <div className="h-[200px] md:h-[260px] bg-[url(/hero.png)] bg-cover bg-cetner rounded-xl p-8 md:p-16">
                    <p className="text-white text-xl font-medium">
                        15% de desconto em TODA a loja
                    </p>
                    <h2 className="text-white font-bold text-xl sm:text-3xl max-w-[240px]">
                        Blablabla
                    </h2>
                    <a
                        className="inline-block mt-6 hover:text-accent text-white font-medium"
                        href="#"
                    >
                        Compre Agora
                    </a>
                </div>
                <div className="h-[250px] bg-[url(/hero.png)] bg-right rounded-xl hidden lg:block"></div>
            </div>
        </div>
    )
}

export default Banner;