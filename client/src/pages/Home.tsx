import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ServiceCard from '@/components/ServiceCard';
import {
  BarChart3,
  Zap,
  Brain,
  Share2,
  TrendingUp,
  Users,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';

/**
 * DPS MEDIA - Energetic Digital Maximalism
 * Homepage com hero section, serviços, como trabalhamos, resultados e contato
 */

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#0066FF] flex items-center justify-center">
              <span className="text-white font-bold text-lg">DPS</span>
            </div>
            <span className="font-bold text-lg text-gray-900">MEDIA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
              Serviços
            </a>
            <a href="#como-trabalhamos" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
              Como Trabalhamos
            </a>
            <a href="#resultados" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
              Resultados
            </a>
            <a href="#contato" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
              Contacto
            </a>
          </div>
          <Button
            onClick={() => window.open('https://wa.me/351925708456', '_blank')}
            className="bg-gradient-to-r from-[#FF6B35] to-[#0066FF] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contactar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(https://private-us-east-1.manuscdn.com/sessionFile/Ra6wn4O9caxGiJVRUprYau/sandbox/alvFS8D0xfw7u8yk0GFEtf-img-1_1771878323000_na1fn_aGVyby1iZy1kcHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmE2d240TzljYXhHaUpWUlVwcllhdS9zYW5kYm94L2FsdkZTOEQweGZ3N3U4eWswR0ZFdGYtaW1nLTFfMTc3MTg3ODMyMzAwMF9uYTFmbl9hR1Z5YnkxaVp5MWtjSE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JDuC6k0IhpN2uB7JxvMiHxNgA97I5FWQn5nYdQJp2BmG~3kc3yzaYSnAYbUNvNTHtpquJobLH0Ce2u7umg7Gr6ze1rIT25E77i9kIAcTL05lboVMGG81F7NtGqBg2v93QWSwqGkCLlv9HguyKQjsg5M5Peg6wSO1tI7fKErjhjm4v4SLvWmSI3NRI0aiWWB7XNtkcptqQgi0Yr4S9JTruj14d7kyA24C~3sc8DgBHCQiMzD5s2bZ4GIly2vpWJR6uUhWAtqDfnTSJdGKFbcculBa5PTHimzuhI1xka2NJ7odtJTHO1LZCl8RysZbZe1uv0hjjrSncqb9FXwjwRcwsw__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="animate-fade-in-up">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF00FF] text-white text-sm font-bold">
                ✨ Transformação Digital
              </div>
              <h1 className="gradient-text mb-6 leading-tight">
                Marketing Digital que Vira Negócio
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Não somos uma agência. Somos parceiros de crescimento. Combinamos inteligência comercial, tráfego pago e automação para transformar dados em receita previsível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open('https://wa.me/351925708456', '_blank')}
                  className="bg-gradient-to-r from-[#FF6B35] to-[#0066FF] text-white hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all duration-300 text-lg px-8 py-6"
                >
                  Saber Mais
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">259B</div>
                  <p className="text-sm text-gray-600">Mercado Digital 2024</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">5.66B</div>
                  <p className="text-sm text-gray-600">Utilizadores Online</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">+15%</div>
                  <p className="text-sm text-gray-600">Crescimento YoY</p>
                </div>
              </div>
            </div>

            {/* Right - Visual element */}
            <div className="hidden md:block relative animate-float">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FF00FF] to-[#0066FF] opacity-20" />
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/Ra6wn4O9caxGiJVRUprYau/sandbox/alvFS8D0xfw7u8yk0GFEtf-img-3_1771878334000_na1fn_Z3Jvd3RoLWlsbHVzdHJhdGlvbi1kcHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmE2d240TzljYXhHaUpWUlVwcllhdS9zYW5kYm94L2FsdkZTOEQweGZ3N3U4eWswR0ZFdGYtaW1nLTNfMTc3MTg3ODMzNDAwMF9uYTFmbl9aM0p2ZDNSb0xXbHNiSFZ6ZEhKaGRHbHZiaTFrY0hNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZAwsEzs9j6Wo5E77vEp6y1HPHryXZ5HKnZps64~9VyHaZVt00yPaA7UMrcvUsRz3Atf3iA-erCe-6rrbpoF2wp9X5FeD3emvvTSPrKys556eKT~0BpI-KJe0wHLUrjLppLGWW7VxDp4dHPccI4hMKBK81V09NA2-Sr43TppTL4rNGMOPd6logXiZSQM8i9XMMzD-8FGX0y7pH9AhwdJ~Ch2QAKJQqFC143ggXWfd3Jk6EmOwwuQQurZEPTxQtHDf9JwcXCqbz3EbaWAIYCUC3u5DSzyIVdaGWmPONmWZnlhiYJvsLXM8T1IkE4sayM7oMGxJjOQpBpFMgEFCgcHXSQ__"
                  alt="Crescimento Digital"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="gradient-text mb-4">Os 3 Pilares do Crescimento</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos estratégia, tecnologia e dados para transformar o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Branding & Posicionamento"
              description="Diagnóstico de marca, proposta de valor clara e mensagens que convertem. Sem posicionamento forte, qualquer tráfego fica caro."
              icon={<Zap className="w-8 h-8" />}
              color="orange"
              delay={0}
            />
            <ServiceCard
              title="Crescimento com Tráfego Pago"
              description="Google Ads, Meta Ads, LinkedIn. Estrutura profissional, tracking correto e otimização contínua para máximo ROI."
              icon={<TrendingUp className="w-8 h-8" />}
              color="blue"
              delay={100}
            />
            <ServiceCard
              title="Inteligência & Automação"
              description="CRM integrado, lead scoring, automação WhatsApp/Email. Transformamos dados em vendas reais com processos eficientes."
              icon={<Brain className="w-8 h-8" />}
              color="magenta"
              delay={200}
            />
          </div>

          {/* Additional services */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-[#0066FF] transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#00FF88] to-[#0066FF] text-white">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Gestão de Redes Sociais</h3>
                  <p className="text-gray-600">Estratégia, conteúdo, gestão diária e campanhas que geram tráfego qualificado.</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-[#FF6B35] transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FFB800] text-white">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Análise & Otimização</h3>
                  <p className="text-gray-600">Métricas que importam: ROAS, CAC, LTV. Decisões orientadas a dados, não achismos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="como-trabalhamos" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="gradient-text mb-16 text-center">Como Trabalhamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Diagnóstico', desc: 'Análise profunda do seu negócio, concorrência e oportunidades' },
              { step: '2', title: 'Plano 90 dias', desc: 'Estratégia clara com metas, canais e orçamento definido' },
              { step: '3', title: 'Implementação', desc: 'Campanhas, landing pages, CRM e automações em ação' },
              { step: '4', title: 'Otimização', desc: 'Testes A/B, ajustes semanais e relatórios detalhados' },
              { step: '5', title: 'Escala', desc: 'Novos públicos, canais e crescimento previsível' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 text-center hover:border-[#FF6B35] transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#0066FF] flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[2px] bg-gradient-to-r from-[#FF6B35] to-[#0066FF]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 md:py-32 bg-gradient-to-r from-[#FF6B35] via-[#FF00FF] to-[#0066FF] text-white">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold">Resultados Reais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">+258%</div>
              <p className="text-lg mb-4">ROAS (Bellroy - Google/YouTube Ads)</p>
              <p className="text-sm text-white/80">Ao implementar value-based bidding e target ROAS com tracking correto.</p>
            </div>
            <div className="p-8 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">+81%</div>
              <p className="text-lg mb-4">ROAS (Teknosa - Data-Driven)</p>
              <p className="text-sm text-white/80">Com atribuição correta e smart bidding, também -57% no CPA.</p>
            </div>
            <div className="p-8 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">$8</div>
              <p className="text-lg mb-4">Retorno por $1 em Google Ads</p>
              <p className="text-sm text-white/80">Média de mercado quando o tracking e a estratégia estão corretos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="gradient-text mb-16 text-center">Por Que Escolher a DPS MEDIA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                'Menor desperdício em anúncios com tracking e estrutura profissional',
                'Mais leads qualificados através de segmentação e intenção correta',
                'Conversão maior com landing pages otimizadas e mensagem alinhada',
                'Processo comercial eficiente com CRM e automação integrados',
                'Crescimento sustentável: marca + performance + retenção',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#0066FF] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Diagnóstico Gratuito</h3>
              <p className="text-gray-600 mb-6">
                Em 30 minutos analisamos tráfego, campanhas, funil, conversão e oportunidades rápidas. Saia com clareza do que fazer — mesmo que não avance connosco.
              </p>
              <Button
                onClick={() => window.open('https://wa.me/351925708456', '_blank')}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#0066FF] text-white hover:shadow-lg transition-all duration-300 text-lg py-6"
              >
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <h2 className="gradient-text mb-16 text-center">Contacte-nos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-xl bg-white border-2 border-gray-200 text-center hover:border-[#FF6B35] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#0066FF] flex items-center justify-center text-white mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:dpsmedia@grupo-dps.com"
                className="text-[#FF6B35] hover:text-[#0066FF] transition-colors"
              >
                dpsmedia@grupo-dps.com
              </a>
            </div>
            <div className="p-8 rounded-xl bg-white border-2 border-gray-200 text-center hover:border-[#0066FF] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00FF88] flex items-center justify-center text-white mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
              <a
                href="tel:+351925708456"
                className="text-[#0066FF] hover:text-[#FF6B35] transition-colors"
              >
                +351 925 708 456
              </a>
            </div>
            <div className="p-8 rounded-xl bg-white border-2 border-gray-200 text-center hover:border-[#FF00FF] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#FF6B35] flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/351925708456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF00FF] hover:text-[#0066FF] transition-colors"
              >
                Peça a sua proposta
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#FF6B35] via-[#FF00FF] to-[#0066FF] p-12 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Fique Atualizado</h3>
            <p className="mb-6">Receba dicas de marketing digital e casos de sucesso diretamente no seu email.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
              <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button
                type="submit"
                className="bg-white text-[#FF6B35] hover:bg-gray-100 transition-colors px-8 font-bold"
              >
                Subscrever
              </Button>
            </form>
            {submitted && (
              <p className="mt-4 text-sm text-white/90">✓ Obrigado! Verifique o seu email.</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#0066FF]" />
                <span className="font-bold">DPS MEDIA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Inteligência Comercial & Marketing Digital
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#servicos" className="hover:text-[#FF6B35] transition-colors">Branding</a></li>
                <li><a href="#servicos" className="hover:text-[#FF6B35] transition-colors">Tráfego Pago</a></li>
                <li><a href="#servicos" className="hover:text-[#FF6B35] transition-colors">Inteligência</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#como-trabalhamos" className="hover:text-[#FF6B35] transition-colors">Como Trabalhamos</a></li>
                <li><a href="#resultados" className="hover:text-[#FF6B35] transition-colors">Resultados</a></li>
                <li><a href="#contato" className="hover:text-[#FF6B35] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 DPS MEDIA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
