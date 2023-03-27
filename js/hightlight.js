AFRAME.registerComponent("cursor-x", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },  
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents()
    },
    update:function(){
      const fondo=document.querySelector("#backgroundImage")
      c=fondo.children
      if(c.lenght > 0){
        var i 
        for(i=0; i<=c.lenght; i++){
          fondo.removeChild(c[i])
        }
      }
      else{
        this.handleMouseClicksEvents()
      }
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["comic25", "comic26", "comic27", "comic28"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-x", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "black",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      this.el.addEventListener("mouseenter", () => {
        console.log("hola")
        this.handlePlacesListState();
        
      });
    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId}=this.data
        if(selectedItemId){
          const num=document.querySelector(`#${selectedItemId}`)
          const idnum=num.getAttribute("id")
          if(selectedItemId === idnum){
            num.setAttribute("material",{
              color:"#8F54EA",
              opacity:"1"
            })
          }
        }
      })
      
    },
    handleMouseClicksEvents: function(){
      this.el.addEventListener("click", ()=>{
        const {selectedItemId}=this.data
        const title=document.querySelector("#app-title")
        const cursores=document.querySelector("#camera-cursor")
        const imagen=document.querySelector("#backgroundImage")
        if(selectedItemId){
          imagen.setAttribute("visible",true)
          imagen.setAttribute("info-banner",{
            itemId:selectedItemId
          })
          title.setAttribute("visible", false)
          cursores.setAttribute("position", {
            x:0,
            y:0,
            z:-1
          })
          cursores.setAttribute("geometry", {
            radiusInner:0.03,
            radiusOuter:0.04
          })
        }
        else{
          title.setAttribute("visible", true)
          cursores.setAttribute("position", {
            x:0,
            y:0,
            z:-3
          })
          cursores.setAttribute("geometry", {
            radiusInner:0.08,
            radiusOuter:0.12
          })
        }
        
      })
    }
  });