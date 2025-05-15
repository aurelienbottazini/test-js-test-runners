
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 17 to equal 18', () => {
  expect(sum(1, 17)).toBe(18);
});
