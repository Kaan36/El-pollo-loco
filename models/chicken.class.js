class Chicken extends MovableObject {
    y = 360; // ohne this, weil Variablen beziehen sich auf Elternklasse und überschreiben diese.
    height = 60; // ohne this, weil Variablen beziehen sich auf Elternklasse und überschreiben diese.
    width = 70; // ohne this, weil Variablen beziehen sich auf Elternklasse und überschreiben diese.

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 1000 + Math.random() * 6000; // variable x bezogen auf Elternklasse mit super() oder this;
        this.speed += Math.random() * 1;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    };


    animate() {
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING);
        }, 200);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

    };
};


