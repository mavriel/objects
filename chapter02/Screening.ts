import Money from "./Money";
import Movie from "./Movie";

class Screening {
  private readonly movie: Movie;
  private readonly sequence: number;
  private readonly whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  getStartTime(): Date {
    return this.whenScreened;
  }

  isSequence(sequence: number): Boolean {
    return this.sequence === sequence;
  }

  getMovieFee() {
    return this.movie.getFee();
  }

  reserve(customer: Customer, audienceCount: number) {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }

  private calculateFee(audienceCount: number) {
    return Money.ZERO;
  }
}

class Customer {}

class Reservation {
  private customer: Customer;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(
    customer: Customer,
    screening: Screening,
    fee: Money,
    audienceCount: number
  ) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }
}

export default Screening;
