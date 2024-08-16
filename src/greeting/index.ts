export class Greetings {
  public message: string;

  constructor(message: string) {
    this.message = message;
  }

  public get(): string {
    return this.message;
  }

  public set(message: string): void {
    this.message = message;
  }

  public append(text: string): void {
    this.message += ` ${text}`;
  }

  public reset(): void {
    this.message = '';
  }
}

export const NewGreetings = (message: string): Greetings =>
  new Greetings(message);
