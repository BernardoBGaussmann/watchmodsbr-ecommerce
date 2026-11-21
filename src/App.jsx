import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo ao WatchModsBR</h1>
        </div>
      </main>
    </div>
  )
}

export default App
