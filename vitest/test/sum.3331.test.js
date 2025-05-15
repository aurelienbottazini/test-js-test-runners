
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 64 to equal 69', () => {
  expect(sum(5, 64)).toBe(69);
});
