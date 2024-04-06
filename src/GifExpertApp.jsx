import { useState } from "react";
import { AddCategory, GifGrid, Footer } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Shaquill']);
    const onAddCategory = (category) => {
        if (categories.includes(category)) return; // Evita duplicados
        setCategories([category, ...categories]);
    };
    return (
        <main className="flex flex-col justify-between min-h-screen">
            <section className="text-gray-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 gap-6 md:gap-5 lg:gap-0 xl:gap-0">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl lg:text-4xl text-2xl font-medium title-font mb-2 text-gray-900 playfair-display-uniquifier">
                                Gif Expert App
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-balance">
                            Aplicación web que utiliza la API de Giphy para permitir a los usuarios buscar GIFs por su título. Ofrece una interfaz intuitiva donde los usuarios pueden ingresar palabras clave y ver resultados relevantes de manera ordenada y visualmente atractiva. Es una forma divertida y fácil de encontrar y compartir GIFs en línea.
                        </p>
                        <AddCategory onAddCategory={onAddCategory} />
                    </div>

                    <div className="flex flex-col -m-4 mt-12 px-5">
                        {categories.map((category) => {
                            return <GifGrid key={category} category={category} />;
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};
