
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 80 to equal 98', () => {
  expect(sum(18, 80)).toBe(98);
});
