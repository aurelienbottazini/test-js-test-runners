
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 63 to equal 134', () => {
  expect(sum(71, 63)).toBe(134);
});
