import { Duck } from "./src/ducks/Duck";
import { Mallard } from "./src/ducks/Mallard";
import { ModelDuck } from "./src/ducks/ModelDuck";
import { FlyRocketPowered } from "./src/flyBehaviors/FlyRocketPowered";

class MiniDuckSimulator {
  main(): void {
    const mallard: Duck = new Mallard();
    mallard.display();
    mallard.performFly();
    mallard.performQuack();

    const model: Duck = new ModelDuck();
    model.display();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
  }
}

const app = new MiniDuckSimulator();
app.main();
