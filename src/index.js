class DrawLine{
    constructor(){
			this.prevX = 0;
			this.prevY = 0;
			this.currX = 0;
			this.currY = 0;
			this.flag = false;
			this.color = 'black';
			this.widthLine = 2;

			this.canvasField = document.getElementById("canvas_field");
			this.colorPicker = document.getElementById("colorPicker");
			this.lineWidth = document.getElementById("widthLine");
			this.clearCanvas = document.getElementById("clearCanvas");
			this.ctx = this.canvasField.getContext("2d");
			this.canvasWIdth = this.canvasField.width;
			this.canvasHeight = this.canvasField.height;

			this.canvasField.addEventListener("mousemove", (e) => this.getCoordinates('move', e));
			this.canvasField.addEventListener("mousedown", (e) => this.getCoordinates('down', e));
			this.canvasField.addEventListener("mouseup", (e) => this.getCoordinates('up', e));
			this.canvasField.addEventListener("mouseout", (e) => this.getCoordinates('out', e));

			this.colorPicker.addEventListener("change", this.chooseColor);
			this.lineWidth.addEventListener("change", this.setLineWidth);
			this.clearCanvas.addEventListener("click", this.clearCanvasField);        
		}
		
    getCoordinates = (action, e) => {
        if(action == 'down') {
					this.prevX = this.currX;
					this.prevY = this.currY;
					this.currX = e.clientX - this.canvasField.offsetLeft;
					this.currY = e.clientY - this.canvasField.offsetTop;

					this.flag = true;

					if(this.flag) {
						this.ctx.beginPath();
						this.ctx.fillStyle = this.color;
						this.ctx.fillRect(this.currX, this.currY, this.widthLine, this.widthLine);
						this.ctx.closePath();                
					}
				}
				
        if(action == 'up' || action == 'out') {
					this.flag = false;
				}
				
        if(action == 'move') {
            if(this.flag){
							this.prevX = this.currX;
							this.prevY = this.currY;
							this.currX = e.clientX - this.canvasField.offsetLeft;
							this.currY = e.clientY - this.canvasField.offsetTop;
							this.draw()
            }
        }
		}
		
    draw = () => {
			this.ctx.beginPath();
			this.ctx.moveTo(this.prevX, this.prevY);
			this.ctx.lineTo(this.currX, this.currY);
			this.ctx.strokeStyle = this.color;
			this.ctx.lineWidth = this.widthLine;
			this.ctx.stroke();
			this.ctx.closePath();
		}
		
    chooseColor = (e) => {
			this.color = e.target.value;
		}

		setLineWidth = (e) => {
			this.widthLine = e.target.value;
		}

		clearCanvasField = () => {
			this.ctx.clearRect(0, 0, this.canvasWIdth, this.canvasHeight);
		}
}

let drawLine = new DrawLine();