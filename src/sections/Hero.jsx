import react from "react";
import { Button } from "@/components/button";
import {ArrowRight, ChevronDown, Download} from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const skills = [
    "Javascript" ,
    "React" ,
    "React Native" ,
    "Node.js" ,
    "TypeScript" ,
    "MongoDB" ,
    "HTML5" ,
    "CSS3" ,
    "Tailwaind CSS" ,
    "Next.js" ,
    "Express.js" ,
    "Figma" ,
    "Git" ,
    "Docker" ,
    "Github Actions" ,
    "PostgresSQL" ,
    "SQL" ,

]

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
                            {[
                                { icon: FaGithub , href: "http://github.com" },
                                { icon: FaLinkedin , href: "http://linkedin.com" },
                                // { icon: FaSquareXTwitter , href: "http://twitter.com" },
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
                            ))}
                        </div>
                    </div>
                {/* Contenu de droite image profil */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Image de profil */}
                        <div className="relative max-w-md mx-auto ">
                            <div 
                            className="absolute inset-0 rounded-3xl bg-linear-to-br
                            from-primary/30 via-transparent to primary/10
                            blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3x1 p-2 glow-border">
                                <img 
                                src="public\projectImage\GGI3.png" 
                                alt="photo de profil" 
                                className="w-full aspect-4/5 object-cover rounded-2x1" 
                                />
                                {/* Badge Flottant */}
                                <div className = "absolute -bottom-4 -right-4 glass rounded-x1 px-4 py-3 animate-float">
                                    <div className= " flex items-center gap-3">
                                        <div className = "w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Disponible pour de nouvelles opportunités
                                        </span>
                                    </div>
                                </div>
                                {/* Stats du badge */}
                                <div className = "absolute -top-4 -left-4 glass rounded-x1 px-4 py-3 animate-float animation-delay-500"
                                >
                                    <div className="text-2x1 font-bold text-primary">5+</div>
                                    <div className = " text-xs text-muted-foreground">Années Exp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* technologies */}
                    <div className="mt-20 animate-fade-in animation-delay-600">
                        <p className = "text-sm text-muted-foreground mb-6 text-center">
                            Technologie pratiqués
                        </p>
                        <div className = "relative overflow-hidden">
                            <div className = "flex animate-marquee">
                                {[...skills, ...skills].map((skill, id) => (
                                <div key={id} className="shrink-0 px-8 py-4">
                                    <span className="text-x1 font-semibold text-muted-foreground/50 hover:text-secondary-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                {/* scroll */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                                animate-fade-in animation-delay-800">
                    <a 
                        href="#about"
                        className="flex flex-col items-center gap-2 text-secondary-foreground
                                   hover:text-primary transition-colors"
                    >
                        <span className = "text-xs uppercase tracking-wider">Scroll</span>
                        <ChevronDown className = "w-6 h-6 animate-bounce" />
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}