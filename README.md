# Portfólio — Demerval Mendes (atualização 2026)

Site pessoal modernizado a partir do portfólio original de 2023 e do currículo fornecido em 2026.

## Como visualizar

Abra `index.html` diretamente no navegador. Não é necessário instalar Node, pacotes ou criar um servidor para navegar pelo site.

Se desejar testar com um servidor local:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

1. Faça uma cópia de segurança do repositório antigo, caso queira preservar seu histórico.
2. Envie **o conteúdo desta pasta** (incluindo `index.html` e `assets/`) para a raiz do repositório `JuniiorMendes/Portfolio` ou outro repositório.
3. No GitHub: **Settings → Pages → Deploy from a branch → main / (root)**.
4. Após o deploy, confira os links externos dos projetos antigos. Os URLs foram mantidos da versão de 2023 e não foram validados online nesta atualização.

## Organização

- `index.html`: informações profissionais e estrutura do site.
- `assets/css/style.css`: cores, tipografia, layout e responsividade.
- `assets/js/main.js`: menu mobile, tema claro/escuro, navegação e botão de topo.
- `assets/docs/Curriculo_Demerval_Mendes.pdf`: currículo disponibilizado para download.
- `assets/images/perfil-profissional.webp`: fotografia extraída do currículo enviado.
- `assets/images/projetos/`: capas preservadas do portfólio antigo.

## O que mudou

- Atualização da apresentação para desenvolvimento, dados, automação e suporte, conforme o currículo.
- Experiências profissionais e datas incorporadas sem inventar cargos ou resultados.
- Três entregas corporativas descritas separadamente dos projetos pessoais.
- Arquivo de projetos antigos preservado e identificado como exercícios de 2023.
- E-mail atualizado para `demervalme@gmail.com`, com LinkedIn, GitHub e telefone do currículo.
- Layout responsivo, modo claro/escuro, acessibilidade básica e links para download do currículo.

## Informações a conferir antes de publicar

- Confirme se os links de demonstração dos projetos de 2023 continuam ativos.
- Atualize o PDF em `assets/docs/` quando revisar seu currículo.
- As telas e gráficos apresentados em “Entregas profissionais” são ilustrações; não exibem informações internas de empresas.

## Notas técnicas

Site estático em HTML, CSS e JavaScript, sem dependências JavaScript externas. Fontes da Google Fonts são opcionais; há fontes de sistema como fallback.
