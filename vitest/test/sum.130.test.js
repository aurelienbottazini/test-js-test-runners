
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 67 to equal 142', () => {
  expect(sum(75, 67)).toBe(142);
});
