
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 18 to equal 18', () => {
  expect(sum(0, 18)).toBe(18);
});
