AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "comic25",
        title: "Una ataque mortifero",
        url: "./assets/cover25.jpg",
      },
      {
        id: "comic26",
        title: "Todo o nada",
        url: "./assets/cover26.jpg",
      },

      {
        id: "comic27",
        title: "La lucha de sus vidas",
        url: "./assets/cover27.jpg",
      },
      {
        id: "comic28",
        title: "La batalla final continua",
        url: "./assets/cover28.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 4;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Elemento de borde
      const borde=this.createBorde(position, item.id)
      
      // Elemento de miniatura
      const miniatura=this.imagenMini(item)
      borde.appendChild(miniatura)
     
      // Elemento del texto del título
      const titulo=this.title(position, item)
      borde.appendChild(titulo)
      
      this.placesContainer.appendChild(borde);
    }
  },
  createBorde: function(position, id){
    const entidad_borde=document.createElement("a-entity")
    entidad_borde.setAttribute("id", id)
    entidad_borde.setAttribute("visible", true)
    entidad_borde.setAttribute("geometry", {
      primitive:"plane",
      height:33,
      width:22.4
    })
    entidad_borde.setAttribute("position", position)
    entidad_borde.setAttribute("material", {
      color:"#8F54EA",
      opacity:1,
    })
    entidad_borde.setAttribute("cursor-x", {});
    
    return entidad_borde
  },
  imagenMini:function(item){
    const entidadImage=document.createElement("a-entity")
    entidadImage.setAttribute("visible", true)
    entidadImage.setAttribute("geometry", {
      primitive:"box",
      height:30,
      width:20
    })
    entidadImage.setAttribute("material", {
      src:item.url
    })
    return entidadImage
  },
  title:function(position, item){
    const entidadTitulo=document.createElement("a-entity")
    entidadTitulo.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width:70,
      color:"#921786",
      value:item.title
    })
    const textoPos=position
    textoPos.y = -35
    entidadTitulo.setAttribute("position", textoPos)
    entidadTitulo.setAttribute("visible", true)
    return entidadTitulo
  }
  
});
