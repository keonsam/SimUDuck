import { FlyNoWay } from "../flyBehaviors/FlyNoWay";
import { Quack } from "../quackBehaviors/Quack";
import { Duck } from "./Duck";

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }
  display(): void {
      console.log("I'm a model duck.");
  }
}