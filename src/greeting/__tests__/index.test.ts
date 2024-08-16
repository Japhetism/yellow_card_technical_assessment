import { Greetings, NewGreetings } from '../index';

describe('Greetings class', () => {
  it('should create an instance of the Greetings class with the initial message "Hello World!"', () => {
    const message = 'Hello World!';
    const greetings = NewGreetings(message);
    expect(greetings.message).toEqual(message);
    expect(greetings).toBeInstanceOf(Greetings);
    expect(greetings.get()).toEqual(message);
  });

  it('should update the message of the Greetings instance after creation', () => {
    const message = '';
    const greetings = new Greetings(message);
    const updatedMessage = 'Hello there!';
    greetings.set(updatedMessage);
    expect(greetings.get()).toEqual(updatedMessage);
  });

  it('should append text to the existing message of the Greetings instance', () => {
    const message = 'Hello';
    const greetings = new Greetings(message);
    const name = 'Babatunde';
    greetings.append(name);
    expect(greetings.get()).toEqual(`${message} ${name}`);
  });

  it('should reset the message of the Greetings instance to an empty string', () => {
    const message = 'Hello World!';
    const greetings = NewGreetings(message);
    greetings.reset();
    expect(greetings.message).toEqual('');
  });
});
