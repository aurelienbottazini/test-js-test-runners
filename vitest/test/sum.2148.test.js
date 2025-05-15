
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 52 to equal 58', () => {
  expect(sum(6, 52)).toBe(58);
});
