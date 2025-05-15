
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 3 to equal 58', () => {
  expect(sum(55, 3)).toBe(58);
});
