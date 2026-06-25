import { useState } from 'react'
import { Plus, X, Sparkles } from 'lucide-react'

const initialWords = [
  { id: 1, word: 'цифровизация', lang: 'ru', size: 'lg' },
  { id: 2, word: 'digitalization', lang: 'en', size: 'lg' },
  { id: 3, word: 'цифрландыру', lang: 'kz', size: 'lg' },
  { id: 4, word: '数字化', lang: 'zh', size: 'md' },
  { id: 5, word: 'цифровой Казахстан', lang: 'ru', size: 'md' },
  { id: 6, word: 'digital Kazakhstan', lang: 'en', size: 'md' },
  { id: 7, word: 'цифрлық Қазақстан', lang: 'kz', size: 'md' },
  { id: 8, word: '#цифровизация', lang: 'ru', size: 'sm' },
  { id: 9, word: '#digitalkz', lang: 'en', size: 'sm' },
  { id: 10, word: 'цифровизация КЗ', lang: 'ru', size: 'sm' },
  { id: 11, word: 'цифризация', lang: 'ru', size: 'sm' },
  { id: 12, word: 'ЦифроКазахстан', lang: 'ru', size: 'sm' },
  { id: 13, word: 'digital economy KZ', lang: 'en', size: 'sm' },
  { id: 14, word: '#цифрлыққазақстан', lang: 'kz', size: 'sm' },
  { id: 15, word: '哈萨克斯坦数字化', lang: 'zh', size: 'sm' },
]

const langColors: Record<string, string> = {
  ru: 'bg-blue-100 text-blue-700 border-blue-200',
  en: 'bg-green-100 text-green-700 border-green-200',
  kz: 'bg-amber-100 text-amber-700 border-amber-200',
  zh: 'bg-red-100 text-red-700 border-red-200',
}

const sizeClasses: Record<string, string> = {
  lg: 'text-xl font-bold',
  md: 'text-base font-semibold',
  sm: 'text-sm',
}

export default function WordCloud() {
  const [words, setWords] = useState(initialWords)
  const [newWord, setNewWord] = useState('')
  const [newLang, setNewLang] = useState('ru')
  const [generating, setGenerating] = useState(false)

  const removeWord = (id: number) => setWords(w => w.filter(x => x.id !== id))

  const addWord = () => {
    if (!newWord.trim()) return
    setWords(w => [...w, { id: Date.now(), word: newWord.trim(), lang: newLang, size: 'sm' }])
    setNewWord('')
  }

  const regenerate = () => {
    setGenerating(true)
    setTimeout(() => setGenerating(false), 1500)
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Облако ключевых слов</h1>
        <p className="text-slate-500 text-sm">ИИ сгенерировал варианты написания на 4 языках, включая ошибочные формы и хэштеги</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4">
            {[['ru', 'Русский'], ['en', 'English'], ['kz', 'Қазақша'], ['zh', '中文']].map(([code, label]) => (
              <div key={code} className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border ${langColors[code]}`}>
                <span className="w-2 h-2 rounded-full bg-current opacity-60"></span>
                {label}
              </div>
            ))}
          </div>
          <button
            onClick={regenerate}
            disabled={generating}
            className="flex items-center gap-2 px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Sparkles size={14} />
            {generating ? 'Генерация...' : 'Перегенерировать'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 min-h-32 p-4 bg-slate-50 rounded-lg">
          {words.map(w => (
            <div
              key={w.id}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border cursor-default group ${langColors[w.lang]} ${sizeClasses[w.size]}`}
            >
              <span>{w.word}</span>
              <button
                onClick={() => removeWord(w.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity ml-1"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 mt-2">Наведите на слово и нажмите ✕ для удаления</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <label className="block text-sm font-semibold text-slate-700 mb-3">Добавить слово вручную</label>
        <div className="flex gap-3">
          <input
            value={newWord}
            onChange={e => setNewWord(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addWord()}
            placeholder="Введите ключевое слово или хэштег"
            className="flex-1 px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newLang}
            onChange={e => setNewLang(e.target.value)}
            className="px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="kz">Қазақша</option>
            <option value="zh">中文</option>
          </select>
          <button
            onClick={addWord}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            <Plus size={14} /> Добавить
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-slate-500">{words.length} слов в облаке</span>
        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Сохранить и продолжить
        </button>
      </div>
    </div>
  )
}
