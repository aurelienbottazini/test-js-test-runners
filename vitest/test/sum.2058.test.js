
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 63 to equal 74', () => {
  expect(sum(11, 63)).toBe(74);
});
