import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎵",
      description: "Скоро свяжемся с вами для обсуждения деталей вашей песни.",
    });
    setFormData({ name: '', email: '', phone: '', occasion: '', message: '' });
  };

  const songs = [
    {
      title: "День рождения мамы",
      description: "Трогательная песня о самом дорогом человеке",
      duration: "3:24",
      image: "https://cdn.poehali.dev/projects/7d5bd49f-51bc-4e24-9d46-6ee5011eb0f2/files/c8eeca52-3586-4981-9f2c-9cf494811f92.jpg"
    },
    {
      title: "Свадебная серенада",
      description: "История любви в музыке",
      duration: "4:10",
      image: "https://cdn.poehali.dev/projects/7d5bd49f-51bc-4e24-9d46-6ee5011eb0f2/files/f4f402d4-af05-4cdd-aa2c-b8c159a3571c.jpg"
    },
    {
      title: "Признание в любви",
      description: "Романтическая композиция для особого случая",
      duration: "3:45",
      image: "https://cdn.poehali.dev/projects/7d5bd49f-51bc-4e24-9d46-6ee5011eb0f2/files/c2e033ff-1d81-4014-82ea-43abdf062ac1.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Заказала песню для мужа на годовщину. Он был в восторге! Слёзы счастья и невероятные эмоции. Спасибо за волшебство!",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      text: "Сделал предложение под эту песню. Невеста сказала 'да' со слезами на глазах. Лучший подарок, который я мог придумать!",
      rating: 5
    },
    {
      name: "Елена Морозова",
      text: "Песня для мамы на юбилей превзошла все ожидания. Профессионально, душевно, с любовью. Рекомендую от всего сердца!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Сколько времени занимает создание песни?",
      answer: "Обычно процесс занимает от 5 до 10 дней. Это включает сбор информации, написание текста, создание музыки, запись и финальную обработку."
    },
    {
      question: "Могу ли я внести правки в текст?",
      answer: "Конечно! Мы предоставляем 2 бесплатные правки текста. Ваша песня должна быть именно такой, как вы мечтаете."
    },
    {
      question: "В каком формате я получу песню?",
      answer: "Вы получите профессионально записанную песню в формате MP3 высокого качества, готовую для воспроизведения на любых устройствах."
    },
    {
      question: "Какую информацию нужно предоставить?",
      answer: "Расскажите о человеке, событии и ваших пожеланиях по стилю. Чем больше деталей, тем более персонализированной получится песня."
    },
    {
      question: "Сколько стоит создание песни?",
      answer: "Стоимость начинается от 15 000 рублей и зависит от сложности аранжировки, количества куплетов и срочности заказа."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="text-6xl mb-4 animate-pulse-glow">🎵</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Песня на заказ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Подарите уникальную песню, созданную специально для вашего особенного человека и момента
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all transform hover:scale-105"
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Заказать песню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all"
              onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Play" className="mr-2" size={20} />
              Послушать примеры
            </Button>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Примеры наших работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Каждая песня — уникальная история</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {songs.map((song, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/50 backdrop-blur">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={song.image} 
                    alt={song.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-semibold">{song.duration}</span>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Icon name="Play" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{song.title}</CardTitle>
                  <CardDescription className="text-base">{song.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Истории счастья наших заказчиков</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Закажите свою песню</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Заполните форму, и мы свяжемся с вами</p>
          
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl">Форма заказа</CardTitle>
              <CardDescription>Все поля обязательны для заполнения</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="occasion">Повод для песни</Label>
                  <Input 
                    id="occasion" 
                    placeholder="День рождения, свадьба, годовщина..."
                    value={formData.occasion}
                    onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Расскажите о человеке и ваших пожеланиях</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Чем больше деталей, тем более персональной получится песня..."
                    className="min-h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на популярные вопросы</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur px-6 rounded-lg border">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с автором</h2>
          <p className="text-muted-foreground mb-8 text-lg">Готовы обсудить вашу уникальную песню?</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Mail" className="mr-2" size={20} />
              info@pesnya.ru
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Песня на заказ. Создаём музыкальные истории с любовью 🎵
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
