# IA na Educação — Ferramentas de Vídeo (Módulo 3)

> **Plataforma Didática Aberta para a Formação Contínua de Docentes**  
> Autora e Formadora: **Carla Oliveira (2026)**  
> Enquadramento: Perfil dos Alunos à Saída da Escolaridade Obrigatória · Orientações EduQA (2026) · RGPD (Art. 4.º, n.º 14, 8.º e 9.º) · Regulamento Europeu de IA (Regulamento 2024/1689 e alteração 2026/1744)

---

## 📖 Sobre o Projeto

Esta plataforma interativa foi concebida para apoiar a formação contínua de professores dos Ensinos Básico e Secundário em Portugal sobre o uso pedagógico intencional de ferramentas de vídeo com Inteligência Artificial.

A plataforma afasta-se do fascínio técnico superficial e foca-se na **intencionalidade pedagógica**:
- **Taxonomia Revista de Bloom (Anderson & Krathwohl, 2001):** Mobilização do patamar cognitivo mais elevado — *Criar* (*Creating*) — alicerçado na síntese e avaliação crítica da informação gerada.
- **Teoria Cognitiva da Aprendizagem Multimédia (Richard E. Mayer, 2020):** Aplicação prática dos Princípios da Modalidade e da Redundância para gerir a carga cognitiva e apoiar a memória de trabalho dos alunos.
- **Segurança e Proteção de Dados dos Estudantes:** O rosto e a voz constituem dados pessoais nos termos do RGPD; a sua qualificação como categoria especial de dados biométricos (art. 4.º, n.º 14 e art. 9.º) depende de tratamento técnico específico para identificação unívoca da pessoa singular. Salvaguarda-se a proibição de introdução de dados pessoais de menores em serviços externos na nuvem e o cumprimento do dever de transparência para conteúdos sintéticos (art. 50.º do AI Act).
- **Orientações EduQA (Outubro 2026 / Janeiro 2027):** Distinção entre as três modalidades pedagógicas de trabalho com IA: *Sem IA*, *IA de apoio* e *IA integrada*.

---

## ✨ Conteúdos da Plataforma

1. **Visão Pedagógica:** Os 4 pilares fundamentais da integração audiovisual na escola, o enquadramento EduQA e a **Checklist rápida com 10 pontos** de verificação prévia para docentes.
2. **5 Vantagens na Ótica do Professor:** 5 pilares práticos (videoaulas explicativas, acessibilidade/legendagem, simulação/reconstituição, avatares para modelos pedagógicos e capacitação dos alunos para o pensamento crítico).
3. **Catálogo de Ferramentas de Vídeo (16 Ferramentas de IA):**
   - *InVideo AI* (criação de rascunhos de vídeo a partir de guiões e descrições textuais)
   - *Kling AI* (geração de sequências de movimento a partir de texto e imagens)
   - *Luma Dream Machine* (criação de vídeos curtos com movimentos de câmara)
   - *MiniMax / Hailuo AI* (geração de planos curtos de vídeo a partir de texto ou imagens)
   - *Pika* (animação e transformação visual de imagens e descrições)
   - *CapCut (Web, PC e Telemóvel)* (edição de vídeo, legendas automáticas e recursos de montagem)
   - *Canva para Educação* (ambiente escolar com modelos educativos e ferramentas de edição e animação)
   - *Perchance AI Video* (ferramenta aberta com acesso sem registo; apenas para docentes adultos, 18+; não recomendada para alunos)
   - *Microsoft Clipchamp* (editor de vídeo no navegador com locução de texto e legendagem)
   - *HeyGen* (criação de vídeos com avatares e vozes sintéticas)
   - *Vidnoz AI* (geração de vídeos com avatares virtuais e modelos prontos)
   - *Google Flow* (ambiente de experimentação audiovisual da Google)
   - *Google Vids* (aplicação de criação de vídeos integrada no Google Workspace)
   - *PixVerse* (geração de pequenos vídeos a partir de texto ou imagem)
   - *Adobe Firefly Video* (geração e edição de vídeo com IA no ecossistema Adobe)
   - *Runway Gen-3 / Gen-2* (geração e edição avançada de vídeo para exploração criativa)
4. **Alternativas Gratuitas para Editar e Gravar Vídeo (3 Ferramentas Livres sem IA):**
   - *Shotcut* (editor de vídeo gratuito e de código aberto, multiplataforma e offline)
   - *OpenShot* (editor de vídeo gratuito e de código aberto para montagem e transições)
   - *OBS Studio* (software de gravação de ecrã, câmara e áudio sem recurso a IA)
5. **Guia de Decisão Rápida:** «Que ferramenta escolher para a minha tarefa?» organizado em 6 cenários didáticos.
6. **Banco de Prompts Didáticos:** 11 instruções curriculares completas e estruturadas, cientificamente e historicamente validadas, prontas para adaptação pelo docente.
7. **Guiões de Sala de Aula:** 4 atividades curriculares estruturadas passo a passo com grelhas de avaliação e simulador ponderado de notas (0 a 20 valores).
8. **Comparador Funcional de Ferramentas:** Tabela comparativa com filtros por funcionalidade (`capabilityTags`), modalidades de acesso gratuito, limitações conhecidas e requisitos etários.
9. **Bibliografia Académica e Salvaguardas:** Referências em norma APA (7.ª edição) e análise do Regulamento Europeu de Inteligência Artificial.
10. **Ficha Pedagógica (PDF):** Versão sintetizada pronta para impressão e trabalho presencial em formação de docentes.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 20.x ou superior (ex: 20.19+, 22.x)
- npm

### Instalação e Execução
```bash
# 1. Clonar o repositório
git clone https://github.com/SEU-UTILIZADOR/NOME-DO-REPOSITORIO.git

# 2. Entrar na pasta do projeto
cd NOME-DO-REPOSITORIO

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento local
npm run dev
```

Aceda a `http://localhost:3000` no seu navegador.

### Testes Unitários
```bash
npm test
```

### Compilação de Produção
```bash
npm run build
```

---

## 🌐 Publicação no GitHub Pages (Automática)

Este repositório inclui a configuração necessária para publicação estática e automática via GitHub Actions:
1. Crie um repositório no seu perfil do GitHub.
2. Envie os ficheiros para o ramo `main`.
3. Nas definições do repositório (**Settings** > **Pages**), configure **Source** para **GitHub Actions**.
4. O sítio web ficará automaticamente disponível em `https://SEU-UTILIZADOR.github.io/NOME-DO-REPOSITORIO/`.

---

## 📄 Licença e Direitos

Projeto pedagógico aberto concebido por **Carla Oliveira (2026)** para a formação contínua de professores e partilha com a comunidade escolar.
