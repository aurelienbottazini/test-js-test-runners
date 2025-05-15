
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 6 to equal 18', () => {
  expect(sum(12, 6)).toBe(18);
});
