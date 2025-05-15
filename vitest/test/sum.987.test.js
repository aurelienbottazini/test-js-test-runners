
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 48 to equal 69', () => {
  expect(sum(21, 48)).toBe(69);
});
