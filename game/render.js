renderEngine = {
    objects: {},
    sprites: {},
    UI: {},
    canvas: null,
    ctx: null,
    sprites: {},

    renderFrame: () => {
        renderEngine.ctx.drawImage(renderEngine.sprites.track, 0, 0, 2000, 2000);
        for (obj in renderEngine.objects) {
            obj = renderEngine.objects[obj];
            renderEngine.drawSprite(obj.sprite, obj.x, obj.y, obj.r, obj.s);
        }
        for (obj in renderEngine.UI) {
            obj = renderEngine.UI[obj];
            if (obj.type === 'text') renderEngine.drawText(obj.callback(renderEngine.objects), obj.x, obj.y, obj.font, obj.color);
        }
    },
    drawSprite: (sprite, x, y, r, s) => {
        let width = sprite.width*s;
        let height = sprite.height*s;

        renderEngine.ctx.translate(x, y);
        renderEngine.ctx.rotate(r*(Math.PI/180));
        renderEngine.ctx.drawImage(sprite, -width/2, -height/2, width, height);
        renderEngine.ctx.rotate(-r*(Math.PI/180));
        renderEngine.ctx.translate(-x, -y);
    },
    drawText: (text, x, y, font, color) => {
        renderEngine.ctx.font = font;
        renderEngine.ctx.color = color;
        renderEngine.ctx.fillText(text, x, y);
    },
    addPlayerCar: (sprite, x, y, r, s, a, ma, v, mv, rs, drag, brakingA) => {
        let id = crypto.randomUUID();
        renderEngine.objects[id] = {sprite: sprite, x: x, y: y, r: r, s: s, a: a, ma: ma/50, v: v, mv: mv/50, rs: rs/50, drag: drag/50, brakingA: brakingA/50};
        return id;
    },
    addRemoteCar: (sprite, id, x, y, r) => {
        renderEngine.objects[id] = {sprite: sprite, id: id, x: x, y: y, r: r};
        return id;
    },
    addUI: (type, x, y, size, color, callback) => {
        if (type === 'text') {
            let id = crypto.randomUUID();
            renderEngine.UI[id] = {type: 'text', font: size+'px arial', color: color, x: x, y: y, callback: callback};
            return id;
        }
    }
}