class Sprite {
    private url: string;
    private uri: string;
    private img = new Image;

    constructor(url: string) {
        this.url = url;
        this.makeURI();
        this.loadImg();
    }

    private async makeURI() {
        await fetch(this.url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => { this.uri = reader.result.toString(); }
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }));
    }

    private async loadImg() {
        await new Promise((resolve, reject) => {
            this.img.addEventListener('load', () => {
                resolve();
            });
            this.img.setAttribute("src", this.uri);
        });
    }
}