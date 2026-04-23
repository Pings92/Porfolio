import react from "react";
import { Button } from "@/components/button";
import {ArrowRight, Download} from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

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
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm  text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software
                            </span>
                        </div>
                        <div>
                            <h1 className="text-4x1 md:text-5xl lg:text-3xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Développeur <span className= "text-primary glow-text" >Fullstack</span>
                                <br />
                                Passionné par l'infini des possibilités,
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                du backend au frontend.
                                </span>
                                <br />
                                <span className="text-secondary italic glow-text">
                                No Mountain ain't too high, 
                                </span>
                                <br />
                                <span className="text-secondary italic glow-text">
                                no code ain't too complex.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                                Hé c'est Piérick
                                <br />
                                Je sais compter deux par deux 
                                <br />
                                et lacer mes chaussures.
                                <br />
                                Je suis là pour jouer avec toi
                                <br />
                                Regarde moi grandir
                                <br />Comme toi et moi

                                <br />
                                Me voici avec Mes amis
                                <br />
                                Ils ont des histoires
                                <br />
                                Ils ont tout leur temps
                                Pour toi
                                </p>
                        </div>
                        {/* Bouton d'appel à l'action */}
                        <div>
                            <Button
                                href="#contact"
                                size="lg"
                                className="animate-fade-in animation-delay-800"
                            >
                                    Contactez-moi <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton 
                                className="animate-fade-in animation-delay-800"
                            />
                        </div>
                        {/* Réseaux sociaux */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Suivez-moi</span>
                            {/* {[
                                { icon Github, href: "http://github.com"},
                                { icon Linkedin, href: "http://linkedin.com"},
                                { icon Twitter, href: "http://twitter.com"},
                            ].map((social, i) => (
                                <a 
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))} */}
                        </div>
                    </div>
                {/* Contenu de droite image profil */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Image de profil */}
                    <div className="relative max-w-md mx-auto ">
                        <div className="relative glass rounded-3x1 p-2 glow-border">
                            <img 
                            src="public\projectImage\GGI.png" 
                            alt="photo de profil" 
                            className="w-full aspect-4/5 object-cover rounded-2x1" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}