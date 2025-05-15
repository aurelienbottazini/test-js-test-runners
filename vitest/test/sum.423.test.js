
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 98 to equal 161', () => {
  expect(sum(63, 98)).toBe(161);
});
