export type TBuzzes = [multiplier: number, phrase: string][];
export interface IFizzBuzz {
  buzzes: TBuzzes;
  /**
   * Shows the `n`th term of FizzBuzz using the `buzzes` array for the phrases
   * @param {number} n The nth number to be found in the sequence
   * @param {TBuzzes} [buzzes=[[3, "Fizz"], [5, "Buzz"]]] An array of `[number, string]` tuples where the number is the multiple and the string is the phrase to be used. Respects the index order of the array when compounding phrases, eg `[[3, "Fizz"], [5, "Buzz"]]` produces "FizzBuzz" for 15, `[[5, "Buzz"], [3, "Fizz"]]` produces "BuzzFizz" for 15
   */
  nth(n: number, buzzes?: TBuzzes): string | number;
  /**
   * Shows the first `limit` terms of FizzBuzz using the `buzzes` array for the phrases
   * @param {number} limit The number to go up to (inclusive) when generating results. Anything <=0 will produce no results.
   * @param {TBuzzes} [buzzes=[[3, "Fizz"], [5, "Buzz"]]] An array of `[number, string]` tuples where the number is the multiple and the string is the phrase to be used. Respects the index order of the array when compounding phrases, eg `[[3, "Fizz"], [5, "Buzz"]]` produces "FizzBuzz" for 15, `[[5, "Buzz"], [3, "Fizz"]]` produces "BuzzFizz" for 15
   */
  sequence(limit: number, buzzes?: TBuzzes): (string | number)[];
}

export default class FizzBuzz implements IFizzBuzz {
  constructor(buzzes: TBuzzes) {
    this._buzzes = buzzes;
  }

  private _buzzes: TBuzzes;
  set buzzes(buzzes: TBuzzes) {
    this._buzzes = buzzes;
  }
  get buzzes(): TBuzzes {
    return this._buzzes;
  }

  static nth(
    n: number,
    buzzes: TBuzzes = [
      [3, "Fizz"],
      [5, "Buzz"],
    ],
  ): string | number {
    let out = "";
    buzzes.forEach(([m, p]) => n % +m === 0 && (out += p));
    return out || n;
  }
  nth(n: number, buzzes?: TBuzzes): string | number {
    return FizzBuzz.nth(n, buzzes ?? this._buzzes);
  }

  static sequence(
    limit: number,
    buzzes: TBuzzes = [
      [3, "Fizz"],
      [5, "Buzz"],
    ],
  ): (string | number)[] {
    return [...Array(limit).keys()].map((n) => FizzBuzz.nth(n + 1, buzzes));
  }
  sequence(limit: number, buzzes?: TBuzzes): (string | number)[] {
    return FizzBuzz.sequence(limit, buzzes ?? this._buzzes);
  }
}

export const fizzBuzzNth = FizzBuzz.nth;
export const fizzBuzzSequence = FizzBuzz.sequence;