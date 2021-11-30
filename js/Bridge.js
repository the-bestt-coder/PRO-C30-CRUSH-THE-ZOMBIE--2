class Bridge {
  constructor(nlink, pointA) {
    this.nlink = nlink;
    this.image = loadImage("assets/wood.png");
    const group = Body.nextGroup(true);
    const rects = Composites.stack(100, 100, this.nlink,0.001, 6, 5, function(
      x,
      y
    ) {
      return Bodies.rectangle(x, y, 40, 15, 10, {
        collisionFilter: { group: group }
      });
    });

    this.pointA = pointA;
    this.body = Composites.chain(rects, 0.1, 0, -0.6, 0, {
      stiffness: 1,
      length: 11,
      render: { type: "line" }
    });

    World.add(engine.world, this.body);

    Composite.add(rects, [
      Constraint.create({
        pointA: this.pointA,
        bodyB: rects.bodies[0],
        pointB: { x: -25, y: 0 },
        length: 12,
        stiffness: 1.5
      })
    ]);
  }

  break() {
    this.body = null;
  }

  show() {
    if (this.body != null) {
      for (let i = 0; i < this.body.bodies.length - 1; i++) {
        this.drawVertices(this.body.bodies[i].vertices);
      }
    }
  }

  drawVertices(vertices) {
    push();
    // translate(vertices[i].x, vertices[i].y);

    for (let i = 0; i < vertices.length; i++) {
      image(this.image, vertices[i].x, vertices[i].y, 80, 50);
    }
    pop();
  }
}