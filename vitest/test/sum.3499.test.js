
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 26 to equal 63', () => {
  expect(sum(37, 26)).toBe(63);
});
