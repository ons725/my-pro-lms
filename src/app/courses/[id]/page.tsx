import React from 'react';
import Link from 'next/link';

export default function LessonPage({ params }: { params: { id: string } }) {
  // On simule une vidéo différente selon l'ID
  const videoId = params.id === "1" ? "dQw4w9WgXcQ" : "jNQXAC9IVRw"; 

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="p-4 border-b border-gray-800 flex justify-between items-center">
        <Link href="/" className="text-blue-500 hover:underline">← Retour à l'accueil</Link>
        <h1 className="font-bold">Leçon : {params.id}</h1>
        <div className="bg-green-600 px-3 py-1 rounded-full text-xs">En direct</div>
      </nav>

      <main className="max-w-4xl mx-auto p-8">
        {/* Lecteur Vidéo (YouTube Embed) */}
        <div className="aspect-video w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Bienvenue dans votre formation</h2>
          <p className="text-gray-400 leading-relaxed">
            Dans cette leçon, nous allons explorer les bases fondamentales. 
            Prenez des notes et n'hésitez pas à refaire les exercices en même temps que la vidéo.
          </p>
        </div>
      </main>
    </div>
  );
}