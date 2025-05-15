
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 28 to equal 63', () => {
  expect(sum(35, 28)).toBe(63);
});
