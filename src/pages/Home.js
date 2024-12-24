import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white p-12 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-6">
          Selamat Datang di Sistem Informasi Penelitian (SIPENA)
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          SIPENA adalah platform inovatif untuk memudahkan pengelolaan data penelitian. Dengan fitur-fitur modern, kami hadir untuk mendukung para peneliti dalam mencapai kesuksesan.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          Pelajari Lebih Lanjut
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105">
          <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full mx-auto mb-6">
            <span className="text-3xl">📊</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Pengelolaan Data</h2>
          <p className="text-gray-700">
            Kelola data penelitian Anda secara efisien dan terstruktur untuk hasil yang optimal.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105">
          <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full mx-auto mb-6">
            <span className="text-3xl">🌐</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Akses Online</h2>
          <p className="text-gray-700">
            Akses sistem kapan saja dan di mana saja untuk fleksibilitas maksimal.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105">
          <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mx-auto mb-6">
            <span className="text-3xl">🔒</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Keamanan Data</h2>
          <p className="text-gray-700">
            Sistem kami dirancang untuk melindungi data penelitian Anda dengan tingkat keamanan tinggi.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-600 text-white p-12 rounded-xl shadow-2xl text-center">
        <h2 className="text-4xl font-bold mb-6">
          Bergabung dengan SIPENA Sekarang!
        </h2>
        <p className="text-lg mb-8">
          Dapatkan akses penuh ke semua fitur SIPENA dan tingkatkan produktivitas penelitian Anda.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}

export default Home;
