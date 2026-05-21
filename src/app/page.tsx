import React from 'react';

export default function Home() {
  const courses = [
    { id: 1, title: "Développement Web Pro", level: "Débutant", duration: "12h", color: "bg-blue-500" },
    { id: 2, title: "Design UI/UX Master", level: "Intermédiaire", duration: "8h", color: "bg-purple-500" },
    { id: 3, title: "Bases de la Data Science", level: "Débutant", duration: "15h", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Barre de Navigation */}
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Mon Académie Pro</h1>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Cours</a>
          <a href="#" className="hover:text-blue-600 transition">Mes Formations</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md">
            Connexion
          </button>
        </div>
      </nav>

      {/* Hero Section (En-tête) */}
      <header className="py-20 px-8 text-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <h2 className="text-5xl font-extrabold mb-6">Maîtrisez votre avenir.</h2>
        <p className="text-xl text-blue-100 opacity-90 max-w-2xl mx-auto mb-8">
          Apprenez les compétences les plus demandées avec des experts du domaine. Accès illimité et flexible.
        </p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Explorer les cours
        </button>
      </header>

      {/* Grille des cours */}
      <main className="max-w-6xl mx-auto py-16 px-8">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-bold text-gray-800">Nos Cours Populaires</h3>
          <div className="text-blue-600 font-semibold cursor-pointer hover:underline">Voir tout →</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
              <div className={`h-48 ${course.color} flex items-center justify-center text-white text-6xl group-hover:scale-105 transition-transform duration-300`}>
                {course.title[0]}
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">{course.level}</span>
                <h4 className="text-xl font-bold mt-3 mb-4 text-gray-900 leading-tight">{course.title}</h4>
                <div className="flex justify-between items-center text-gray-500 text-sm border-t pt-4">
                  <span className="flex items-center">⏱️ {course.duration}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs hover:bg-blue-600 transition">Accéder</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Pied de page */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-8 text-center mt-auto">
        <p className="text-white font-bold mb-4">Mon Académie Pro</p>
        <p className="text-sm">© 2024 Plateforme E-Learning. Déployée avec succès sur Vercel.</p>
      </footer>
    </div>
  );
}