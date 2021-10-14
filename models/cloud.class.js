class Cloud extends MovableObject {
   y = 20;
   width = 400;
   height = 250;
   
   constructor() {
      
      super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
      this.x = Math.random() * 500;
    
      this.animate();
   };

   animate(){
      setInterval(() => {
         this.moveLeft();
      }, 1000 / 60)
     
   };

};