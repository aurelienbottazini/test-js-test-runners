
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 8 to equal 98', () => {
  expect(sum(90, 8)).toBe(98);
});
