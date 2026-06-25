import { useState } from 'react'
import { worldMentions, kazakhstanRegions } from '../data/mockData'

type View = 'world' | 'kazakhstan'
type KZFilter = 'all' | 'city' | 'oblast'

function getSentimentColor(p: number, n: number) {
  if (p > 50) return '#22c55e'
  if (n > 30) return '#ef4444'
  return '#94a3b8'
}

export default function MentionsMap() {
  const [view, setView] = useState<View>('kazakhstan')
  const [kzFilter, setKzFilter] = useState<KZFilter>('all')
  const [hovered, setHovered] = useState<string | null>(null)

  const filteredRegions = kazakhstanRegions.filter(r =>
    kzFilter === 'all' ? true : kzFilter === 'city' ? r.type === 'city' : r.type === 'oblast'
  )

  const sortedWorld = [...worldMentions].sort((a, b) => b.count - a.count)
  const sortedKZ = [...filteredRegions].sort((a, b) => b.count - a.count)

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Карта упоминаний</h1>
        <p className="text-slate-500 text-sm">Разделы VII–VIII справки-отчёта</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('world')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${view === 'world' ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
        >
          🌍 Карта мира
        </button>
        <button
          onClick={() => setView('kazakhstan')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${view === 'kazakhstan' ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
        >
          🇰🇿 Регионы Казахстана
        </button>
      </div>

      {view === 'world' && (
        <div>
          {/* Bubble chart визуализация */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
            <h2 className="font-semibold text-slate-700 mb-4 text-sm">Пузырьковая карта по странам</h2>
            <div className="relative bg-slate-800 rounded-lg overflow-hidden" style={{ height: 320 }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-slate-500 text-sm">Карта мира (схематичное отображение)</div>
              </div>
              {/* Казахстан - большой пузырь по центру */}
              <div className="absolute" style={{ left: '63%', top: '38%', transform: 'translate(-50%,-50%)' }}>
                <div
                  className="rounded-full flex items-center justify-center text-white font-bold cursor-pointer transition-transform hover:scale-110 relative"
                  style={{ width: 90, height: 90, background: getSentimentColor(45, 23), opacity: 0.85 }}
                  title="Казахстан: 4521 упоминаний"
                >
                  <div className="text-center">
                    <div className="text-xs">КЗ</div>
                    <div className="text-sm font-bold">4521</div>
                  </div>
                </div>
              </div>
              {/* Россия */}
              <div className="absolute" style={{ left: '68%', top: '28%', transform: 'translate(-50%,-50%)' }}>
                <div className="rounded-full flex items-center justify-center text-white font-bold" style={{ width: 55, height: 55, background: getSentimentColor(20, 45), opacity: 0.8 }}>
                  <div className="text-center"><div className="text-xs">РФ</div><div className="text-xs">1203</div></div>
                </div>
              </div>
              {/* Великобритания */}
              <div className="absolute" style={{ left: '48%', top: '28%', transform: 'translate(-50%,-50%)' }}>
                <div className="rounded-full flex items-center justify-center text-white font-bold" style={{ width: 44, height: 44, background: getSentimentColor(65, 10), opacity: 0.8 }}>
                  <div className="text-center"><div className="text-xs">UK</div><div className="text-xs">891</div></div>
                </div>
              </div>
              {/* США */}
              <div className="absolute" style={{ left: '22%', top: '38%', transform: 'translate(-50%,-50%)' }}>
                <div className="rounded-full flex items-center justify-center text-white font-bold" style={{ width: 38, height: 38, background: getSentimentColor(55, 15), opacity: 0.8 }}>
                  <div className="text-center"><div className="text-xs">US</div><div className="text-xs">567</div></div>
                </div>
              </div>
              {/* Китай */}
              <div className="absolute" style={{ left: '75%', top: '40%', transform: 'translate(-50%,-50%)' }}>
                <div className="rounded-full flex items-center justify-center text-white font-bold" style={{ width: 36, height: 36, background: getSentimentColor(40, 10), opacity: 0.8 }}>
                  <div className="text-center"><div className="text-xs">CN</div><div className="text-xs">445</div></div>
                </div>
              </div>
              {/* Легенда */}
              <div className="absolute bottom-3 left-3 flex gap-3">
                {[['#22c55e', 'Позитив'], ['#94a3b8', 'Нейтральный'], ['#ef4444', 'Негатив']].map(([c, l]) => (
                  <div key={l} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ background: c }}></div>
                    <span className="text-white text-xs opacity-70">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Таблица стран */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Страна</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500">Упоминаний</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-500">Тональность</th>
                </tr>
              </thead>
              <tbody>
                {sortedWorld.map(w => (
                  <tr key={w.country} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{w.country}</td>
                    <td className="px-4 py-3 text-right font-semibold">{w.count.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex h-4 rounded-full overflow-hidden">
                        <div style={{ width: `${w.positive}%`, background: '#22c55e' }}></div>
                        <div style={{ width: `${w.neutral}%`, background: '#94a3b8' }}></div>
                        <div style={{ width: `${w.negative}%`, background: '#ef4444' }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === 'kazakhstan' && (
        <div>
          {/* Карта Казахстана */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-slate-700 text-sm">Схематическая карта регионов</h2>
              <div className="flex gap-2">
                {(['all', 'city', 'oblast'] as KZFilter[]).map(f => (
                  <button
                    key={f}
                    onClick={() => setKzFilter(f)}
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${kzFilter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                  >
                    {f === 'all' ? 'Все регионы' : f === 'city' ? 'Города' : 'Области'}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative bg-slate-100 rounded-xl overflow-hidden" style={{ height: 400 }}>
              {kazakhstanRegions
                .filter(r => kzFilter === 'all' ? true : kzFilter === 'city' ? r.type === 'city' : r.type === 'oblast')
                .map(r => {
                  const color = getSentimentColor(r.positive, r.negative)
                  const size = r.type === 'city' ? 44 : Math.max(28, Math.min(44, r.count / 30))
                  return (
                    <div
                      key={r.name}
                      className="absolute cursor-pointer transition-transform hover:scale-110 group"
                      style={{
                        left: `${r.x}%`,
                        top: `${r.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onMouseEnter={() => setHovered(r.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className={`rounded-full flex items-center justify-center text-white font-bold ${r.type === 'city' ? 'ring-2 ring-white shadow-lg' : ''}`}
                        style={{ width: size, height: size, background: color, opacity: 0.85 }}
                      >
                        <span className="text-xs">{r.count > 200 ? r.count : ''}</span>
                      </div>
                      {hovered === r.name && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white text-xs rounded-lg p-2 whitespace-nowrap z-10 shadow-lg">
                          <div className="font-semibold">{r.name}</div>
                          <div>Упоминаний: {r.count}</div>
                          <div className="flex gap-2 mt-1">
                            <span className="text-green-400">+{r.positive}%</span>
                            <span className="text-slate-400">~{r.neutral}%</span>
                            <span className="text-red-400">−{r.negative}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              <div className="absolute bottom-3 left-3 flex gap-3">
                {[['#22c55e', 'Позитив'], ['#94a3b8', 'Нейтральный'], ['#ef4444', 'Негатив']].map(([c, l]) => (
                  <div key={l} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ background: c }}></div>
                    <span className="text-slate-600 text-xs">{l}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full ring-2 ring-slate-400 bg-slate-300"></div>
                  <span className="text-slate-600 text-xs">Город респ. значения</span>
                </div>
              </div>
            </div>
          </div>

          {/* Таблица регионов */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Регион</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Тип</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500">Упоминаний</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-500">Тональность</th>
                </tr>
              </thead>
              <tbody>
                {sortedKZ.map(r => (
                  <tr key={r.name} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{r.name}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded text-xs ${r.type === 'city' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                        {r.type === 'city' ? 'Город' : 'Область'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">{r.count.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex h-4 rounded-full overflow-hidden">
                        <div style={{ width: `${r.positive}%`, background: '#22c55e' }}></div>
                        <div style={{ width: `${r.neutral}%`, background: '#94a3b8' }}></div>
                        <div style={{ width: `${r.negative}%`, background: '#ef4444' }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
