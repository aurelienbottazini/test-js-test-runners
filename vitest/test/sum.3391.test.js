
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 19 to equal 58', () => {
  expect(sum(39, 19)).toBe(58);
});
