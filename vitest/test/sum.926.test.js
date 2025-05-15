
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 62 to equal 105', () => {
  expect(sum(43, 62)).toBe(105);
});
