import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    occasion: '',
    details: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🎉 Заявка принята!",
      description: "Свяжемся с вами в течение 2 часов для обсуждения вашей уникальной песни",
      duration: 5000,
    });
    setFormData({ name: '', contact: '', occasion: '', details: '' });
  };

  const occasions = [
    { icon: "Cake", title: "День рождения", price: "от 15 000 ₽" },
    { icon: "Heart", title: "Свадьба", price: "от 20 000 ₽" },
    { icon: "Gift", title: "Годовщина", price: "от 15 000 ₽" },
    { icon: "Baby", title: "Рождение ребёнка", price: "от 15 000 ₽" },
    { icon: "Star", title: "Признание в любви", price: "от 12 000 ₽" },
    { icon: "Trophy", title: "Юбилей", price: "от 18 000 ₽" }
  ];

  const steps = [
    {
      number: "1",
      title: "Заявка",
      description: "Заполните форму, расскажите о человеке и событии",
      icon: "FileText"
    },
    {
      number: "2",
      title: "Созвон",
      description: "Обсудим детали, стиль музыки и ваши пожелания",
      icon: "Phone"
    },
    {
      number: "3",
      title: "Создание",
      description: "Пишем текст и музыку специально для вас (5-7 дней)",
      icon: "Music"
    },
    {
      number: "4",
      title: "Правки",
      description: "2 бесплатные корректировки текста под ваши пожелания",
      icon: "Edit"
    },
    {
      number: "5",
      title: "Готово!",
      description: "Получаете профессиональную запись в MP3",
      icon: "CheckCircle"
    }
  ];

  const reviews = [
    {
      name: "Екатерина",
      text: "Заказала песню мужу на годовщину. Когда он услышал - не сдержал слёз! Это было магическое мгновение. Спасибо за лучший подарок в моей жизни!",
      stars: 5,
      occasion: "Годовщина свадьбы"
    },
    {
      name: "Александр",
      text: "Сделал предложение девушке под эту песню. Она сказала ДА! Теперь это наша особенная мелодия. Качество записи - космос!",
      stars: 5,
      occasion: "Предложение"
    },
    {
      name: "Мария",
      text: "Песня для мамы на 60-летие стала главным сюрпризом вечера. Все гости были в восторге, а мама плакала от счастья. Браво!",
      stars: 5,
      occasion: "Юбилей мамы"
    }
  ];

  const features = [
    { icon: "Sparkles", title: "Уникальный текст", description: "Каждое слово про вашего человека" },
    { icon: "Headphones", title: "Профессиональная студия", description: "Качество как у звёзд эстрады" },
    { icon: "Clock", title: "Быстро", description: "Готово за 5-10 дней" },
    { icon: "Shield", title: "Гарантия", description: "2 бесплатные правки текста" },
    { icon: "Download", title: "MP3 высокого качества", description: "Готово к воспроизведению везде" },
    { icon: "Infinity", title: "Навсегда ваша", description: "Полные права на композицию" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="text-8xl mb-6 animate-pulse-glow inline-block">🎵</div>
          </div>
          
          <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-primary to-accent animate-shimmer">
            🔥 Более 500 счастливых клиентов
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Подарите песню,
            </span>
            <br />
            <span className="text-foreground">которую запомнят навсегда</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Профессионально написанная и записанная песня специально для вашего особенного человека. 
            Эмоции, которые невозможно передать словами.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/50 animate-bounce-in"
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Zap" className="mr-2" size={24} />
              Заказать песню сейчас
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-12 py-8 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Play" className="mr-2" size={24} />
              Послушать примеры
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Песен создано" },
              { value: "5-10", label: "Дней на работу" },
              { value: "100%", label: "Уникальность" },
              { value: "5★", label: "Средняя оценка" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Почему <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">выбирают нас?</span>
            </h2>
            <p className="text-xl text-muted-foreground">Создаём эмоции, которые останутся на всю жизнь</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="bg-card/30 backdrop-blur border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon as any} size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">Портфолио</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Для каких <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">поводов</span>?
            </h2>
            <p className="text-xl text-muted-foreground">Любое событие станет незабываемым</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {occasions.map((occasion, i) => (
              <Card key={i} className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur border-border/50 hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer group animate-slide-in-left" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Icon name={occasion.icon as any} size={40} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{occasion.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{occasion.price}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://cdn.poehali.dev/projects/7d5bd49f-51bc-4e24-9d46-6ee5011eb0f2/files/cb13c9b0-8df0-4fb1-971a-0cf950ea6e7c.jpg",
                title: "Мамин день рождения",
                duration: "3:42"
              },
              {
                image: "https://cdn.poehali.dev/projects/7d5bd49f-51bc-4e24-9d46-6ee5011eb0f2/files/98dfccb0-0f91-4644-b888-7547a6bbf1c7.jpg",
                title: "Свадебная композиция",
                duration: "4:15"
              },
              {
                image: "https://cdn.poehali.dev/projects/7d5bd49f-51bc-4e24-9d46-6ee5011eb0f2/files/4aea6c88-8a3a-47e1-aa17-4176be3bb766.jpg",
                title: "Признание в любви",
                duration: "3:28"
              }
            ].map((song, i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-card/30 backdrop-blur animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={song.image} 
                    alt={song.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-2xl">
                      <Icon name="Play" size={28} />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{song.title}</h3>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">{song.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">Процесс</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Как мы <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">создаём</span>?
            </h2>
            <p className="text-xl text-muted-foreground">Простой путь к уникальной песне</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2 hidden md:block"></div>
            
            {steps.map((step, i) => (
              <div key={i} className={`flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col animate-fade-in`} style={{ animationDelay: `${i * 0.2}s` }}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 inline-block w-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                          <Icon name={step.icon as any} size={24} className="text-primary-foreground" />
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base mt-2">{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center text-2xl font-bold shadow-2xl shadow-primary/50">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">Отзывы</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Истории <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">счастья</span>
            </h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-slide-in-right" style={{ animationDelay: `${i * 0.15}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.stars)].map((_, j) => (
                      <Icon key={j} name="Star" size={20} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <Badge variant="outline" className="w-fit mb-3">{review.occasion}</Badge>
                  <CardTitle className="text-xl mb-2">{review.name}</CardTitle>
                  <CardDescription className="text-base italic leading-relaxed">"{review.text}"</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4 animate-bounce-in">🎁</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Готовы заказать <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">свою песню</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-4">Заполните форму — ответим в течение 2 часов</p>
            <Badge className="text-base px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500">
              🔥 Специальное предложение: -20% на заказ до конца месяца
            </Badge>
          </div>

          <Card className="bg-gradient-to-br from-card/80 to-card/50 backdrop-blur border-2 border-primary/30 shadow-2xl shadow-primary/20 animate-bounce-in">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Форма заказа</CardTitle>
              <CardDescription className="text-center text-base">Заполните все поля, и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="text-base py-6"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-base">Телефон или Telegram</Label>
                  <Input 
                    id="contact" 
                    placeholder="+7 (999) 123-45-67 или @username"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    required
                    className="text-base py-6"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="occasion" className="text-base">Повод для песни</Label>
                  <Input 
                    id="occasion" 
                    placeholder="День рождения, свадьба, юбилей..."
                    value={formData.occasion}
                    onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    required
                    className="text-base py-6"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="details" className="text-base">Расскажите о человеке и ваших идеях</Label>
                  <Textarea 
                    id="details" 
                    placeholder="Имя, возраст, характер, хобби, важные моменты жизни, что хотите передать в песне... Чем больше деталей — тем лучше результат!"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    required
                    className="min-h-40 text-base"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-xl py-8 bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/50"
                >
                  <Icon name="Send" className="mr-2" size={24} />
                  Отправить заявку
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur border border-border/50">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold mb-1">Телефон</p>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur border border-border/50">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-muted-foreground">hello@pesnya.ru</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur border border-border/50">
              <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold mb-1">Telegram</p>
              <p className="text-muted-foreground">@pesnya_zakaz</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50 bg-muted/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl mb-4">🎵</div>
          <p className="text-muted-foreground mb-2">
            © 2024 Песня на заказ
          </p>
          <p className="text-sm text-muted-foreground">
            Создаём музыкальные истории, которые останутся в сердцах навсегда
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
