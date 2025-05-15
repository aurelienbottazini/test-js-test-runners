
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 47 to equal 110', () => {
  expect(sum(63, 47)).toBe(110);
});
