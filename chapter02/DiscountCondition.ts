import Screening from "./Screening";

export default interface DiscountCondition {
  isSatisfiedBy: (screening: Screening) => Boolean;
}

class SequenceCondition implements DiscountCondition {
  private readonly sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): Boolean {
    return screening.isSequence(this.sequence);
  }
}

type DayOfWeek = number;

class PeriodCondition implements DiscountCondition {
  private dayOfWeek: DayOfWeek;
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: DayOfWeek, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): Boolean {
    return (
      screening.getStartTime().getDay() === this.dayOfWeek &&
      this.startTime <= screening.getStartTime() &&
      this.endTime >= screening.getStartTime()
    );
  }
}
