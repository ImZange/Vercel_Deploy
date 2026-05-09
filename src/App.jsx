import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Thermometer, 
  Droplets, 
  Wind, 
  Settings, 
  User, 
  LogOut,
  ChevronRight
} from 'lucide-react';


const misGraficas = [
  { 
    id: 'scatter', 
    nombre: 'Dispersión Polar', 
    archivo: '/polar_scatter.html', 
    icon: <Thermometer size={20}/>, 
    color: 'from-pink-500 to-rose-500' 
  },
  { 
    id: 'line', 
    nombre: 'Línea Polar', 
    archivo: '/polar_line.html', 
    icon: <Droplets size={20}/>, 
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    id: 'bar', 
    nombre: 'Barras Polares', 
    archivo: '/polar_bar.html', 
    icon: <Wind size={20}/>, 
    color: 'from-purple-500 to-indigo-500' 
  }
];

function App() {
  const [graficaActual, setGraficaActual] = useState(misGraficas[0]);

  return (
    <div className="flex min-h-screen bg-[#0f111a] text-slate-200 font-sans">
      
      {/* SIDEBAR MODERNA */}
      <aside className="w-20 lg:w-64 bg-[#161926] border-r border-slate-800 flex flex-col transition-all duration-300">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <LayoutDashboard className="text-white" />
          </div>
          <span className="hidden lg:block font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            EcoStats
          </span>
        </div>

        <nav className="flex-1 px-4 mt-6 space-y-2">
          {misGraficas.map((g) => (
            <button
              key={g.id}
              onClick={() => setGraficaActual(g)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group ${
                graficaActual.id === g.id 
                ? 'bg-slate-800 text-white shadow-xl border border-slate-700' 
                : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors ${graficaActual.id === g.id ? `bg-gradient-to-br ${g.color} text-white` : 'bg-slate-800 group-hover:bg-slate-700'}`}>
                {g.icon}
              </div>
              <span className="hidden lg:block font-medium text-sm">{g.nombre}</span>
              {graficaActual.id === g.id && <ChevronRight className="hidden lg:block ml-auto opacity-50" size={16}/>}
            </button>
          ))}
          
          <div className="pt-8 pb-4 border-t border-slate-800/50 mt-8">
            <p className="hidden lg:block text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-4 px-4">Configuración</p>
            <button className="w-full flex items-center gap-4 p-3 text-slate-500 hover:text-slate-300 transition-colors">
              <Settings size={20}/> <span className="hidden lg:block text-sm">Ajustes</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-2 bg-slate-800/30 rounded-2xl border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">JZ</div>
            <div className="hidden lg:block overflow-hidden">
              <p className="text-xs font-bold truncate">Josué Huerta</p>
              <p className="text-[10px] text-slate-500 truncate">Data Engineer</p>
            </div>
            <LogOut size={14} className="hidden lg:block ml-auto text-slate-600 hover:text-rose-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-4 lg:p-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Panel de Control 
            </h2>
            <p className="text-slate-500 text-sm mt-1">Sexto Semestre - ICI Universidad de Colima</p>
            <p className="text-slate-500 text-sm mt-1">Por:</p>
            <p className="text-slate-500 text-sm font-bold">Rodríguéz Fernandez Sergio Emmanuel</p>
            <p className="text-slate-500 text-sm font-bold">Zamorano Huerta Josué Miguel Ángel</p>
          </div>
          <div className="flex gap-3">
             <div className="px-4 py-2 bg-[#161926] border border-slate-800 rounded-xl text-xs font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Sistema Online
             </div>
          </div>
        </header>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* TARJETA PRINCIPAL DEL IFRAME */}
          <div className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${graficaActual.color} rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
            <div className="relative bg-[#161926] rounded-[2rem] shadow-2xl border border-slate-800 overflow-hidden">
              <div className="p-6 border-b border-slate-800/50 flex items-center justify-between bg-slate-900/20">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${graficaActual.color}`}></div>
                  <h3 className="font-bold text-lg">{graficaActual.nombre}</h3>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
              </div>
              
              <div className="h-[550px] w-full bg-white/5 backdrop-blur-sm">
                <iframe
                  title={graficaActual.nombre}
                  src={graficaActual.archivo}
                  className="w-full h-full border-none grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* TARJETAS DE MÉTRICAS RÁPIDAS (Estilo Neumorphism Dark) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#161926] p-6 rounded-[1.5rem] border border-slate-800 shadow-lg">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Estado del Servidor</p>
              <div className="text-2xl font-black text-white">99.2% UP</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-cyan-500 h-full w-[99%] shadow-[0_0_10px_#22d3ee]"></div>
              </div>
            </div>
            <div className="bg-[#161926] p-6 rounded-[1.5rem] border border-slate-800 shadow-lg">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Última Actualización</p>
              <div className="text-2xl font-black text-white italic">Hace 2m</div>
              <p className="text-[10px] text-slate-600 mt-2">Sincronizado</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-[1.5rem] shadow-xl shadow-purple-900/20 relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-2">Deploy Status</p>
                <div className="text-2xl font-black text-white">Production Ready</div>
                <button className="mt-4 text-xs bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg font-bold transition-all">
                  Ver Logs de Vercel
                </button>
              </div>
              <LayoutDashboard className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            Desarrollado por Josué Huerta • © 2026 Inteligencia de Negocios
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;