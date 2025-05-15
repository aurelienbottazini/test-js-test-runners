
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 63 to equal 85', () => {
  expect(sum(22, 63)).toBe(85);
});
