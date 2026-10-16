# Site — Gestão de Tráfego

Site estático (HTML + CSS + JS puro), sem build. Pronto para GitHub + Vercel.

## Antes de publicar, edite

1. `script.js` → `WHATSAPP` (já configurado: 5581995701768).
2. `index.html` → se trocar de domínio, atualize canonical e og:url.
3. `index.html` → ajuste nome/marca, serviços e FAQ ao seu gosto.
4. Quando tiver cases reais, adicione uma seção de prova social (depoimentos e resultados autorizados pelos clientes).

## Publicar (GitHub + Vercel)

Repositório: https://github.com/renatoamorimdl-ai/Renato-Amorim (branch `main`).

Em vercel.com → **Add New → Project** → importe o repositório.
Framework Preset: **Other** (sem build command, sem output directory). Clique em **Deploy**.

Cada `git push` na `main` gera um novo deploy automaticamente.

## Domínio próprio

Vercel → Project → Settings → Domains → adicione o domínio e aponte o DNS conforme indicado.

## Rastreamento (recomendado)

Adicione antes do `</head>` do `index.html`: Pixel da Meta, tag do Google (GA4/Google Ads). Dispare o evento de conversão (Lead / Contact) no clique do botão de WhatsApp e no envio do formulário.
