class Coins {
    x = 300;
    y = 300;
    img;
    height = 150;
    width = 150;


    constructor(){
       this.loadImage('img/8.Coin/Moneda1.png');
       this.x = this.x + Math.random() * 4000;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}