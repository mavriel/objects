class Money {
  public static readonly ZERO = Money.wons(0);

  private readonly amount: number;

  private static wons(amount: number) {
    return new Money(amount);
  }

  constructor(amount: number) {
    this.amount = amount;
  }

  plus(amount: Money) {
    return new Money(this.amount + amount.amount);
  }

  minus(amount: Money) {
    return new Money(this.amount - amount.amount);
  }

  times(percent: number) {
    return new Money(this.amount * percent);
  }

  isLessThan(other: Money) {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money) {
    return this.amount >= other.amount;
  }
}

export default Money;
