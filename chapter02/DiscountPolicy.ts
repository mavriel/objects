import Screening from "./Screening";
import Money from "./Money";
import DiscountCondition from "./DiscountCondition";

abstract class DiscountPolicy {
  private conditions: DiscountCondition[];

  protected constructor(...conditions: DiscountCondition[]) {
    this.conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening) {
    if (this.conditions.find((each) => each.isSatisfiedBy(screening))) {
      return this.getDiscountAmount(screening);
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}

class AmountDiscountPolicy extends DiscountPolicy {
  private readonly discountAmount: Money;

  constructor(discountAmount: Money, ...conditions: DiscountCondition[]) {
    super(...conditions);
    this.discountAmount = discountAmount;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return this.discountAmount;
  }
}

class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number;

  constructor(percent: number, ...conditions: DiscountCondition[]) {
    super(...conditions);
    this.percent = percent;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}

export default DiscountPolicy;
