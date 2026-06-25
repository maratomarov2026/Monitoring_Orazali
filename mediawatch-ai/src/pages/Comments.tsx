import { useState } from 'react'
import { mockComments } from '../data/mockData'
import { Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const platformStats = [
  { name: 'Instagram', count: 2341, positive: 45, neutral: 30, negative: 25 },
  { name: 'Telegram', count: 1987, positive: 50, neutral: 28, negative: 22 },
  { name: 'Facebook', count: 1234, positive: 40, neutral: 35, negative: 25 },
  { name: 'X (Twitter)', count: 987, positive: 55, neutral: 25, negative: 20 },
  { name: 'YouTube', count: 876, positive: 38, neutral: 35, negative: 27 },
  { name: 'СМИ', count: 456, positive: 42, neutral: 33, negative: 25 },
]

type Filter = 'all' | 'positive' | 'neutral' | 'negative'

const sentimentLabels: Record<string, string> = { positive: 'Позитив', neutral: 'Нейтральный', negative: 'Негатив' }

function SentimentBadge({ s }: { s: string }) {
  const cls = s === 'positive' ? 'bg-green-100 text-green-700' : s === 'negative' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{sentimentLabels[s]}</span>
}

export default function Comments() {
  const [filter, setFilter] = useState<Filter>('all')
  const totalComments = platformStats.reduce((s, p) => s + p.count, 0)
  const filtered = filter === 'all' ? mockComments : mockComments.filter(c => c.sentiment === filter)

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Анализ комментариев</h1>
        <p className="text-slate-500 text-sm">Раздел VI справки-отчёта</p>
      </div>

      {/* Статистика по площадкам */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-3xl font-bold text-slate-800">{totalComments.toLocaleString()}</div>
            <div className="text-sm text-slate-500">комментариев зафиксировано</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={platformStats}>
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Топ-50 комментариев */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-800">Топ-50 комментариев по охвату</h2>
          <div className="flex gap-2">
            {(['all', 'positive', 'neutral', 'negative'] as Filter[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f === 'all' ? 'Все' : sentimentLabels[f]}
              </button>
            ))}
            <button className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-full text-xs hover:bg-slate-50">
              <Download size={12} /> XLSX
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((c, i) => (
            <div key={c.id} className="border border-slate-100 rounded-lg p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-xs w-5">{i + 1}.</span>
                  <span className="font-medium text-sm text-slate-800">{c.author}</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">{c.platform}</span>
                  <SentimentBadge s={c.sentiment} />
                </div>
                <span className="text-xs text-slate-400">Охват: {c.reach.toLocaleString()}</span>
              </div>
              <p className="text-sm text-slate-700 mb-3 ml-7">{c.text}</p>
              <div className="flex gap-4 ml-7 text-xs text-slate-500">
                <span>👍 {c.likes.toLocaleString()}</span>
                <span>💬 {c.comments.toLocaleString()}</span>
                <span>🔁 {c.reposts.toLocaleString()}</span>
                <span>🔖 {c.saves.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
