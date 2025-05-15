
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 32 to equal 58', () => {
  expect(sum(26, 32)).toBe(58);
});
