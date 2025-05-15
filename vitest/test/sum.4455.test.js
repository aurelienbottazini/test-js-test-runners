
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 9 to equal 52', () => {
  expect(sum(43, 9)).toBe(52);
});
