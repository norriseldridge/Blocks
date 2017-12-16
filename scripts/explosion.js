function CreateExplosion(img, count, force, x, y) {
    for (var i = 0; i < count; ++i) {
        var vel = {
            x: (2 - (1 + Math.random() * 2)) * force,
            y: (2 - (1 + Math.random() * 2)) * force
        };
        var projectile = CreateProjectile({
            img: img,
            x: x,
            y: y,
            width: 8,
            height: 8,
            zIndex: 3
        }, vel);
    }
}
