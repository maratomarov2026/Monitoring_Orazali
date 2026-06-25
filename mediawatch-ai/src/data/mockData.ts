export const mockMentions = [
  { id: 1, title: 'Новый закон о цифровой экономике получил широкую поддержку', source: 'kazinform.kz', date: '2025-06-20', sentiment: 'positive', url: 'https://kazinform.kz/article/1', type: 'media', country: 'Казахстан', region: 'Астана', reactions: 245 },
  { id: 2, title: 'Граждане обсуждают реформу в социальных сетях', source: 'instagram.com', date: '2025-06-21', sentiment: 'neutral', url: 'https://instagram.com/p/1', type: 'social', country: 'Казахстан', region: 'Алматы', reactions: 187 },
  { id: 3, title: 'Критика законопроекта нарастает среди экспертного сообщества', source: 'tengrinews.kz', date: '2025-06-22', sentiment: 'negative', url: 'https://tengrinews.kz/article/2', type: 'media', country: 'Казахстан', region: 'Алматы', reactions: 312 },
  { id: 4, title: 'Международные эксперты высоко оценили инициативу', source: 'reuters.com', date: '2025-06-22', sentiment: 'positive', url: 'https://reuters.com/article/1', type: 'media', country: 'Великобритания', region: null, reactions: 891 },
  { id: 5, title: 'Обсуждение в Telegram-каналах: за и против', source: 'telegram.org', date: '2025-06-23', sentiment: 'neutral', url: 'https://t.me/channel/1', type: 'social', country: 'Казахстан', region: 'Шымкент', reactions: 156 },
  { id: 6, title: 'Официальный комментарий Министерства цифрового развития', source: 'gov.kz', date: '2025-06-23', sentiment: 'positive', url: 'https://gov.kz/article/1', type: 'gov', country: 'Казахстан', region: 'Астана', reactions: 423 },
  { id: 7, title: 'Блогеры: что означает принятый закон для бизнеса', source: 'medium.com', date: '2025-06-24', sentiment: 'neutral', url: 'https://medium.com/1', type: 'blog', country: 'США', region: null, reactions: 67 },
  { id: 8, title: 'Реакция российских СМИ на казахстанские реформы', source: 'rbc.ru', date: '2025-06-24', sentiment: 'negative', url: 'https://rbc.ru/article/1', type: 'media', country: 'Россия', region: null, reactions: 1203 },
  { id: 9, title: 'Позитивные итоги первого квартала реализации программы', source: 'inform.kz', date: '2025-06-25', sentiment: 'positive', url: 'https://inform.kz/article/1', type: 'media', country: 'Казахстан', region: 'Карагандинская', reactions: 334 },
  { id: 10, title: 'YouTube-дискуссия набирает миллион просмотров', source: 'youtube.com', date: '2025-06-25', sentiment: 'neutral', url: 'https://youtube.com/watch?v=1', type: 'social', country: 'Казахстан', region: 'Алматы', reactions: 2156 },
]

export const mockComments = [
  { id: 1, author: '@aibek_kz', platform: 'Instagram', sentiment: 'positive', text: 'Отличная инициатива! Давно пора было принять такой закон. Поддерживаю полностью.', likes: 1240, comments: 89, reposts: 234, saves: 156, reach: 45000 },
  { id: 2, author: '@critic2025', platform: 'Telegram', sentiment: 'negative', text: 'Закон принят без обсуждения с бизнесом. Это ударит по малому предпринимательству.', likes: 987, comments: 234, reposts: 456, saves: 78, reach: 38000 },
  { id: 3, author: 'Нурлан Б.', platform: 'Facebook', sentiment: 'neutral', text: 'Нужно посмотреть на практику применения. Пока рано делать выводы.', likes: 345, comments: 67, reposts: 89, saves: 23, reach: 12000 },
  { id: 4, author: '@digitalkz', platform: 'X (Twitter)', sentiment: 'positive', text: 'Казахстан становится лидером цифровой трансформации в Центральной Азии!', likes: 2341, comments: 178, reposts: 892, saves: 445, reach: 89000 },
  { id: 5, author: 'Asem_Nurova', platform: 'YouTube', sentiment: 'negative', text: 'Почему не спросили мнение граждан? Закон принят в спешке.', likes: 789, comments: 345, reposts: 123, saves: 56, reach: 23000 },
  { id: 6, author: '@news_kz_official', platform: 'Telegram', sentiment: 'positive', text: 'Министерство дало подробные разъяснения по всем спорным пунктам закона.', likes: 1567, comments: 234, reposts: 678, saves: 289, reach: 67000 },
  { id: 7, author: 'Болат Сейткали', platform: 'Facebook', sentiment: 'neutral', text: 'Интересный подход. Посмотрим как будет работать на практике через год.', likes: 234, comments: 45, reposts: 67, saves: 12, reach: 8900 },
  { id: 8, author: '@tech_analyst_kz', platform: 'X (Twitter)', sentiment: 'positive', text: 'Наконец-то правовая база для IT-сектора. Инвесторы давно этого ждали.', likes: 3456, comments: 567, reposts: 1234, saves: 678, reach: 145000 },
]

