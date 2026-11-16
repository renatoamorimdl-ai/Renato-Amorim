# Retra — site de gestão de tráfego

Site estático (HTML + CSS + JS puro), sem build. Deploy automático na Vercel a cada push na `main`.

## Estrutura

- `index.html`, `styles.css`, `script.js` — página única
- `img/logo-mark.svg` — logo (R) vetorizada; `img/favicon-retra.svg`, `favicon.ico` e os PNGs de ícone derivados dela
- `img/hero.webp` e recortes (`sobre`, `meta`, `google`, `conversao`, `funil`, `resultado`) — todos feitos a partir da foto do Renato
- `img/og.jpg` — imagem de pré-visualização ao compartilhar o link (WhatsApp, redes)

## Identidade

Preto `#0a0a0a`, branco e verde `#19d18a`, sem gradientes. Títulos em Poppins, texto em Inter.

## Configuração

- WhatsApp: `script.js` → `WHATSAPP` (5581995701768)
- Domínio: se trocar, atualize `canonical` e `og:url` no `index.html`

## Pendências sugeridas

- Prova social com resultados e depoimentos reais autorizados pelos clientes
- Pixel da Meta e Google (GA4/Ads) no `<head>`, com conversão no clique do WhatsApp e no envio do formulário

## Cache

CSS, JS e ícones são servidos com `max-age=0, must-revalidate` e o HTML os chama com `?v=AAAAMMDD`. Ao alterar um desses arquivos, mude o valor de `v` no `index.html`.
