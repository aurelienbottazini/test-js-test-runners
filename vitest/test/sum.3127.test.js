
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 50 to equal 137', () => {
  expect(sum(87, 50)).toBe(137);
});
