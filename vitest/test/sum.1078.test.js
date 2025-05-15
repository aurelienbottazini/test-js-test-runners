
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 67 to equal 69', () => {
  expect(sum(2, 67)).toBe(69);
});
