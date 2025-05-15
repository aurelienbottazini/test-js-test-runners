
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 41 to equal 69', () => {
  expect(sum(28, 41)).toBe(69);
});
