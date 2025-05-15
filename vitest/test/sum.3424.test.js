
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 63 to equal 83', () => {
  expect(sum(20, 63)).toBe(83);
});
