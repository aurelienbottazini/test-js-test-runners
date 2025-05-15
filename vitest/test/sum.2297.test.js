
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 73 to equal 98', () => {
  expect(sum(25, 73)).toBe(98);
});
