
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 50 to equal 59', () => {
  expect(sum(9, 50)).toBe(59);
});
