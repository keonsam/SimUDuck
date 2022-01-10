import { Duck } from "./Duck";
import { FlyWithWings } from "../flyBehaviors/FlyWithWings";
import { Quack } from "../quackBehaviors/Quack";

export class Mallard extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display(): void {
      console.log("I'm a Mallard.");
  }
}