
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 8 to equal 63', () => {
  expect(sum(55, 8)).toBe(63);
});
