import ExperienceItem from "./components/ExperienceItem";
import ProyectItem from "./components/ProyectItem";
import { MapPin, Github, Linkedin, GoogleDocs } from 'iconoir-react';
import logoTololo from './assets/cerro-tololo.jpg';
import logoAtlas from './assets/expermimento-atlas.png';
import logoMinisterio from './assets/ministerio.png';
import logoNirby from './assets/nirby_logo.jpg';

function App() {
    return (
        <>
            <main className="mx-auto w-[784px]">
                <header className="flex items-center h-[300px]">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            Javier Alejandro Zavala Torres
                        </h1>
                        <div className="flex items-center gap-3">
                            <p className="text-xl">Desarrollador Full Stack</p>
                            <p className="flex gap-1 text-gray-600"><MapPin/> Valparaíso, Chile</p>
                        </div>
                        <div className="flex gap-1">
                            <a className="border border-gray-400 px-2 py-1 rounded flex gap-2 text-sm font-bold text-gray-500 hover:bg-gray-950 hover:text-gray-50 hover:border-gray-950 transition-colors"
                                href="https://www.github.com/TortugaGris"
                                target="_blank"
                            >
                                <GoogleDocs/> Curriculum
                            </a>
                            <a className="border border-gray-400 text-gray-500 p-1 rounded hover:bg-gray-950 hover:border-gray-950 hover:text-gray-50 transition-colors" 
                                href="https://www.github.com/TortugaGris"
                                target="_blank"
                            >
                                <Github/>
                            </a>
                            <a className="border border-gray-400 p-1 rounded text-gray-500 hover:bg-gray-950 hover:border-gray-950 hover:text-gray-50 transition-colors"
                                href="https://www.linkedin.com/in/jazavalat" 
                                target="_blank"
                            >
                                <Linkedin/>
                            </a>
                        </div>
                    </div>
                </header>
                <section className="flex flex-col gap-2">
                    <h2 className="text-2xl mb-3">
                        Experiencia Laboral
                    </h2>
                    <ExperienceItem
                        title = "Nir.by"
                        date = "Oct 2022 - Ene 2024"
                        jobTitle = "Desarrollador Full Stack" 
                        logo = {logoNirby}
                        location = "Remoto"
                        descriptions = {[
                            "Diseñé e implementé Vive Sano Prime, una aplicación web para acceder a material didáctico en el área de la salud, utilizando Angular, Firebase y Algolia.",
                            "Integré un sistema de pagos para Vive Sano Prime, conectando plataformas como Stripe y Asaas, asegurando transacciones seguras y eficientes.",
                            "Colaboré en el desarrollo de Nirby Primes, una aplicación web para la edición de videos interactivos, utilizando Angular, Firebase y MongoDB.",
                        ]}
                    />
                    <ExperienceItem
                        title = "Expermiento ATLAS (CERN)"
                        date = "Ago 2020 - Ene 2022"
                        jobTitle = "Data scientist (Tesis)" 
                        logo = {logoAtlas}
                        location = "Remoto"
                        descriptions = {[
                            "Diseñé e implementé un algoritmo de redes neuronales profundas para la identificación de pares de partículas tau en el experimento ATLAS, utilizando Keras, Scikit-learn y Pandas, logrando resultados comparables a los métodos existentes.",
                        ]}
                    />
                    <ExperienceItem
                        title = "Observatorio Tololo (AURA)"
                        date = "Ene 2019 - Mar 2019"
                        jobTitle = "Desarrollador Full Stack (Práctica)" 
                        logo = {logoTololo}
                        location = "La Serena"
                        descriptions = {[
                            "Diseñé e implementé un algoritmo de redes neuronales profundas para la identificación de pares de partículas tau en el experimento ATLAS, utilizando Keras, Scikit-learn y Pandas, logrando resultados comparables a los métodos existentes.",
                        ]}
                    />
                    <ExperienceItem
                        title = "Ministerio de las Culturas, las Artes y el Patrimonio"
                        date = "Abr 2019 - Ene 2020"
                        jobTitle = "Desarrollador Full Stack (Práctica)	" 
                        logo = {logoMinisterio}
                        location = "Valparaíso"
                        descriptions = {[
                            "Participé en la planificación, toma de requisitos, diseño e implementación de una aplicación web para el registro de músicos de la Quinta Región, utilizando Vue.js, Django y PostgreSQL.",
                        ]}
                    />
                </section>
                <section className="my-5 flex flex-col gap-2">
                    <h2 className="text-2xl mb-3">
                        Proyectos
                    </h2>
                    <ProyectItem
                        title = "D&D Monster Dice Roller" 
                        date = "Abr 2024" 
                        descriptions = {[
                            "Diseñé e implementé una aplicación web utilizando Angular que permite lanzar tiradas de salvación, habilidades y acciones de un monstruo aleatorio, así como realizar tiradas de dados personalizadas."
                        ]}
                    />
                </section>
            </main>
        </>
    )
}

export default App
