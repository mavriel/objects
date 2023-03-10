import Money from "./Money";
import Screening from "./Screening";
import DiscountPolicy from "./DiscountPolicy";

class Movie {
  private title: string;
  private runningTime: number;
  private readonly fee: Money;
  private discountPolicy: DiscountPolicy;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountPolicy: DiscountPolicy
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee() {
    return this.fee;
  }

  calculateMovieFee(screening: Screening) {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  }
}

export default Movie;
