
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 40 to equal 52', () => {
  expect(sum(12, 40)).toBe(52);
});
