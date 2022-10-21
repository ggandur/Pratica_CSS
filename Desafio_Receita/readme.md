# Desafio página de receita 
#### _Link das instruções do desafio: https://efficient-sloth-d85.notion.site/Desafio-Piloto-P-gina-de-Receita-15acc6a34f744484a2e64a1f115bfbae_
#### _Link do desafio original: https://app.rocketseat.com.br/discover/challenges/cookbook_

## 💻 Sobre o desafio

---

Nesse desafio você deverá criar uma página web de uma receita com título, imagem, lista de ingredientes e modo de preparo.
O desafio está dividido em duas partes, no primeiro momento você irá criar a estrutura HTML com as informações da receita e na segunda parte será o momento de adicionar os estilos à página com o CSS.

**Requisitos para o desafio:**

- A receita deve ter um **título**, para isso você pode usar uma das tags de heading (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`).
    
    <aside>
    💡 Você deve escolher a tag que faz mais sentido como **título principal** da página.
    
    </aside>
    
- A receita deve ter uma **imagem** ilustrativa.
    - Adicione também uma **legenda** para a imagem.
    
    <aside>
    💡 Para adicionar uma legenda na imagem você pode usar as tags `figure` e `figcaption` como no exemplo abaixo:
    
    </aside>
    
    ```html
    <figure>
       <img src="https://unsplash.com/photos/dEUyLofZe5o" alt="Texto descritivo da imagem" />
       <figcaption>Adicionar aqui a legenda da imagem</figcaption>
    </figure>
    ```
    
    <aside>
    💡 Sites onde você pode encontrar imagens grátis para usar nos seus projetos: [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/pt-br/), [Pixabay](https://pixabay.com/pt/).
    
    </aside>
    
- Cada lista deve ter um **subtítulo** (`Ingredientes` e `Modo de preparo`) .
- Os ingredientes devem ser apresentados como uma **lista não ordenada** `<ul>`.
- O modo de preparo deve ser apresentado como uma **lista ordenada** `<ol>`.
- Deve ter uma seção `Informações adicionais` com um **parágrafo** com a **descrição da receita.**
- No final da receita deve ter um **rodapé** com seus créditos.
    - Pode direcionar o **link** para seu repositório do Github. (opcional)

# 🎨 Style Guide

---

### Cores:

As cores usada no exemplo são as seguintes:

- Background da página: `#EAEAEA`;
- Background da receita: `#FFFFFF`;
- Títulos e subtítulos: `#1B1B1B`;
- Footer e legenda da imagem: `#8F8F8F`;
- Outros textos: `#39393A`;

### Você pode usar os tamanhos de font abaixo como referência:

- Título: `28px`;
- Subtítulos: `20px`;
- Listas e parágrafo(s): `16px`;
- Footer e legenda da imagem: `12px`;

## Estilizando a imagem

A imagem do layout acima tem uma largura(width) de 100% e altura(height) de 250px. Você pode usar essas medida para ajustar o tamanho da imagem.
