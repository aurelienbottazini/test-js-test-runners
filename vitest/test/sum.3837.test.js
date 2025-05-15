
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 63 to equal 91', () => {
  expect(sum(28, 63)).toBe(91);
});
