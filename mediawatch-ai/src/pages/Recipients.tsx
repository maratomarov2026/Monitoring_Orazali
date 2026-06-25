import { useState } from 'react'
import { Plus, Trash2, Send } from 'lucide-react'

type Channel = 'telegram' | 'whatsapp' | 'email'
interface Recipient { id: number; name: string; channel: Channel; contact: string }

const initialRecipients: Recipient[] = [
  { id: 1, name: 'Алия Нурланова, Руководитель пресс-службы', channel: 'telegram', contact: '@aliya_press' },
  { id: 2, name: 'Бекзат Сейтов, Директор департамента', channel: 'email', contact: 'b.seitov@ministry.gov.kz' },
  { id: 3, name: 'Мадина Касымова, Пресс-секретарь', channel: 'whatsapp', contact: '+7 701 234 56 78' },
]

const channelColors: Record<Channel, string> = {
  telegram: 'bg-sky-100 text-sky-700',
  whatsapp: 'bg-green-100 text-green-700',
  email: 'bg-purple-100 text-purple-700',
}

const channelLabels: Record<Channel, string> = {
  telegram: 'Telegram',
  whatsapp: 'WhatsApp',
  email: 'E-mail',
}

export default function Recipients() {
  const [recipients, setRecipients] = useState<Recipient[]>(initialRecipients)
  const [name, setName] = useState('')
  const [channel, setChannel] = useState<Channel>('telegram')
  const [contact, setContact] = useState('')

  const add = () => {
    if (!name || !contact) return
    setRecipients(r => [...r, { id: Date.now(), name, channel, contact }])
    setName(''); setContact('')
  }

  const remove = (id: number) => setRecipients(r => r.filter(x => x.id !== id))

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Адресаты рассылки</h1>
        <p className="text-slate-500 text-sm">Справка будет отправлена всем адресатам одновременно</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-3">Добавить адресата</label>
        <div className="space-y-3">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Имя и должность"
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-3">
            <select
              value={channel}
              onChange={e => setChannel(e.target.value as Channel)}
              className="px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">E-mail</option>
            </select>
            <input
              value={contact}
              onChange={e => setContact(e.target.value)}
              placeholder={channel === 'telegram' ? '@username' : channel === 'whatsapp' ? '+7 XXX XXX XX XX' : 'email@domain.kz'}
              className="flex-1 px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={add}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
              <Plus size={14} /> Добавить
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-6">
        {recipients.map((r, i) => (
          <div key={r.id} className={`flex items-center gap-4 p-4 ${i < recipients.length - 1 ? 'border-b border-slate-100' : ''}`}>
            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold text-sm">
              {r.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-800">{r.name}</div>
              <div className="text-xs text-slate-500">{r.contact}</div>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${channelColors[r.channel]}`}>
              {channelLabels[r.channel]}
            </span>
            <button onClick={() => remove(r.id)} className="text-slate-400 hover:text-red-500 transition-colors">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        {recipients.length === 0 && (
          <div className="p-8 text-center text-slate-400 text-sm">Нет адресатов</div>
        )}
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          <Send size={14} /> Отправить справку всем
        </button>
        <span className="self-center text-sm text-slate-500">{recipients.length} адресат(ов)</span>
      </div>
    </div>
  )
}
