class Link {
  constructor(bodyA, bodyB) {
    var lastlink = bodyA.body.bodies.length - 5;
    this.link = Constraint.create({
      bodyA: bodyA.body.bodies[lastlink],
      pointA: { x: -7, y: -5 },
      bodyB: bodyB.body,
      pointB: { x: -7, y: -5 },
      length:10,
      stiffness:1
    });

    World.add(world, this.link);
  }
  dettach() {
    World.remove(world, this.link);
  }
}