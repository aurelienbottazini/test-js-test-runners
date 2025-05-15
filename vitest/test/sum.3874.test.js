
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 36 to equal 99', () => {
  expect(sum(63, 36)).toBe(99);
});
