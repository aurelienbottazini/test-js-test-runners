
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 64 to equal 163', () => {
  expect(sum(99, 64)).toBe(163);
});
