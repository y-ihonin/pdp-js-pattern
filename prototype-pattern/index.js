class NPC {
  constructor(name, health, attack) {
    this.name = name
    this.health = health
    this.attack = attack
  }

  clone () {
    return new NPC(this.name, this.health, this.attack)
  }
}

class Zombie extends NPC {
  constructor(name, health, attack) {
    super(name, health, attack)
  }

  clone() {
    return new Zombie(this.name, this.health, this.attack)
  }
}

class Goblin extends NPC {
  constructor(name, health, attack) {
    super(name, health, attack)
  }

  clone() {
    return new Goblin(this.name, this.health, this.attack)
  }
}

const ZombiePrototype = new Zombie('Zombie', 200, 50);
const GoblinPrototype = new Goblin('Goblin', 100, 20);

const zombie1 = ZombiePrototype.clone();
const zombie2 = ZombiePrototype.clone();

const goblin1 = GoblinPrototype.clone();
const goblin2 = GoblinPrototype.clone();

const NPSs = [zombie1, zombie2, goblin1, goblin2];

console.log(NPSs);
