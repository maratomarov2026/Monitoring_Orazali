import { NavLink } from 'react-router-dom'
import {
  Search, Cloud, Calendar, Users,
  FileText, MessageSquare, Map, CheckSquare, Radio
} from 'lucide-react'

const navItems = [
  { group: 'Настройка', items: [
    { to: '/setup/new', icon: Search, label: 'Новый мониторинг' },
    { to: '/setup/wordcloud', icon: Cloud, label: 'Облако слов' },
    { to: '/setup/schedule', icon: Calendar, label: 'Расписание' },
    { to: '/setup/recipients', icon: Users, label: 'Адресаты' },
  ]},
  { group: 'Результаты', items: [
    { to: '/results/report', icon: FileText, label: 'Справка-отчёт' },
    { to: '/results/comments', icon: MessageSquare, label: 'Комментарии' },
    { to: '/results/map', icon: Map, label: 'Карта упоминаний' },
    { to: '/results/tasks', icon: CheckSquare, label: 'Мои задачи' },
  ]},
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <Radio size={18} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-slate-800 text-sm">MediaWatch AI</div>
            <div className="text-xs text-slate-500">Мониторинг упоминаний</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        {navItems.map(group => (
          <div key={group.group} className="mb-6">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
              {group.group}
            </div>
            {group.items.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                  }`
                }
              >
                <item.icon size={16} />
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="text-xs text-slate-400 text-center">v1.0 · MediaWatch AI</div>
      </div>
    </aside>
  )
}
