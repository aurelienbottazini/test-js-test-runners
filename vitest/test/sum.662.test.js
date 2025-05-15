
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 55 to equal 118', () => {
  expect(sum(63, 55)).toBe(118);
});
