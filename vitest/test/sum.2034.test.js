
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 63 to equal 121', () => {
  expect(sum(58, 63)).toBe(121);
});
