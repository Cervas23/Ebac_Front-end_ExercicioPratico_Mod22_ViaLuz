# 🚀 ViaLuz - Turismo na Velocidade da Luz

Projeto desenvolvido como parte do curso de Front-End da EBAC, com foco na construção de interfaces web interativas utilizando HTML, CSS e JavaScript.

---

## 🚀 Demonstração

🔗 Acesse o repositório:  
https://github.com/Cervas23/Ebac_Front-end_ExercicioPratico_Mod22_ViaLuz

---

## 📚 Sobre o Projeto

O **ViaLuz** é uma aplicação web que simula uma página interativa, aplicando conceitos fundamentais de desenvolvimento front-end, como:

- Estruturação semântica com HTML  
- Estilização com CSS  
- Interatividade com JavaScript  
- Manipulação de eventos  
- Validação de dados  

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos práticos adquiridos ao longo do curso.

---

## 🛠️ Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript
- Typescript
- Git & GitHub  

---

## 📂 Estrutura do Projeto

├── index.html
├── style.css
├── script.js
└── assets/

---

## ⚙️ Funcionalidades

- 📌 Interface responsiva  
- 📌 Manipulação dinâmica do DOM  
- 📌 Validação de formulário  
- 📌 Interações com o usuário  
- 📌 Feedback visual de ações  

---

## 🔄 Integração Contínua (CI)

Este projeto utiliza **GitHub Actions** para execução automática de build a cada alteração na branch `main`.

### ▶️ Como verificar o pipeline

1. Acesse a aba **Actions** do repositório no GitHub  
2. Clique no workflow mais recente  
3. Verifique os passos executados:
   - Instalação de dependências
   - Build do projeto

### 📌 Quando o pipeline roda

O pipeline é executado automaticamente a cada:
- Push na branch `main`

### ✅ Critério de sucesso

O build deve finalizar sem erros. Caso falhe, verifique os logs para identificar o problema (ex: erro de API, dependência, etc).

## 🚧 Gargalos Identificados

Durante a análise com Lighthouse e boas práticas de performance, foram identificados os seguintes pontos de melhoria:

Uso de <img> sem otimização de carregamento
Imagens externas não configuradas no Next.js
Carregamento de imagens em formato não otimizado (SVG não tratado)
Falta de definição de sizes em imagens com fill
Possível impacto em métricas como LCP (Largest Contentful Paint)
Re-renderizações desnecessárias em componentes
Código não utilizado (dependências e imports)
Possível excesso de JavaScript inicial

## 🚀 Melhorias Aplicadas

Foram implementadas otimizações focadas em performance e boas práticas modernas:

## 🖼️ Imagens
Substituição de <img> por <Image /> do Next.js
Configuração de domínios externos no next.config.js
Ajuste de URLs para uso de imagens em formato .png
Implementação de sizes para responsividade
Uso de priority para imagem LCP
Ajuste de object-fit para evitar distorções e CLS

## ⚡ Performance
Redução de layout shift (CLS) com dimensionamento correto das imagens
Uso de dynamic import para carregamento sob demanda
Otimização de renderização com React.memo
Redução de JavaScript inicial

## 🧹 Código
Remoção de dependências não utilizadas (ts-node, babel plugin)
Limpeza de imports desnecessários
Organização de estrutura de pastas
Melhoria na legibilidade e manutenção do código

## 📦 Configuração
Ajustes no next.config.js para otimização de imagens
Ativação de compressão e minificação automática
Configuração de formatos modernos (webp / avif)

## 🔍 SEO e Boas Práticas
Ajuste de metadata das páginas
Correção de possíveis bloqueios de indexação
Melhor estrutura semântica
Preparação para indexação em mecanismos de busca

## Comparativos
Antes
<img width="661" height="190" alt="image" src="https://github.com/user-attachments/assets/d4d78cf6-a9ed-4930-a46d-e8d954050cf0" />
<img width="661" height="190" alt="image" src="https://github.com/user-attachments/assets/d4d78cf6-a9ed-4930-a46d-e8d954050cf0" />

Depois
<img width="632" height="193" alt="image" src="https://github.com/user-attachments/assets/9833423c-17b0-4a32-95e4-b8e541a4988f" />
<img width="632" height="193" alt="image" src="https://github.com/user-attachments/assets/9833423c-17b0-4a32-95e4-b8e541a4988f" />


## 📖 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados:

- Organização de código front-end  
- Separação de responsabilidades (HTML, CSS e JS)  
- Uso de eventos no JavaScript  
- Validação de entradas do usuário  
- Boas práticas de versionamento com Git
- Otimização de performance com Lighthouse
- Uso avançado de recursos do Next.js 

---

## Onde abrir o projeto

[ViaLuz](https://vialuz.vercel.app/)

👨‍💻 Autor

Desenvolvido por Lucas Luz

📌 Observações

Este projeto tem fins educacionais e faz parte da formação em desenvolvimento front-end.
