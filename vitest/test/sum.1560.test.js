
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 12 to equal 99', () => {
  expect(sum(87, 12)).toBe(99);
});
