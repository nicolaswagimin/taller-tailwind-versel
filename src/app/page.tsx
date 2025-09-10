export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Instrucciones en español */}
      <div className="mb-6 text-center text-sm text-gray-600">
        Para este taller debe hacer uso de NEXT.JS y se debe adjuntar lo siguiente:
        <br />
        • URL de vercel • URL de Github
      </div>

      {/* Grid principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card principal de noticia - Ocupa 8 columnas */}
        <div className="lg:col-span-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-6">
            {/* Imagen de la lámpara */}
            <div className="w-1/2">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Contenido de texto */}
            <div className="w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Green plants are going to Extinct about 500 times faster than they should, Study finds
                </h1>
                {/* Pequeño error: comentario innecesario */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  If you are the sort of person who just can not keep a plant alive, you are not alone according to a new study published June 10 in the journal Nature..
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Alexander Parkinson</p>
                    <p className="text-xs text-gray-500">Jun 20, 2019</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación de categorías - Ocupa 4 columnas */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Global</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Business</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Entertainment</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-blue-50">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium text-blue-600">Sports</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Health</span>
            </div>
          </div>
        </div>

        {/* Card de café - Ocupa 4 columnas */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="w-full h-48 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
            <div className="w-20 h-20 bg-blue-200 rounded-full"></div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            How to make the perfect morning coffee, according to the Science
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Tara Gibson</p>
              <p className="text-xs text-gray-500">Jul 13, 2019</p>
            </div>
          </div>
        </div>

        {/* Card de búsqueda y tags - Ocupa 4 columnas */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              placeholder="Search for articles" 
              className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
              // Pequeño error: atributo sin valor
              disabled={false}
            />
            <button className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-sm">🔍</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">#Politics</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">#Science</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">#Movies</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">#Technology</span>
          </div>
        </div>

        {/* Card de película - Ocupa 4 columnas */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="w-full h-48 bg-blue-200 rounded-lg mb-4 flex items-center justify-center">
            <div className="w-24 h-24 bg-blue-300 rounded"></div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            An Inspiring Short Film
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm">👁</span>
            <span className="text-sm text-gray-600">80,989</span>
          </div>
        </div>

        {/* Card de perfil - Ocupa 6 columnas */}
        <div className="lg:col-span-6 bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Alex Morrison</h3>
              <p className="text-sm text-gray-600 mb-4">Senior Journalist</p>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">34</p>
                  <p className="text-xs text-gray-600">Articles</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">980</p>
                  <p className="text-xs text-gray-600">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">8.9</p>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700">
                  Chat
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm font-medium">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card de navegación y filtros - Ocupa 6 columnas */}
        <div className="lg:col-span-6 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-center gap-4 mb-4">
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm">←</span>
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm">→</span>
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">Donald Trump</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">USA</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">Politics</span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs">2020</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
