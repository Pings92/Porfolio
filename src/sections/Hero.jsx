export const Hero = () => {
    return ( 
        <section className="relative min-h-screen flex items-center overflow-hidden"> 
            {/* Background */}
            <div className = "absolute inset-0">
                <img src="public\projectImage\GGI2.png"
                    alt="Image de fond"  
                    // className="md:hidden glass-strong animate-fade-in"
                    className="w-full h-full object-cover opacity-40"/>
                <div className="absolute inset-0 bg-gradient-to-be from-background/20 viabackground/80 to-background"
                />         
            </div>
        </section>
    );
}