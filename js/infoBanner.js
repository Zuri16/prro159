AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default:"", type: "string" },
  },
  update:function(){
    this.createBanner()
  },
  createBanner: function () {
    postersInfo={
      comic25:{
        banner_url:".assets/cover25.jpg",
        title:"Una ataque mortifero",
        released_year:"2019",
        description:"hols"
      },
      comic26:{
        banner_url:".assets/cover26.jpg",
        title:"Una",
        released_year:"2019",
        description:"hola"
      },
      comic27:{
        banner_url:".assets/cover27.jpg",
        title:"U",
        released_year:"2019",
        description:"hola"
      },
      comic28:{
        banner_url:".assets/cover28.jpg",
        title:"mortifero",
        released_year:"2019",
        description:"hola"
      }
    }
    const {itemId} = this.data
    const fondo = document.querySelector("#backgroundImage")
    const entidad = document.createElement("a-entity")
    entidad.setAttribute("visible", true)
    entidad.setAttribute("id", `${itemId}-banner` )
    entidad.setAttribute("geometry", {
      primitive:"plane",
      width:0.9,
      height:1
    })
    entidad.setAttribute("material", {
      color:"#000"
    })
    entidad.setAttribute("position", {x:0, y:0.1, z:-1})
    const item=postersInfo[itemId]
    // 3 const 
    const image=this.createImageBitmap(item)
    const title=this.createTitle()
    const description=this.createDescription()
    // agregar como hijas de entidad
    entidad.appendChild(image)
    entidad.appendChild(title)
    entidad.appendChild(description)
    //entidad hija de fondo
    fondo.appendChild(entidad)
  },
  createImageBitmap:function(item){
    const imagen = document.createElement("a-entity")
    imagen.setAttribute("visible", true) 
    imagen.setAttribute("geometry", {
      primitive:"plane",
      width:0.85,
      height:0.4
    })
    imagen.setAttribute("material", {
      src:item.banner_url
    })
    imagen.setAttribute("position", {x:0, y:0.3, z:0.05})
    return imagen
  },
  createTitle:function(item){
    const titulo = document.createElement("a-entity")
    titulo.setAttribute("visible", true)
    titulo.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width: 1.5,
      color:"red",
      value:item.title
    }) 
    titulo.setAttribute("position", {x:-0.4, y:0.03, z:0.05})
    return titulo
  },
  createDescription:function(item){
    const descripccion = document.createElement("a-entity")
    descripccion.setAttribute("visible", true)
    descripccion.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width: 1.5,
      color:"red",
      value:"¡Tienda de historietas virtual!"
    }) 
    descripccion.setAttribute("position", {x:-0.4, y:0.24, z:0.05})
    return descripccion
  }
  });