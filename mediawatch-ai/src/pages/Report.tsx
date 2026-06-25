import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { mockMentions } from '../data/mockData'
import { Download, Send, ExternalLink } from 'lucide-react'

const sentimentColors = { positive: '#22c55e', neutral: '#94a3b8', negative: '#ef4444' }
const sentimentLabels = { positive: 'Позитив', neutral: 'Нейтральный', negative: 'Негатив' }

const pieData = [
  { name: 'Позитив', value: 45, color: '#22c55e' },
  { name: 'Нейтральный', value: 32, color: '#94a3b8' },
  { name: 'Негатив', value: 23, color: '#ef4444' },
]

const byTypePlatform = [
  { name: 'СМИ', positive: 48, neutral: 30, negative: 22 },
  { name: 'Соцсети', positive: 42, neutral: 35, negative: 23 },
  { name: 'Блоги', positive: 40, neutral: 38, negative: 22 },
  { name: 'Гос.ресурсы', positive: 70, neutral: 25, negative: 5 },
]

const total = 8220
const typeBreakdown = [
  { label: 'СМИ и порталы', count: 3450, icon: '📰' },
  { label: 'Социальные сети', count: 3210, icon: '📱' },
  { label: 'Блоги и форумы', count: 1230, icon: '✍️' },
  { label: 'Гос. ресурсы', count: 330, icon: '🏛️' },
]

const top = {
  positive: mockMentions.filter(m => m.sentiment === 'positive'),
  neutral: mockMentions.filter(m => m.sentiment === 'neutral'),
  negative: mockMentions.filter(m => m.sentiment === 'negative'),
}

function SentimentBadge({ s }: { s: string }) {
  const cls = s === 'positive' ? 'bg-green-100 text-green-700' : s === 'negative' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{sentimentLabels[s as keyof typeof sentimentLabels]}</span>
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4">
      <h2 className="text-base font-bold text-slate-800 mb-4">
        <span className="text-blue-600 mr-2">{num}.</span>{title}
      </h2>
      {children}
    </div>
  )
}

export default function Report() {
  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="bg-blue-600 text-white rounded-xl p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-blue-200 text-sm mb-1">СПРАВКА ПО ИТОГАМ МОНИТОРИНГА</div>
            <h1 className="text-xl font-bold mb-2">«Цифровизация Казахстана»</h1>
            <div className="text-blue-200 text-sm">Период: 1 июня — 25 июня 2025 г.</div>
            <div className="text-blue-200 text-sm">Сформировано: 25 июня 2025 г., 10:45</div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors">
              <Download size={14} /> PDF
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors">
              <Send size={14} /> Разослать
            </button>
          </div>
        </div>
      </div>

      {/* I. Статистика */}
      <Section num="I" title="Общая статистика упоминаний">
        <div className="flex items-center gap-8 mb-4">
          <div>
            <div className="text-4xl font-bold text-slate-800">{total.toLocaleString()}</div>
            <div className="text-sm text-slate-500">упоминаний за период</div>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-3">
            {typeBreakdown.map(t => (
              <div key={t.label} className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-lg mb-1">{t.icon}</div>
                <div className="font-bold text-slate-800">{t.count.toLocaleString()}</div>
                <div className="text-xs text-slate-500">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* II. Тональность */}
      <Section num="II" title="Тональность публикаций">
        <div className="flex gap-8 items-center">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value">
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex-1">
            {pieData.map(d => (
              <div key={d.name} className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ background: d.color }}></div>
                <span className="text-sm text-slate-700 w-28">{d.name}</span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${d.value}%`, background: d.color }}></div>
                </div>
                <span className="text-sm font-semibold text-slate-800 w-10">{d.value}%</span>
              </div>
            ))}
            <div className="mt-4">
              <div className="text-xs text-slate-500 mb-2">По типам площадок</div>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={byTypePlatform} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={70} />
                  <Tooltip />
                  <Bar dataKey="positive" stackId="a" fill="#22c55e" />
                  <Bar dataKey="neutral" stackId="a" fill="#94a3b8" />
                  <Bar dataKey="negative" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Section>

      {/* III. Топ-10 */}
      <Section num="III" title="Топ-10 публикаций по тональности">
        {(['positive', 'neutral', 'negative'] as const).map(sentiment => (
          <div key={sentiment} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: sentimentColors[sentiment] }}></div>
              <span className="text-sm font-semibold text-slate-700">{sentimentLabels[sentiment]}</span>
            </div>
            {top[sentiment].map(m => (
              <div key={m.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg mb-2">
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800">{m.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{m.source} · {m.date}</div>
                </div>
                <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        ))}
      </Section>

      {/* IV. Ссылки */}
      <Section num="IV" title="Подборка ссылок на все упоминания">
        <div className="flex justify-end mb-3">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-xs hover:bg-slate-50">
            <Download size={12} /> Выгрузить XLSX
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 text-xs font-semibold text-slate-500">Заголовок</th>
                <th className="text-left py-2 text-xs font-semibold text-slate-500">Источник</th>
                <th className="text-left py-2 text-xs font-semibold text-slate-500">Дата</th>
                <th className="text-left py-2 text-xs font-semibold text-slate-500">Тональность</th>
              </tr>
            </thead>
            <tbody>
              {mockMentions.map(m => (
                <tr key={m.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-2 pr-4">
                    <a href={m.url} className="text-blue-600 hover:underline">{m.title}</a>
                  </td>
                  <td className="py-2 pr-4 text-slate-600">{m.source}</td>
                  <td className="py-2 pr-4 text-slate-500">{m.date}</td>
                  <td className="py-2"><SentimentBadge s={m.sentiment} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* V. Рекомендации */}
      <Section num="V" title="Рекомендации по реагированию">
        <div className="space-y-3">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="font-semibold text-red-800 text-sm mb-1">Нейтрализация негатива</div>
            <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
              <li>Опубликовать официальный комментарий по критике от RBC.ru с разъяснением позиции</li>
              <li>Организовать пресс-конференцию для ответа на вопросы экспертного сообщества</li>
              <li>Усилить работу в Telegram-каналах с конкретными цифрами и фактами</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="font-semibold text-green-800 text-sm mb-1">Увеличение доли позитива</div>
            <ul className="text-sm text-green-700 space-y-1 list-disc pl-4">
              <li>Разместить успешные кейсы цифровизации в ведущих казахстанских СМИ</li>
              <li>Активизировать публикации в Instagram и YouTube с визуальным контентом</li>
              <li>Привлечь лидеров мнений для освещения позитивных результатов</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
