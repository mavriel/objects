{
  class Invitation {
    private when: Date;

    constructor(when: Date) {
      this.when = when;
    }
  }

  class Ticket {
    private readonly fee: number;

    constructor(fee: number) {
      this.fee = fee;
    }

    getFee() {
      return this.fee;
    }
  }

  class Bag {
    private amount: number;
    private readonly invitation?: Invitation;
    private _ticket?: Ticket;

    constructor(amount: number, invitaion?: Invitation) {
      this.amount = amount;
      this.invitation = invitaion;
    }

    set ticket(value: Ticket) {
      this._ticket = value;
    }

    hasInvitation() {
      return !!this.invitation;
    }

    hasTicket() {
      return !!this._ticket;
    }

    minusAmount(amount: number) {
      this.amount -= amount;
    }

    plusAmount(amount: number) {
      this.amount += amount;
    }
  }

  class Audience {
    private readonly bag: Bag;

    constructor(bag: Bag) {
      this.bag = bag;
    }

    buy(ticket: Ticket) {
      if (this.bag.hasInvitation()) {
        this.bag.ticket = ticket;
        return 0;
      } else {
        this.bag.ticket = ticket;
        this.bag.minusAmount(ticket.getFee());
        return ticket.getFee();
      }
    }
  }

  class TicketOffice {
    private amount: number;
    private tickets: Ticket[];

    constructor(amount: number, ...tickets: Ticket[]) {
      this.amount = amount;
      this.tickets = tickets;
    }

    getTicket() {
      const [ticket, ...rest] = this.tickets;
      this.tickets = rest;
      return ticket;
    }

    minusAmount(amount: number) {
      this.amount -= amount;
    }

    plusAmount(amount: number) {
      this.amount += amount;
    }
  }

  class TicketSeller {
    private ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
      this.ticketOffice = ticketOffice;
    }

    sellTo(audience: Audience) {
      this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket()));
    }
  }

  class Theater {
    private ticketSeller: TicketSeller;

    constructor(ticketSeller: TicketSeller) {
      this.ticketSeller = ticketSeller;
    }

    enter(audience: Audience) {
      this.ticketSeller.sellTo(audience);
    }
  }
}
