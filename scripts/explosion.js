function CreateExplosion(count, force, x, y) {
    for (var i = 0; i < count; ++i) {
        var vel = {
            x: (2 - (1 + Math.random() * 2)) * force,
            y: (2 - (1 + Math.random() * 2)) * force
        };
        var projectile = CreateProjectile({
            img: "assets/images/portal.png",
            x: x,
            y: y,
            width: 5,
            height: 5,
            zIndex: 3
        }, vel);
    }
}
