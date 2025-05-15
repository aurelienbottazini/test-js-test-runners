
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 10 to equal 98', () => {
  expect(sum(88, 10)).toBe(98);
});
