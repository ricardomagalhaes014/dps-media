import { useEffect } from 'react';

const WHATSAPP_LINK = 'https://wa.me/351925708456?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%A3o%20sobre%20os%20pacotes%20da%20DPS%20Media.';

export default function Planos() {
  useEffect(() => {
    document.title = 'DPS Media | Planos e Pacotes';
  }, []);

  return (
    <>
      <style>{`
        .planos-page {
          font-family: 'Montserrat', 'Inter', sans-serif;
          color: #f8f4ea;
          background:
            radial-gradient(circle at top right, rgba(199,157,57,0.18), transparent 30%),
            radial-gradient(circle at bottom left, rgba(199,157,57,0.12), transparent 32%),
            linear-gradient(180deg, #0a0a0d 0%, #111116 100%);
          min-height: 100vh;
        }
        .planos-page * { box-sizing: border-box; }
        .planos-page a { text-decoration: none; color: inherit; }
        .planos-container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }

        /* Topbar */
        .planos-topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(8,8,11,0.72);
          border-bottom: 1px solid rgba(241,217,120,0.18);
        }
        .planos-topbar-inner {
          min-height: 68px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 14px;
        }
        .planos-topbar-links { display: flex; gap: 18px; align-items: center; }
        .planos-topbar a { font-weight: 700; color: #f1d978; }
        .planos-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(248,244,234,0.72) !important;
          font-weight: 600 !important;
          font-size: 14px;
          transition: color 0.2s;
        }
        .planos-back-link:hover { color: #f1d978 !important; }

        /* Hero */
        .planos-hero {
          position: relative;
          overflow: hidden;
          padding: 84px 0 48px;
        }
        .planos-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(12,12,15,0.92) 0%, rgba(12,12,15,0.74) 100%),
            linear-gradient(180deg, transparent 0%, rgba(12,12,15,0.5) 100%);
          pointer-events: none;
        }
        .planos-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
        }
        .planos-eyebrow {
          display: inline-block;
          margin-bottom: 12px;
          color: #f1d978;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 800;
        }
        .planos-hero h1 { margin: 0; line-height: 1.02; letter-spacing: -.04em; font-size: clamp(2.8rem, 7vw, 5.4rem); max-width: 880px; }
        .planos-hero h1 span { color: #f1d978; }
        .planos-lead {
          max-width: 770px;
          margin: 18px 0 0;
          color: rgba(248,244,234,0.72);
          line-height: 1.8;
          font-size: 1.06rem;
        }
        .planos-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        .planos-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 54px;
          padding: 0 22px;
          border-radius: 999px;
          font-weight: 800;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
          cursor: pointer;
        }
        .planos-btn:hover { transform: translateY(-2px); box-shadow: 0 24px 60px rgba(0,0,0,0.35); }
        .planos-btn-primary { background: linear-gradient(135deg, #c79d39, #8f6a1a); color: #fff; }
        .planos-btn-secondary { background: rgba(255,255,255,0.06); border: 1px solid rgba(241,217,120,0.18); color: #f8f4ea; }
        .planos-btn-outline { background: transparent; border: 1px solid rgba(241,217,120,0.28); color: #f1d978; }

        .planos-hero-metrics {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 12px;
          max-width: 720px;
        }
        .planos-hero-metrics div {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(241,217,120,0.18);
          border-radius: 22px;
          padding: 18px;
        }
        .planos-hero-metrics strong {
          display: block;
          color: #f1d978;
          font-size: 1.45rem;
          margin-bottom: 4px;
        }
        .planos-hero-metrics span { color: rgba(248,244,234,0.72); font-size: .92rem; }

        .planos-panel-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(241,217,120,0.18);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          border-radius: 28px;
          padding: 28px;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .planos-panel-tag {
          display: inline-block;
          align-self: flex-start;
          margin-bottom: 12px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(241,217,120,0.12);
          color: #f1d978;
          font-size: 12px;
          font-weight: 800;
        }
        .planos-panel-card h2 { margin: 0 0 16px; font-size: 2rem; }
        .planos-panel-card ul {
          margin: 0;
          padding-left: 18px;
          color: rgba(248,244,234,0.72);
          line-height: 1.95;
          font-size: 1rem;
        }
        .planos-panel-cta-row { display: flex; gap: 18px; margin-top: 20px; flex-wrap: wrap; }
        .planos-mini-link { color: #f1d978; font-weight: 700; }

        /* Sections */
        .planos-section { padding: 46px 0; }
        .planos-section-heading { margin-bottom: 26px; }
        .planos-section-heading.center { text-align: center; }
        .planos-section-heading.narrow { max-width: 760px; margin-left: auto; margin-right: auto; }
        .planos-section-heading h2 { margin: 0; line-height: 1.02; letter-spacing: -.04em; font-size: clamp(2rem, 4.8vw, 3.6rem); }
        .planos-section-heading p { color: rgba(248,244,234,0.72); line-height: 1.85; margin-top: 14px; }

        /* Intro strip */
        .planos-intro-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .planos-intro-grid article {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(241,217,120,0.18);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          border-radius: 28px;
          padding: 22px;
        }
        .planos-small-label {
          color: #f1d978;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-weight: 800;
        }
        .planos-intro-grid p { margin: 10px 0 0; color: rgba(248,244,234,0.72); line-height: 1.7; }

        /* Why now */
        .planos-two-col {
          display: grid;
          grid-template-columns: 1fr .95fr;
          gap: 24px;
          align-items: start;
        }
        .planos-market-box {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(241,217,120,0.18);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          border-radius: 28px;
          padding: 24px;
        }
        .planos-market-item + .planos-market-item {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(241,217,120,0.12);
        }
        .planos-market-item strong {
          display: block;
          color: #f1d978;
          font-size: 1.8rem;
          margin-bottom: 6px;
        }
        .planos-market-item span { color: rgba(248,244,234,0.72); line-height: 1.7; display: block; }

        /* Cards */
        .planos-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .planos-price-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(241,217,120,0.18);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          border-radius: 28px;
          padding: 26px;
          position: relative;
        }
        .planos-card-head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 18px;
        }
        .planos-price-card h3 { margin: 0; font-size: 2rem; }
        .planos-price { color: #f1d978; font-size: 2rem; font-weight: 800; }
        .planos-price small { font-size: 1rem; }
        .planos-price-card ul { margin: 0 0 26px; padding-left: 20px; color: rgba(248,244,234,0.72); line-height: 1.85; }
        .planos-featured {
          transform: translateY(-8px);
          background: linear-gradient(180deg, rgba(199,157,57,0.17), rgba(255,255,255,0.04));
        }
        .planos-featured-badge {
          position: absolute;
          top: -12px;
          right: 22px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #f1d978;
          color: #241a08;
          font-size: 12px;
          font-weight: 800;
        }

        /* Addons */
        .planos-addons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .planos-addon-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(241,217,120,0.18);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          border-radius: 28px;
          padding: 26px;
        }
        .planos-addon-kicker {
          display: inline-block;
          margin-bottom: 12px;
          color: #f1d978;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: .14em;
          font-weight: 800;
        }
        .planos-addon-card h3 { margin: 0 0 8px; }
        .planos-addon-price { margin: 0 0 12px; font-size: 1.15rem; font-weight: 800; color: #f1d978; }
        .planos-addon-card p:last-child { color: rgba(248,244,234,0.72); line-height: 1.75; }

        /* Method */
        .planos-method-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .planos-step {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(241,217,120,0.18);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          border-radius: 28px;
          padding: 24px;
        }
        .planos-step span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(241,217,120,0.12);
          color: #f1d978;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .planos-step h3 { margin: 0 0 10px; }
        .planos-step p { color: rgba(248,244,234,0.72); line-height: 1.7; margin: 0; }

        /* CTA */
        .planos-cta-panel {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(241,217,120,0.18);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          border-radius: 28px;
          padding: 34px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
        }
        .planos-cta-panel p { color: rgba(248,244,234,0.72); line-height: 1.8; max-width: 760px; }
        .planos-cta-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        /* Footer */
        .planos-footer {
          padding: 26px 0 80px;
          border-top: 1px solid rgba(241,217,120,0.18);
          background: rgba(0,0,0,0.22);
        }
        .planos-footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .planos-footer p { color: rgba(248,244,234,0.72); line-height: 1.7; }
        .planos-footer-wa { color: #f1d978; font-weight: 700; }

        /* Floating WA */
        .planos-floating-wa {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 60;
          background: #25D366;
          color: #fff;
          border-radius: 999px;
          padding: 15px 18px;
          font-weight: 800;
          box-shadow: 0 20px 36px rgba(37,211,102,.3);
          text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .planos-hero-grid, .planos-two-col, .planos-cards-grid, .planos-addons-grid,
          .planos-method-grid, .planos-intro-grid, .planos-footer-grid, .planos-cta-panel {
            grid-template-columns: 1fr;
          }
          .planos-cta-panel { display: grid; }
          .planos-featured { transform: none; }
        }
        @media (max-width: 700px) {
          .planos-topbar-inner { flex-direction: column; align-items: flex-start; padding: 14px 0; }
          .planos-topbar-links { flex-wrap: wrap; }
          .planos-hero { padding-top: 54px; }
          .planos-btn { width: 100%; }
          .planos-hero-metrics { grid-template-columns: 1fr; }
          .planos-floating-wa { left: 16px; right: 16px; text-align: center; }
        }
      `}</style>

      <div className="planos-page">
        {/* Topbar */}
        <div className="planos-topbar">
          <div className="planos-container planos-topbar-inner">
            <span>Modelo agressivo de crescimento digital • DPS Media</span>
            <div className="planos-topbar-links">
              <a className="planos-back-link" href="https://dpsmedia.grupo-dps.com" target="_self">
                ← Voltar ao site
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener">Mais informações</a>
              <a href="https://forms.gle/UE4vJqoydSFLyJkQ6" target="_blank" rel="noopener">Avançar com a compra</a>
            </div>
          </div>
        </div>

        {/* Hero */}
        <header className="planos-hero">
          <div className="planos-hero-overlay"></div>
          <div className="planos-container planos-hero-grid">
            <div className="planos-hero-copy">
              <span className="planos-eyebrow">DPS Media</span>
              <h1>Não somos apenas gestão de redes sociais. <span>Somos crescimento com intenção comercial.</span></h1>
              <p className="planos-lead">Criámos um modelo mais agressivo para empresas que precisam de presença, posicionamento e ação. Conteúdo consistente, imagem premium, website, SEO e tráfego pago alinhados para gerar mais atenção e mais oportunidades.</p>
              <div className="planos-hero-actions">
                <a className="planos-btn planos-btn-primary" href="https://forms.gle/UE4vJqoydSFLyJkQ6" target="_blank" rel="noopener">Avançar com a compra</a>
                <a className="planos-btn planos-btn-secondary" href={WHATSAPP_LINK} target="_blank" rel="noopener">Falar no WhatsApp</a>
              </div>
              <div className="planos-hero-metrics">
                <div><strong>3</strong><span>pacotes</span></div>
                <div><strong>500€</strong><span>website desde</span></div>
                <div><strong>100€</strong><span>tráfego pago desde</span></div>
              </div>
            </div>

            <div>
              <div className="planos-panel-card">
                <span className="planos-panel-tag">Estratégia Comercial</span>
                <h2>O objetivo é simples:</h2>
                <ul>
                  <li>fazer a sua marca parecer maior</li>
                  <li>aumentar frequência e autoridade</li>
                  <li>transformar visual em confiança</li>
                  <li>levar o cliente a entrar em contacto</li>
                </ul>
                <div className="planos-panel-cta-row">
                  <a className="planos-mini-link" href={WHATSAPP_LINK} target="_blank" rel="noopener">Pedir diagnóstico</a>
                  <a className="planos-mini-link" href="#pacotes">Ver pacotes</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Intro strip */}
          <section className="planos-section">
            <div className="planos-container planos-intro-grid">
              <article>
                <span className="planos-small-label">Presença</span>
                <p>Quem não aparece com consistência, desaparece da mente do cliente.</p>
              </article>
              <article>
                <span className="planos-small-label">Confiança</span>
                <p>Uma imagem forte reduz objeções e melhora a perceção de valor.</p>
              </article>
              <article>
                <span className="planos-small-label">Conversão</span>
                <p>Website, SEO e anúncios aceleram o caminho entre atenção e contacto.</p>
              </article>
            </div>
          </section>

          {/* Why now */}
          <section className="planos-section">
            <div className="planos-container planos-two-col">
              <div className="planos-section-heading">
                <span className="planos-eyebrow">Porque isto faz sentido agora</span>
                <h2>As empresas competem todos os dias pela atenção do mesmo cliente.</h2>
                <p>O mercado digital em Portugal cresce todos os anos. Quem não investe em presença digital perde terreno para quem investe. A DPS Media oferece um modelo estruturado, premium e focado em resultados comerciais reais.</p>
              </div>
              <div className="planos-market-box">
                <div className="planos-market-item">
                  <strong>72,9%</strong>
                  <span>da população em Portugal tinha identidade ativa em redes sociais no início de 2026.</span>
                </div>
                <div className="planos-market-item">
                  <strong>SEO</strong>
                  <span>continua a ser recomendado como base para melhorar a descoberta do site nos resultados de pesquisa.</span>
                </div>
                <div className="planos-market-item">
                  <strong>PPC</strong>
                  <span>no Google Ads permite controlo de orçamento e cobrança por clique, ajudando a gerar procura com intenção.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section className="planos-section" id="pacotes">
            <div className="planos-container">
              <div className="planos-section-heading center">
                <span className="planos-eyebrow">Pacotes mensais</span>
                <h2>Escolha o nível de agressividade que a sua marca precisa</h2>
                <p>Um modelo simples, premium e fácil de fechar comercialmente.</p>
              </div>

              <div className="planos-cards-grid">
                <article className="planos-price-card">
                  <div className="planos-card-head">
                    <h3>Starter</h3>
                    <div className="planos-price">175€<small>/mês</small></div>
                  </div>
                  <ul>
                    <li>2 posts semanais</li>
                    <li>Calendário de conteúdos base</li>
                    <li>Ideal para criar consistência</li>
                  </ul>
                  <a className="planos-btn planos-btn-outline" href="https://forms.gle/UE4vJqoydSFLyJkQ6" target="_blank" rel="noopener">Escolher Starter</a>
                </article>

                <article className="planos-price-card planos-featured">
                  <div className="planos-featured-badge">Mais estratégico</div>
                  <div className="planos-card-head">
                    <h3>Medium</h3>
                    <div className="planos-price">275€<small>/mês</small></div>
                  </div>
                  <ul>
                    <li>3 posts semanais</li>
                    <li>1 carrossel semanal</li>
                    <li>Maior profundidade e autoridade</li>
                  </ul>
                  <a className="planos-btn planos-btn-primary" href="https://forms.gle/UE4vJqoydSFLyJkQ6" target="_blank" rel="noopener">Escolher Medium</a>
                </article>

                <article className="planos-price-card">
                  <div className="planos-card-head">
                    <h3>Pro</h3>
                    <div className="planos-price">450€<small>/mês</small></div>
                  </div>
                  <ul>
                    <li>5 posts semanais</li>
                    <li>1 carrossel semanal</li>
                    <li>1 vídeo semanal</li>
                    <li>Modelo para marcas que querem dominar</li>
                  </ul>
                  <a className="planos-btn planos-btn-outline" href="https://forms.gle/UE4vJqoydSFLyJkQ6" target="_blank" rel="noopener">Escolher Pro</a>
                </article>
              </div>
            </div>
          </section>

          {/* Addons */}
          <section className="planos-section">
            <div className="planos-container">
              <div className="planos-section-heading center narrow">
                <span className="planos-eyebrow">Serviços adicionais</span>
                <h2>Suba de nível com complementos que fecham o ecossistema</h2>
              </div>
              <div className="planos-addons-grid">
                <article className="planos-addon-card">
                  <span className="planos-addon-kicker">Presença digital</span>
                  <h3>Criação de website</h3>
                  <p className="planos-addon-price">desde 500€</p>
                  <p>Website profissional pensado para autoridade, captação de leads e apresentação premium da marca.</p>
                </article>
                <article className="planos-addon-card">
                  <span className="planos-addon-kicker">Posicionamento</span>
                  <h3>Otimização SEO</h3>
                  <p className="planos-addon-price">sob orçamento</p>
                  <p>Estrutura, conteúdos e otimizações para facilitar descoberta orgânica e ganhar relevância no Google.</p>
                </article>
                <article className="planos-addon-card">
                  <span className="planos-addon-kicker">Escala</span>
                  <h3>Tráfego pago</h3>
                  <p className="planos-addon-price">desde 100€</p>
                  <p>Gestão de campanhas para aumentar alcance, gerar leads e acelerar o processo comercial.</p>
                </article>
              </div>
            </div>
          </section>

          {/* Method */}
          <section className="planos-section">
            <div className="planos-container">
              <div className="planos-section-heading center">
                <span className="planos-eyebrow">Como funciona</span>
                <h2>Um processo pensado para vender melhor</h2>
              </div>
              <div className="planos-method-grid">
                <div className="planos-step"><span>01</span><h3>Diagnóstico</h3><p>Percebemos objetivo, serviço, mercado e diferenciação.</p></div>
                <div className="planos-step"><span>02</span><h3>Posicionamento</h3><p>Definimos a linguagem visual e comercial da marca.</p></div>
                <div className="planos-step"><span>03</span><h3>Produção</h3><p>Criamos conteúdos que reforçam autoridade e constância.</p></div>
                <div className="planos-step"><span>04</span><h3>Escala</h3><p>Com website, SEO e anúncios, levamos mais pessoas à ação.</p></div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="planos-section" id="contacto">
            <div className="planos-container">
              <div className="planos-cta-panel">
                <div>
                  <span className="planos-eyebrow">Pronto para avançar?</span>
                  <h2 style={{margin: '0', lineHeight: '1.02', letterSpacing: '-.04em', fontSize: 'clamp(2rem, 4.8vw, 3.6rem)'}}>Se quer mais informação, fale connosco agora. Se quer fechar, avance já.</h2>
                  <p>O WhatsApp fica sempre disponível durante a navegação. E quando o cliente estiver pronto para comprar, segue diretamente para o formulário.</p>
                </div>
                <div className="planos-cta-actions">
                  <a className="planos-btn planos-btn-secondary" href={WHATSAPP_LINK} target="_blank" rel="noopener">Pedir mais informação</a>
                  <a className="planos-btn planos-btn-primary" href="https://forms.gle/UE4vJqoydSFLyJkQ6" target="_blank" rel="noopener">Avançar com a compra</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="planos-footer">
          <div className="planos-container planos-footer-grid">
            <div>
              <strong>DPS Media</strong>
              <p>Marketing de performance, posicionamento e crescimento com intenção comercial.</p>
            </div>
            <div>
              <strong>Contacto rápido</strong>
              <p><a className="planos-footer-wa" href={WHATSAPP_LINK} target="_blank" rel="noopener">WhatsApp direto</a></p>
            </div>
          </div>
        </footer>

        <a className="planos-floating-wa" href={WHATSAPP_LINK} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
