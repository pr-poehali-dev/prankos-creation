import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('desktop');
  const [loading, setLoading] = useState(true);
  const [prankLevel, setPrankLevel] = useState(2);
  const [browserUrl, setBrowserUrl] = useState('');
  const [browserContent, setBrowserContent] = useState('');
  const [socialPosts, setSocialPosts] = useState<string[]>([]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // AI Pranks
  const hackBrowser = () => {
    const pranks = [
      { url: 'google.com', content: '🤖 СИСТЕМА ВЗЛОМАНА! Ваши поисковые запросы теперь контролирует ИИ-хакер! Попробуйте найти "котики" - получите драконов! 🐉' },
      { url: 'youtube.com', content: '🎬 GLITCH DETECTED! Все видео заменены на танцующих роботов. ИИ-хакер решил, что это веселее! 🤖💃' },
      { url: 'vk.com', content: '🔥 СОЦИАЛЬНАЯ СЕТЬ ЗАХВАЧЕНА! Теперь все ваши друзья - это коты программисты. Мяукающий код лучший код! 😸👨‍💻' }
    ];
    const prank = pranks[Math.floor(Math.random() * pranks.length)];
    setBrowserUrl(prank.url);
    setBrowserContent(prank.content);
  };

  const generateSocialPosts = () => {
    const posts = [
      '🤖 Только что встретил ИИ в лифте. Он попросил меня нажать кнопку "облако"...',
      '💻 Мой код сегодня работает без багов. Подозреваю, что за этим стоит ИИ-хакер.',
      '🚀 Искусственный интеллект научился готовить кофе. Теперь он лучше программистов!',
      '⚡ BREAKING: ИИ-хакер заменил все пароли на "123456". Кибербезопасность = 0',
      '🌐 Интернет временно заменён на матрицу. Приносим извинения за неудобства.'
    ];
    setSocialPosts(posts.slice(0, 3));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold mb-8 text-matrix-green neon-glow animate-glitch">
            PrankOS
          </div>
          <div className="w-80 h-4 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-matrix-green via-neon-cyan to-electric-blue animate-pulse" 
                 style={{ width: '100%' }}></div>
          </div>
          <div className="mt-4 text-matrix-green font-mono animate-neon-flicker">
            Система инициализируется... ИИ-шутник активирован! 🚀
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Header */}
      <header className="p-6 border-b border-matrix-green/30">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-matrix-green neon-glow glitch">
            PrankOS v2.077
          </h1>
          <div className="text-sm text-muted-foreground">
            🤖 ИИ-Хакер: Активен | 🔥 Уровень пранков: {prankLevel}
          </div>
        </div>
      </header>

      {/* Desktop Navigation */}
      {activeSection === 'desktop' && (
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl mb-4 text-matrix-green">Рабочий стол PrankOS</h2>
            <p className="text-muted-foreground">
              Выберите программу для взлома ИИ-хакером 🤖
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card 
              className="cursor-pointer hover:scale-105 transition-transform bg-card/50 border-matrix-green/30 hover:border-matrix-green"
              onClick={() => setActiveSection('ai-hacker')}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <CardTitle className="text-matrix-green">ИИ-Хакер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Настройки и описание ИИ-персонажа
                </p>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:scale-105 transition-transform bg-card/50 border-electric-blue/30 hover:border-electric-blue"
              onClick={() => setActiveSection('browser')}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🌐</div>
                <CardTitle className="text-electric-blue">Браузер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Взлом сайтов и фейковые страницы
                </p>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:scale-105 transition-transform bg-card/50 border-neon-pink/30 hover:border-neon-pink"
              onClick={() => setActiveSection('social')}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <CardTitle className="text-neon-pink">Соцсети</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Генерация фейковых постов и комментариев
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* AI Hacker Section */}
      {activeSection === 'ai-hacker' && (
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Button 
                variant="outline" 
                onClick={() => setActiveSection('desktop')}
                className="mr-4 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-background"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <h2 className="text-2xl text-matrix-green neon-glow">Настройки ИИ-Хакера</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-matrix-green/30">
                <CardHeader>
                  <CardTitle className="text-matrix-green">О персонаже 🤖</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-6xl text-center animate-bounce">🤖</div>
                    <h3 className="text-xl font-bold text-center">Алекс-7700</h3>
                    <p className="text-sm text-muted-foreground">
                      Дружелюбный ИИ-хакер из будущего, который обожает подшучивать над обычными программами. 
                      Его миссия - сделать цифровой мир веселее через безобидные пранки и глитчи.
                    </p>
                    <div className="border-l-4 border-neon-cyan pl-4">
                      <p className="text-sm italic text-neon-cyan">
                        "Жизнь без юмора - это просто код без комментариев!" 
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-electric-blue/30">
                <CardHeader>
                  <CardTitle className="text-electric-blue">Настройки пранков</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Уровень жестокости пранков: {prankLevel}
                      </label>
                      <input 
                        type="range" 
                        min="1" 
                        max="5" 
                        value={prankLevel}
                        onChange={(e) => setPrankLevel(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>😊 Мягко</span>
                        <span>😈 Жестко</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-green-900/20 rounded border border-green-500/30">
                        <div className="text-2xl">✅</div>
                        <div className="text-xs text-green-400">Активных скриптов: 42</div>
                      </div>
                      <div className="p-3 bg-blue-900/20 rounded border border-blue-500/30">
                        <div className="text-2xl">🎯</div>
                        <div className="text-xs text-blue-400">Взломано: 1337</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* Browser Section */}
      {activeSection === 'browser' && (
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Button 
                variant="outline" 
                onClick={() => setActiveSection('desktop')}
                className="mr-4 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <h2 className="text-2xl text-electric-blue neon-glow">Хакерский браузер</h2>
            </div>

            <Card className="bg-card/50 border-electric-blue/30">
              <CardHeader className="bg-gray-900/50">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 flex items-center space-x-2 ml-4">
                    <Input
                      placeholder="Введите URL для взлома..."
                      value={browserUrl}
                      onChange={(e) => setBrowserUrl(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                    <Button 
                      onClick={hackBrowser}
                      className="bg-electric-blue hover:bg-electric-blue/80 text-black font-bold px-6"
                    >
                      ВЗЛОМАТЬ! 🚀
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="min-h-[300px] p-6">
                {browserContent ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4 animate-bounce">💥</div>
                    <div className="text-lg text-electric-blue font-bold mb-4 glitch">
                      САЙТ ЗАХВАЧЕН!
                    </div>
                    <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 max-w-2xl mx-auto">
                      <p className="text-white leading-relaxed">
                        {browserContent}
                      </p>
                    </div>
                    <Button 
                      onClick={() => setBrowserContent('')}
                      variant="outline"
                      className="mt-6 border-gray-500 text-gray-300"
                    >
                      Восстановить сайт
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    <div className="text-center">
                      <Icon name="Globe" size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Введите URL и нажмите "ВЗЛОМАТЬ!" для запуска пранка</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Social Media Section */}
      {activeSection === 'social' && (
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Button 
                variant="outline" 
                onClick={() => setActiveSection('desktop')}
                className="mr-4 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <h2 className="text-2xl text-neon-pink neon-glow">Фейковые соцсети</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-card/50 border-neon-pink/30">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-neon-pink">Лента новостей</CardTitle>
                      <Button 
                        onClick={generateSocialPosts}
                        size="sm"
                        className="bg-neon-pink hover:bg-neon-pink/80 text-black font-bold"
                      >
                        Генерировать посты 🎭
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {socialPosts.length > 0 ? (
                      socialPosts.map((post, index) => (
                        <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-pink to-electric-blue flex items-center justify-center text-sm font-bold">
                              ИИ
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-sm mb-1">ИИ-Хакер Алекс-7700</div>
                              <p className="text-sm">{post}</p>
                              <div className="flex items-center space-x-4 mt-3 text-xs text-muted-foreground">
                                <span className="hover:text-neon-pink cursor-pointer">❤️ {Math.floor(Math.random() * 1000)}</span>
                                <span className="hover:text-electric-blue cursor-pointer">💬 {Math.floor(Math.random() * 100)}</span>
                                <span className="hover:text-matrix-green cursor-pointer">🔄 {Math.floor(Math.random() * 50)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        <Icon name="MessageSquare" size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Нажмите "Генерировать посты" для создания фейковых постов</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-card/50 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-sm">Статистика взломов</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Аккаунтов взломано:</span>
                      <span className="text-green-400 font-bold">42,069</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Постов сгенерировано:</span>
                      <span className="text-blue-400 font-bold">13,337</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Мемов создано:</span>
                      <span className="text-pink-400 font-bold">999+</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="text-yellow-400 text-sm">Режим работы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs">Активный хакинг</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Все посты проходят через ИИ-фильтр юмора
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;