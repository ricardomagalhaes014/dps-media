# DPS MEDIA - SEO & Analytics Setup Guide

## 🔍 SEO Otimizações Implementadas

### 1. **Meta Tags & Structured Data**
- ✅ Meta description otimizada (160 caracteres)
- ✅ Meta keywords relevantes
- ✅ Open Graph tags (Facebook/LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ JSON-LD Schema (LocalBusiness + Organization)
- ✅ Favicon SVG otimizado

### 2. **Performance & Technical SEO**
- ✅ Robots.txt configurado
- ✅ Sitemap.xml criado
- ✅ Manifest.json (PWA)
- ✅ .htaccess com compressão GZIP
- ✅ Browser caching configurado
- ✅ Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- ✅ Preconnect para Google Fonts e CDN

### 3. **Mobile & Accessibility**
- ✅ Viewport meta tag
- ✅ Mobile-friendly design
- ✅ Apple touch icon
- ✅ Theme color meta tag
- ✅ Format detection para telefones

### 4. **Analytics Integration**

#### Google Analytics 4 (GA4)
O Google Analytics 4 está configurado no arquivo `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'page_path': window.location.pathname,
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

**⚠️ IMPORTANTE:** Substitua `G-XXXXXXXXXX` pelo seu ID do Google Analytics 4.

#### Eventos Rastreados
1. **Newsletter Signup** - Quando utilizador subscreve newsletter
2. **WhatsApp Click** - Quando clica no botão WhatsApp
3. **Page View** - Automático em cada página

### 5. **Umami Analytics (Manus)**
O Umami Analytics está integrado via variáveis de ambiente:
- `%VITE_ANALYTICS_ENDPOINT%`
- `%VITE_ANALYTICS_WEBSITE_ID%`

---

## 📊 Como Configurar Google Analytics 4

### Passo 1: Criar Propriedade GA4
1. Aceda a [Google Analytics](https://analytics.google.com/)
2. Clique em "Criar propriedade"
3. Nome: "DPS MEDIA"
4. Timezone: Portugal (GMT+0)
5. Moeda: EUR
6. Clique em "Criar"

### Passo 2: Obter ID de Medição
1. Vá para "Admin" → "Propriedades" → "Fluxos de dados"
2. Selecione "Web"
3. Copie o ID de Medição (formato: G-XXXXXXXXXX)

### Passo 3: Atualizar Código
Substitua `G-XXXXXXXXXX` em dois locais:

**Arquivo: `client/index.html`**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU-ID-AQUI"></script>
<script>
  ...
  gtag('config', 'G-SEU-ID-AQUI', {
```

**Arquivo: `client/src/hooks/useSEO.ts`**
```typescript
window.gtag('config', 'G-SEU-ID-AQUI', {
```

### Passo 4: Verificar Instalação
1. Abra o website
2. Vá para Google Analytics → Relatórios em Tempo Real
3. Deverá ver uma sessão ativa

---

## 🔗 URLs Importantes

| Recurso | URL |
|---------|-----|
| **Website** | https://dpsmedia.grupo-dps.com/ |
| **Sitemap** | https://dpsmedia.grupo-dps.com/sitemap.xml |
| **Robots.txt** | https://dpsmedia.grupo-dps.com/robots.txt |
| **Google Analytics** | https://analytics.google.com/ |
| **Google Search Console** | https://search.google.com/search-console |
| **Lighthouse** | https://pagespeed.web.dev/ |

---

## 📈 Próximos Passos para Melhorar SEO

### 1. **Google Search Console**
1. Aceda a [Google Search Console](https://search.google.com/search-console)
2. Adicione propriedade: https://dpsmedia.grupo-dps.com/
3. Verifique propriedade (DNS ou HTML)
4. Submeta sitemap.xml
5. Monitore erros de indexação

### 2. **Backlinks & Authority**
- Crie conteúdo de blog otimizado para SEO
- Artigos sobre: "Google Ads", "Meta Ads", "CRM", "Marketing Digital"
- Solicite backlinks de sites relevantes

### 3. **Local SEO**
- Registre no Google My Business
- Adicione endereço físico (se aplicável)
- Peça reviews de clientes

### 4. **Performance**
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Otimize imagens (WebP)
- Minimize CSS/JavaScript
- Implemente lazy loading

### 5. **Content Marketing**
- Blog com 10+ artigos de qualidade
- Guias sobre marketing digital
- Case studies de clientes

---

## 🎯 Métricas a Monitorar

| Métrica | Objetivo | Ferramenta |
|---------|----------|-----------|
| **Organic Traffic** | +50% ao mês | Google Analytics |
| **Bounce Rate** | < 50% | Google Analytics |
| **Avg. Session Duration** | > 2 minutos | Google Analytics |
| **Conversion Rate** | > 5% | Google Analytics |
| **Core Web Vitals** | Verde (>90) | PageSpeed Insights |
| **Keyword Rankings** | Top 10 para 20+ keywords | SEMrush / Ahrefs |

---

## 🛠️ Ferramentas Recomendadas

- **Google Analytics 4** - Análise de tráfego
- **Google Search Console** - Monitoramento de indexação
- **PageSpeed Insights** - Performance
- **SEMrush / Ahrefs** - Pesquisa de keywords
- **Screaming Frog** - Auditoria técnica SEO
- **Ubersuggest** - Ideias de conteúdo

---

## 📝 Checklist Final

- [ ] Google Analytics 4 ID configurado
- [ ] Google Search Console verificado
- [ ] Sitemap.xml submetido
- [ ] Robots.txt verificado
- [ ] Meta tags validadas
- [ ] JSON-LD Schema testado (schema.org)
- [ ] Mobile-friendly testado
- [ ] Core Web Vitals > 90
- [ ] Backlinks criados
- [ ] Blog iniciado

---

**Última atualização:** 23 de Fevereiro de 2026
