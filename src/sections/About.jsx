import React from "react";
import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
const highlights = [
    {
        icon: Code2,
        title: "Clean code",
        description:
        "Ecrire du code maintenable et évolutif qui résiste à l'epreuve du temps",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimiser la vitesse et offrir une expérience utilisateur ultre-fluide et rapide",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
        "Travailler en étroite collaboration avec les équipes pour concrétiser les idées",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Rester à la pointe des dernières technologies et des bonnes pratiques.",    
    },
]

export const About = () => {
    return( 
        <section id="about" className="py-32 relative overflow-hidden">
            <div>
                {/* Colonne de gauche */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            A propos de moi
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in 
                                    animation-delay-100 text-secondary-foreground"       
                    >
                        Construisons le futur, 
                        <span className="font-serif italic font-normal text-white">
                         {" "}
                          un composant, un projet à la fois.
                        </span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p >
                            Je suis un développeur passionné par la création d'applications web performantes
                             et esthétiques. Mon parcours a débuter dans le développement web il y a plusieurs
                              années, et depuis, j'ai acquis une solide expérience dans la conception
                               et le développement de projets variés.
                        </p>
                        <p>
                            Je me suis spécialisé en Symfony, React, Next.js et Tailwind CSS, et j'adore
                             relever les défis techniques pour créer des expériences utilisateur exceptionnelles.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            Ma mission est de transformer les idées en réalité numérique,
                             en utilisant les meilleures pratiques de développement et
                              en restant à la pointe des dernières technologies. 
                              Je suis toujours à la recherche de nouvelles opportunités pour apprendre,
                               grandir et contribuer à des projets passionnants.
                        </p>
                    </div>
                </div>
                {/* Colonne de droite */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, id)=>(
                        <div
                        key={id}
                        className="glass rounded-2xl p-6 animate-fade-in"
                        style={{animationDelay: `${id + 1 * 100}ms`}}
                        >
                            <div className="w-12 hidden-12 rounded-xl bg-primary/10 flex items-center justify-center
                            mb-4 hover:bg-primary/200" 
                            >
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}