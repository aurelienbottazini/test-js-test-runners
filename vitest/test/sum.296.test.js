
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 63 to equal 137', () => {
  expect(sum(74, 63)).toBe(137);
});
