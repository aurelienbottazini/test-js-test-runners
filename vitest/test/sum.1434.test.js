
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 50 to equal 52', () => {
  expect(sum(2, 50)).toBe(52);
});
