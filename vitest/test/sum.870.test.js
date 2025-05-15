
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 9 to equal 72', () => {
  expect(sum(63, 9)).toBe(72);
});
