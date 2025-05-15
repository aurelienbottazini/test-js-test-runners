
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 63 to equal 81', () => {
  expect(sum(18, 63)).toBe(81);
});
