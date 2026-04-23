import react from "react";

export const Hero = () => {
    return ( 
        <section className="relative min-h-screen flex items-center overflow-hidden z-0"> 
            {/* Background */}
            <div className = "absolute inset-0 z-[-1]">
                <img src="public\projectImage\GGI2.png"
                    alt="Image de fond"  
                    // className="md:hidden glass-strong animate-fade-in"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-be 
                from-background/20 via-background/80 to-background"
                />         
            </div>
            {/* Carré vert flottant*/}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
                {[...Array(30)].map(( _ , index) => (
                    <div
                        key={index}
                        className="absolute w-5 h-5 opacity-50"
                        style={{
                            backgroundColor : '#e3c15b',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                />    
                ))}
            </div>
            {/* Contenu principal*/}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 items-center">
                    {/* Colonne de gauche contenu textuel*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm #e3c15b text-primary">
                                <span className="w-2 h-2 #e3c15b bg-primary rounded-full animate-pulse" />
                                Software
                            </span>
                        </div>
                    </div>
                {/* Contenu de droite image */}
                </div>
            </div>
        </section>
    );
}