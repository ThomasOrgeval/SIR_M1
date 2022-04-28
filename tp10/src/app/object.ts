export class User {
  constructor(public id: number | null, public name: string) {
  }
}

export interface UserRes {
  id: number
  name: string
}

export class Kanban {
  constructor(public id: number, public kanban: string, public cards: Card[] | null, public owner: User | null) {
  }
}

export class KanbanRes {
  constructor(
    public id: number | null,
    public kanban: string,
    public owner: User,
  ) {
  }
}

export class Card {
  constructor(
    public id: number | null,
    public name: string,
    public type: string,
    public place: string,
    public url: string,
    public note: string,
    public end: Date | string,
    public estimated: number,
    public tags: string[] | null,
    public kanban_id: number | null,
    public user_id: number | null
  ) {
  }
}

export interface CardRes {
  id: number
  name: string
  type: string
  place: string
  url: string
  note: string
  end: string
  estimated: number
  tags: string[]
}
