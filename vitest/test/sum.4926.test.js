
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 40 to equal 99', () => {
  expect(sum(59, 40)).toBe(99);
});
