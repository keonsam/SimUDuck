import { FlyBehavior } from "../flyBehaviors/FlyBehavior";
import { QuackBehavior } from "../quackBehaviors/QuackBehavior";

export abstract class Duck {
  flyBehavior: FlyBehavior | undefined;
  quackBehavior: QuackBehavior | undefined;

  abstract display(): void;

  swim() {
    console.log("Duck swimming...");
  }

  performFly() {
    this.flyBehavior?.fly();
  }

  performQuack() {
    this.quackBehavior?.quack();
  }

  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
}