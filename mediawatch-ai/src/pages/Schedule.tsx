import { useState } from 'react'

export default function Schedule() {
  const [mode, setMode] = useState<'once' | 'regular'>('once')
  const [checksPerDay, setChecksPerDay] = useState(4)
  const [timeFrom, setTimeFrom] = useState('08:00')
  const [timeTo, setTimeTo] = useState('22:00')


  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Расписание</h1>
        <p className="text-slate-500 text-sm">Настройте частоту и время проведения мониторинга</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-3">Режим мониторинга</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setMode('once')}
            className={`p-4 rounded-xl border-2 text-left transition-colors ${
              mode === 'once' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="font-semibold text-slate-800 mb-1">Единоразовый</div>
            <div className="text-xs text-slate-500">Однократный поиск за указанный период</div>
          </button>
          <button
            onClick={() => setMode('regular')}
            className={`p-4 rounded-xl border-2 text-left transition-colors ${
              mode === 'regular' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="font-semibold text-slate-800 mb-1">Постоянный</div>
            <div className="text-xs text-slate-500">Автоматические проверки по расписанию</div>
          </button>
        </div>
      </div>

      {mode === 'regular' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Проверок в сутки: <span className="text-blue-600">{checksPerDay}</span>
            </label>
            <input
              type="range"
              min={2}
              max={10}
              value={checksPerDay}
              onChange={e => setChecksPerDay(+e.target.value)}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>2 раза</span>
              <span>10 раз</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Начало проверок</label>
              <input
                type="time"
                value={timeFrom}
                onChange={e => setTimeFrom(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Конец проверок</label>
              <input
                type="time"
                value={timeTo}
                onChange={e => setTimeTo(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-700">
              Система проведёт <strong>{checksPerDay}</strong> проверки в сутки с <strong>{timeFrom}</strong> до <strong>{timeTo}</strong>,
              равномерно с интервалом примерно <strong>каждые {Math.round((14 * 60) / checksPerDay)} минут</strong>.
            </p>
          </div>
        </div>
      )}

      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
        Сохранить расписание
      </button>
    </div>
  )
}
