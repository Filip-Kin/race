class Entity {
    private x: number;
    private y: number;
    public uuid: string;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
        this.uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}