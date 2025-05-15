
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 1 to equal 58', () => {
  expect(sum(57, 1)).toBe(58);
});
