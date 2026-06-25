import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Play } from 'lucide-react'

const sourceOptions = [
  { id: 'media', label: 'СМИ и порталы' },
  { id: 'social', label: 'Социальные сети' },
  { id: 'comments', label: 'Комментарии' },
  { id: 'blogs', label: 'Блоги и форумы' },
  { id: 'gov', label: 'Государственные ресурсы (.gov.kz)' },
]

const langOptions = [
  { id: 'kz', label: 'Казахский' },
  { id: 'ru', label: 'Русский' },
  { id: 'en', label: 'Английский' },
  { id: 'zh', label: 'Китайский' },
]

export default function NewMonitoring() {
  const navigate = useNavigate()
  const [topic, setTopic] = useState('')
  const [dateFrom, setDateFrom] = useState('2025-06-01')
  const [dateTo, setDateTo] = useState('2025-06-25')
  const [sources, setSources] = useState<string[]>(['media', 'social', 'comments'])
  const [langs, setLangs] = useState<string[]>(['kz', 'ru'])
  const [loading, setLoading] = useState(false)

  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])
  }

  const handleStart = () => {
    if (!topic.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/results/report')
    }, 2000)
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Новый мониторинг</h1>
        <p className="text-slate-500 text-sm">Введите тему и настройте параметры поиска</p>
      </div>

      <div className="space-y-6">
        {/* Тема */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Тема или ключевое слово
          </label>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="Например: цифровизация Казахстана"
              className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Период */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">Период мониторинга</label>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs text-slate-500 mb-1 block">Дата начала</label>
              <input
                type="date"
                value={dateFrom}
                onChange={e => setDateFrom(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-slate-500 mb-1 block">Дата окончания</label>
              <input
                type="date"
                value={dateTo}
                onChange={e => setDateTo(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Источники */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">Источники</label>
          <div className="flex flex-wrap gap-2">
            {sourceOptions.map(s => (
              <button
                key={s.id}
                onClick={() => toggle(sources, setSources, s.id)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  sources.includes(s.id)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Языки */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">Языки мониторинга</label>
          <div className="flex gap-2">
            {langOptions.map(l => (
              <button
                key={l.id}
                onClick={() => toggle(langs, setLangs, l.id)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  langs.includes(l.id)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={!topic.trim() || loading}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Play size={16} />
          {loading ? 'Запуск мониторинга...' : 'Запустить мониторинг'}
        </button>
      </div>
    </div>
  )
}
