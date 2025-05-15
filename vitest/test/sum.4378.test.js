
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 42 to equal 69', () => {
  expect(sum(27, 42)).toBe(69);
});
