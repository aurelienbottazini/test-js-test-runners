
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 63 to equal 124', () => {
  expect(sum(61, 63)).toBe(124);
});
