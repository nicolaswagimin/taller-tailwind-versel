import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-6">
            <div className="w-1/2">
              <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                  alt="Minimalist desk lamp with plant"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Green plants are going to Extinct about 500 times faster than they should, Study finds
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  If you are the sort of person who just can not keep a plant alive, you are not alone according to a new study published June 10 in the journal Nature..
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Alexander Parkinson"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
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

        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <span className="text-lg">🌍</span>
              <span className="text-sm font-medium text-gray-700">Global</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <span className="text-lg">💼</span>
              <span className="text-sm font-medium text-gray-700">Business</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <span className="text-lg">🎬</span>
              <span className="text-sm font-medium text-gray-700">Entertainment</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-blue-50">
              <span className="text-lg">⚽</span>
              <span className="text-sm font-medium text-blue-600">Sports</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
              <span className="text-lg">🏥</span>
              <span className="text-sm font-medium text-gray-700">Health</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Coffee cup"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            How to make the perfect morning coffee, according to the Science
          </h3>
          <div className="flex items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786"
              alt="Tara Gibson"
              width={32}
              height={32}
              className="w-6 h-6 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">Tara Gibson</p>
              <p className="text-xs text-gray-500">Jul 13, 2019</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              placeholder="Search for articles" 
              className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
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

        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-6">
          <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Modern building"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            An Inspiring Short Film
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm">👁</span>
            <span className="text-sm text-gray-600">80,989</span>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-4">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Alex Morrison"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover"
            />
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
