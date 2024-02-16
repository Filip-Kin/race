class Display {
    public cvs: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    constructor(canvasID: string, ) {
        this.cvs = <HTMLCanvasElement> document.getElementById(canvasID);
        this.ctx = this.cvs.getContext('2d');
    }
}