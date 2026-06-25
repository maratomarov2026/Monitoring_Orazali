import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NewMonitoring from './pages/NewMonitoring'
import WordCloud from './pages/WordCloud'
import Schedule from './pages/Schedule'
import Recipients from './pages/Recipients'
import Report from './pages/Report'
import Comments from './pages/Comments'
import MentionsMap from './pages/MentionsMap'
import Tasks from './pages/Tasks'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/setup/new" replace />} />
          <Route path="setup/new" element={<NewMonitoring />} />
          <Route path="setup/wordcloud" element={<WordCloud />} />
          <Route path="setup/schedule" element={<Schedule />} />
          <Route path="setup/recipients" element={<Recipients />} />
          <Route path="results/report" element={<Report />} />
          <Route path="results/comments" element={<Comments />} />
          <Route path="results/map" element={<MentionsMap />} />
          <Route path="results/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
