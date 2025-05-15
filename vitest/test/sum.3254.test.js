
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 56 to equal 99', () => {
  expect(sum(43, 56)).toBe(99);
});
