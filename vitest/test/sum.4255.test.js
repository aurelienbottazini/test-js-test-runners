
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 51 to equal 114', () => {
  expect(sum(63, 51)).toBe(114);
});