export const worldMentions = [
  { country: 'Казахстан', code: 'KZ', count: 4521, positive: 45, neutral: 32, negative: 23 },
  { country: 'Россия', code: 'RU', count: 1203, positive: 20, neutral: 35, negative: 45 },
  { country: 'Великобритания', code: 'GB', count: 891, positive: 65, neutral: 25, negative: 10 },
  { country: 'США', code: 'US', count: 567, positive: 55, neutral: 30, negative: 15 },
  { country: 'Китай', code: 'CN', count: 445, positive: 40, neutral: 50, negative: 10 },
  { country: 'Германия', code: 'DE', count: 234, positive: 50, neutral: 35, negative: 15 },
  { country: 'Узбекистан', code: 'UZ', count: 189, positive: 60, neutral: 30, negative: 10 },
  { country: 'Турция', code: 'TR', count: 156, positive: 45, neutral: 40, negative: 15 },
  { country: 'Кыргызстан', code: 'KG', count: 134, positive: 50, neutral: 35, negative: 15 },
  { country: 'Беларусь', code: 'BY', count: 98, positive: 30, neutral: 45, negative: 25 },
]

export const kazakhstanRegions = [
  { name: 'Астана', type: 'city', count: 1234, positive: 50, neutral: 35, negative: 15, x: 55, y: 30 },
  { name: 'Алматы', type: 'city', count: 987, positive: 40, neutral: 38, negative: 22, x: 72, y: 62 },
  { name: 'Шымкент', type: 'city', count: 456, positive: 45, neutral: 35, negative: 20, x: 48, y: 72 },
  { name: 'Карагандинская', type: 'oblast', count: 334, positive: 48, neutral: 32, negative: 20, x: 58, y: 42 },
  { name: 'Алматинская', type: 'oblast', count: 287, positive: 42, neutral: 36, negative: 22, x: 72, y: 55 },
  { name: 'Акмолинская', type: 'oblast', count: 245, positive: 52, neutral: 33, negative: 15, x: 50, y: 25 },
  { name: 'Актюбинская', type: 'oblast', count: 198, positive: 44, neutral: 38, negative: 18, x: 28, y: 40 },
  { name: 'Восточно-Казахстанская', type: 'oblast', count: 178, positive: 46, neutral: 34, negative: 20, x: 82, y: 38 },
  { name: 'Туркестанская', type: 'oblast', count: 167, positive: 48, neutral: 33, negative: 19, x: 50, y: 75 },
  { name: 'Павлодарская', type: 'oblast', count: 156, positive: 50, neutral: 32, negative: 18, x: 68, y: 28 },
  { name: 'Жамбылская', type: 'oblast', count: 145, positive: 43, neutral: 37, negative: 20, x: 60, y: 65 },
  { name: 'Костанайская', type: 'oblast', count: 134, positive: 49, neutral: 33, negative: 18, x: 38, y: 22 },
  { name: 'Западно-Казахстанская', type: 'oblast', count: 123, positive: 45, neutral: 36, negative: 19, x: 18, y: 38 },
  { name: 'Атырауская', type: 'oblast', count: 112, positive: 47, neutral: 35, negative: 18, x: 15, y: 52 },
  { name: 'Мангистауская', type: 'oblast', count: 101, positive: 44, neutral: 37, negative: 19, x: 12, y: 65 },
  { name: 'Северо-Казахстанская', type: 'oblast', count: 98, positive: 51, neutral: 32, negative: 17, x: 45, y: 15 },
  { name: 'Кызылординская', type: 'oblast', count: 87, positive: 46, neutral: 36, negative: 18, x: 38, y: 62 },
  { name: 'Жетысуская', type: 'oblast', count: 78, positive: 43, neutral: 38, negative: 19, x: 78, y: 52 },
  { name: 'Абайская', type: 'oblast', count: 67, positive: 47, neutral: 35, negative: 18, x: 75, y: 45 },
  { name: 'Улытауская', type: 'oblast', count: 56, positive: 45, neutral: 37, negative: 18, x: 42, y: 50 },
]
