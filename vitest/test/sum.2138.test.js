
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 8 to equal 71', () => {
  expect(sum(63, 8)).toBe(71);
});
