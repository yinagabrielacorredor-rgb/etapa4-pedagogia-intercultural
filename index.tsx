import React, { useState } from 'react';
import { BookOpen, Users, Heart, Target, Globe, Award, Home } from 'lucide-react';

export default function Etapa4PedagogiaIntercultural() {
  const [activeSection, setActiveSection] = useState('introduccion');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-indigo-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              YC
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Etapa 4: Evaluación Pedagógica Intercultural</h1>
              <p className="text-sm text-gray-600">Yina Gabriela Corredor — Barrio Compartir, Soacha</p>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white shadow-sm border-b sticky top-28 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4">
            <button
              onClick={() => setActiveSection('introduccion')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeSection === 'introduccion'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BookOpen size={18} />
              <span className="font-medium text-sm">Introducción</span>
            </button>
            <button
              onClick={() => setActiveSection('contexto')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeSection === 'contexto'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Home size={18} />
              <span className="font-medium text-sm">Contexto</span>
            </button>
            <button
              onClick={() => setActiveSection('impacto')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeSection === 'impacto'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Heart size={18} />
              <span className="font-medium text-sm">Impacto</span>
            </button>
            <button
              onClick={() => setActiveSection('odm')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeSection === 'odm'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Globe size={18} />
              <span className="font-medium text-sm">ODM y ODS</span>
            </button>
            <button
              onClick={() => setActiveSection('conclusiones')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeSection === 'conclusiones'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Award size={18} />
              <span className="font-medium text-sm">Conclusiones</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {activeSection === 'introduccion' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introducción</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Etapa 4 evalúa el impacto de las acciones pedagógicas interculturales diseñadas para el barrio Compartir (Soacha). El propósito es analizar cómo estas estrategias fortalecen la inclusión, la convivencia y el diálogo de saberes en un contexto marcado por la precariedad educativa y la diversidad cultural.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">4</div>
                  <div className="text-sm text-blue-800 font-medium">Acciones pedagógicas</div>
                </div>
                <div className="bg-purple-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-2">125</div>
                  <div className="text-sm text-purple-800 font-medium">Puntos evaluación</div>
                </div>
                <div className="bg-pink-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-pink-700 mb-2">3</div>
                  <div className="text-sm text-pink-800 font-medium">ODM impactados</div>
                </div>
                <div className="bg-indigo-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-700 mb-2">2</div>
                  <div className="text-sm text-indigo-800 font-medium">ODS alineados</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Acciones Pedagógicas Evaluadas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                    <div className="text-4xl mb-3">🌍</div>
                    <h4 className="font-bold text-lg mb-2">Aula sin fronteras</h4>
                    <p className="text-sm opacity-90">Espacios para compartir tradiciones y expresiones culturales.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                    <div className="text-4xl mb-3">💬</div>
                    <h4 className="font-bold text-lg mb-2">Rincones de diálogo comunitario</h4>
                    <p className="text-sm opacity-90">Encuentros mensuales que integran familias y comunidad.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                    <div className="text-4xl mb-3">🏘️</div>
                    <h4 className="font-bold text-lg mb-2">Mi barrio, mi historia</h4>
                    <p className="text-sm opacity-90">Proyecto de memoria local y revalorización identitaria.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                    <div className="text-4xl mb-3">❤️</div>
                    <h4 className="font-bold text-lg mb-2">Escuela emocionalmente intercultural</h4>
                    <p className="text-sm opacity-90">Talleres de educación emocional con enfoque intercultural.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contexto' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Descripción y Análisis del Contexto</h2>
              <p className="text-purple-600 font-medium mb-6">Barrio Compartir, Soacha</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Características del contexto</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Falta de inversión en infraestructura educativa</li>
                    <li>• Familias con bajos recursos y madres cabeza de hogar</li>
                    <li>• Estudiantes sin conectividad ni apoyo psicosocial</li>
                    <li>• Docentes con limitados recursos pedagógicos</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Fundamento teórico</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Las acciones propuestas se basan en autores como Castro (2009), García Canclini (2015) y Moya (2013), quienes destacan la interculturalidad como espacio de encuentro, transformación y reconocimiento identitario.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Se prioriza la participación comunitaria como estrategia para articular familia-escuela.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                  <Users className="text-blue-600 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Actores involucrados</h4>
                  <p className="text-sm text-gray-700">Familias, estudiantes, docentes, instituciones y organizaciones externas.</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                  <Target className="text-purple-600 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Problema central</h4>
                  <p className="text-sm text-gray-700">Precariedad educativa y abandono institucional en contextos de diversidad.</p>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200">
                  <Target className="text-indigo-600 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Líneas de acción</h4>
                  <p className="text-sm text-gray-700">Refuerzo académico, currículo intercultural, mesas de articulación y educación emocional.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'impacto' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Evaluación del Impacto Social y Educativo</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-lg">
                  <div className="text-5xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold mb-3">Aula sin fronteras</h3>
                  <p className="opacity-90 leading-relaxed">
                    Desarrolla empatía y valoración de la diversidad. Genera espacios para compartir tradiciones y expresiones culturales, fortaleciendo la identidad y la convivencia escolar.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-lg">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold mb-3">Rincones de diálogo comunitario</h3>
                  <p className="opacity-90 leading-relaxed">
                    Fortalece vínculos entre familia y escuela. Encuentros mensuales que integran a familias y comunidad, visibilizando saberes locales.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-8 text-white shadow-lg">
                  <div className="text-5xl mb-4">🏘️</div>
                  <h3 className="text-2xl font-bold mb-3">Mi barrio, mi historia</h3>
                  <p className="opacity-90 leading-relaxed">
                    Promueve identidad territorial y memoria cultural. Proyecto de investigación escolar con murales y entrevistas que revalorizan identidades.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-lg">
                  <div className="text-5xl mb-4">❤️</div>
                  <h3 className="text-2xl font-bold mb-3">Escuela emocionalmente intercultural</h3>
                  <p className="opacity-90 leading-relaxed">
                    Mejora la convivencia escolar y gestión emocional. Talleres de educación emocional con enfoque intercultural.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Impactos Esperados</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <span className="text-gray-700">Reducción de la deserción escolar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <span className="text-gray-700">Mayor sentido de pertenencia comunitaria</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <span className="text-gray-700">Fortalecimiento de redes comunidad-escuela</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <span className="text-gray-700">Mejora en la convivencia escolar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'odm' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Aporte a los Objetivos de Desarrollo</h2>
              <p className="text-indigo-600 font-medium mb-6">ODM y ODS</p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Las propuestas pedagógicas contribuyen ampliamente a los Objetivos de Desarrollo del Milenio (ODM) y se alinean con los Objetivos de Desarrollo Sostenible (ODS) actuales.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-3">ODM 2</h3>
                  <h4 className="text-xl font-semibold mb-3 opacity-90">Enseñanza primaria universal</h4>
                  <p className="opacity-90 leading-relaxed">
                    Promueven la permanencia escolar, fortalecen la convivencia y generan sentido de pertenencia, factores claves para disminuir la deserción.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                  <div className="text-6xl mb-4">👩</div>
                  <h3 className="text-2xl font-bold mb-3">ODM 3</h3>
                  <h4 className="text-xl font-semibold mb-3 opacity-90">Igualdad de género</h4>
                  <p className="opacity-90 leading-relaxed">
                    La participación de mujeres cabeza de hogar en los encuentros comunitarios fortalece su rol social y su reconocimiento como portadoras de saberes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold mb-3">ODM 8</h3>
                  <h4 className="text-xl font-semibold mb-3 opacity-90">Alianzas para el desarrollo</h4>
                  <p className="opacity-90 leading-relaxed">
                    Las acciones articulan familia, escuela y comunidad, generando redes de apoyo que fortalecen la cohesión social.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl mb-8">
                <h3 className="text-2xl font-bold mb-6">Alineación con los ODS actuales</h3>
                <p className="opacity-90 mb-6 text-lg">
                  Aunque la guía menciona ODM, las acciones también se alinean con los Objetivos de Desarrollo Sostenible contemporáneos:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-10 rounded-2xl p-6 border-2 border-white border-opacity-30">
                    <div className="text-5xl mb-3">🎓</div>
                    <h4 className="text-xl font-bold mb-2">ODS 4</h4>
                    <h5 className="text-lg font-semibold mb-2 opacity-90">Educación de calidad</h5>
                    <p className="opacity-80 text-sm">Garantiza una educación inclusiva, equitativa y de calidad promoviendo oportunidades de aprendizaje permanente.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-2xl p-6 border-2 border-white border-opacity-30">
                    <div className="text-5xl mb-3">⚖️</div>
                    <h4 className="text-xl font-bold mb-2">ODS 10</h4>
                    <h5 className="text-lg font-semibold mb-2 opacity-90">Reducción de desigualdades</h5>
                    <p className="opacity-80 text-sm">Reduce las desigualdades en y entre los países, promoviendo la inclusión social, económica y política.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 Impacto Global</h3>
                <p className="text-gray-700 leading-relaxed">
                  La propuesta pedagógica no solo responde a necesidades locales, sino que se articula con agendas globales de inclusión y desarrollo sostenible, contribuyendo a la construcción de un mundo más justo y equitativo.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'conclusiones' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusiones</h2>
              <p className="text-purple-600 font-medium mb-6">Síntesis y reflexiones finales</p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La evaluación del impacto de las acciones pedagógicas interculturales demuestra que estas constituyen estrategias pertinentes para transformar el contexto educativo del barrio Compartir.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 mb-3">✨ A corto plazo</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fortalecer la identidad cultural</li>
                    <li>• Mejorar la convivencia escolar</li>
                    <li>• Promover la participación comunitaria</li>
                    <li>• Favorecer el derecho a la educación</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-3">🌟 A largo plazo</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Reducir desigualdades estructurales</li>
                    <li>• Fortalecer la cohesión social</li>
                    <li>• Consolidar una escuela más humana</li>
                    <li>• Construir ciudadanía intercultural</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">💡 Reflexión Final</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  La interculturalidad, entendida como principio pedagógico y social, se convierte en la ruta para construir una ciudadanía justa, solidaria y respetuosa de la diversidad.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Logros Esperados</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">↓ 30%</div>
                    <div className="text-sm text-gray-700">Reducción deserción</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">↑ 45%</div>
                    <div className="text-sm text-gray-700">Participación familiar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">↑ 60%</div>
                    <div className="text-sm text-gray-700">Convivencia escolar</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Referencias bibliográficas</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                <li>Castro Suárez, C. (2009). Estudios sobre educación intercultural en Colombia.</li>
                <li>García Canclini, N. (2015). ¿Qué es la interculturalidad?</li>
                <li>Moya, A. (2013). Interculturalidad crítica y educación.</li>
                <li>Ortega, P. (2023). Desafíos y apuestas de la educación intercultural (UNAD).</li>
                <li>UNAD (2020). La interculturalidad en la educación superior.</li>
              </ol>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-10 py-6 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          Universidad Nacional Abierta y a Distancia — Multiculturalidad e Interculturalidad • Etapa 4 • 2025
        </div>
      </footer>
    </div>
  );
}