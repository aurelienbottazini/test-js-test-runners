
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 63 to equal 116', () => {
  expect(sum(53, 63)).toBe(116);
});
