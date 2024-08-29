import React from 'react';
import arteImage from '../imgs/arte.jpg'; // Importa la imagen local

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explora el Mundo del Arte</h1>
          <p className="text-xl md:text-2xl mb-8">Descubre la belleza y la historia a través de las obras maestras.</p>
          <a href="/products" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
            Ver Productos
          </a>
        </div>
      </section>

      {/* About Art Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es el Arte?</h2>
          <p className="text-lg mb-8">
            El arte es una forma de expresión única que ha existido desde tiempos antiguos. A través de la pintura, escultura, música y otras formas, el arte nos permite explorar la creatividad y la imaginación humana. 
            Es una ventana a diferentes culturas, épocas y perspectivas, y nos ayuda a entender la condición humana en formas que las palabras a menudo no pueden capturar.
          </p>
          <img src={arteImage} alt="Arte" className="mx-auto rounded-lg shadow-lg max-w-4xl" />
        </div>
      </section>

      {/* Why Art Matters Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué es Importante el Arte?</h2>
          <p className="text-lg mb-8">
            El arte tiene el poder de transformar nuestra percepción del mundo. Nos ofrece una forma de reflexionar sobre nuestras experiencias y emociones. Además, el arte puede ser un medio para el cambio social y la educación, inspirando a generaciones y conectando a las personas más allá de las barreras lingüísticas y culturales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expresión Personal</h3>
              <p>El arte nos permite expresar nuestros sentimientos y pensamientos más profundos de una manera visual y creativa.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Conexión Cultural</h3>
              <p>Explorar el arte de diferentes culturas nos ayuda a entender y apreciar la diversidad del mundo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Inspiración</h3>
              <p>Las obras de arte pueden inspirarnos, motivarnos y hacer que reflexionemos sobre nuestras propias vidas y objetivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
          <p className="text-lg mb-8">
            Si eres un amante del arte, no dudes en explorar nuestras colecciones y unirte a nuestra comunidad de entusiastas del arte. ¡Te esperamos con emocionantes nuevas exposiciones y eventos!
          </p>
          <a href="/products" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
            Explora Ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
