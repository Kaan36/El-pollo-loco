class Chick extends MovableObject {
    y = 380; // ohne this, weil Variablen beziehen sich auf Elternklasse und überschreiben diese.
    height = 40; // ohne this, weil Variablen beziehen sich auf Elternklasse und überschreiben diese.
    width = 50;


    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png',
    ]

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1000 + Math.random() * 6400; // variable x bezogen auf Elternklasse mit super() oder this;
        this.speed += Math.random() * 3;
        this.animate();
    }

    
    animate() {
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING);
        }, 200);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

    };
}