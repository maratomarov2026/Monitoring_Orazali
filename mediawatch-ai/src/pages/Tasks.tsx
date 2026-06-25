import { CheckCircle2, Clock, Play, RotateCcw } from 'lucide-react'

const tasks = [
  {
    id: 1, topic: 'Цифровизация Казахстана', status: 'done',
    period: '01.06.2025 – 25.06.2025', mentions: 8220, created: '25.06.2025 10:30',
    mode: 'Единоразовый'
  },
  {
    id: 2, topic: 'Реформа образования Казахстан', status: 'running',
    period: '20.06.2025 – 25.06.2025', mentions: 3410, created: '25.06.2025 09:00',
    mode: 'Постоянный (4 раза/сутки)'
  },
  {
    id: 3, topic: 'Экономика Казахстана 2025', status: 'done',
    period: '01.05.2025 – 31.05.2025', mentions: 12450, created: '01.06.2025 08:00',
    mode: 'Единоразовый'
  },
  {
    id: 4, topic: 'ЭКСПО 2026 Астана', status: 'done',
    period: '01.06.2025 – 25.06.2025', mentions: 5670, created: '24.06.2025 15:00',
    mode: 'Постоянный (2 раза/сутки)'
  },
]

export default function Tasks() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Мои задачи</h1>
        <p className="text-slate-500 text-sm">Запущенные и завершённые мониторинги</p>
      </div>

      <div className="space-y-3">
        {tasks.map(t => (
          <div key={t.id} className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-start gap-4">
              <div className={`mt-0.5 ${t.status === 'done' ? 'text-green-500' : 'text-blue-500'}`}>
                {t.status === 'done' ? <CheckCircle2 size={20} /> : <Clock size={20} className="animate-pulse" />}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">«{t.topic}»</div>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                      <span>Период: {t.period}</span>
                      <span>Режим: {t.mode}</span>
                      <span>Создан: {t.created}</span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-slate-800">{t.mentions.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">упоминаний</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    t.status === 'done' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {t.status === 'done' ? 'Завершён' : 'Выполняется'}
                  </span>
                  {t.status === 'done' && (
                    <>
                      <button className="flex items-center gap-1 px-2.5 py-1 border border-slate-200 rounded-full text-xs text-slate-600 hover:bg-slate-50">
                        <Play size={10} /> Открыть справку
                      </button>
                      <button className="flex items-center gap-1 px-2.5 py-1 border border-slate-200 rounded-full text-xs text-slate-600 hover:bg-slate-50">
                        <RotateCcw size={10} /> Повторить
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
