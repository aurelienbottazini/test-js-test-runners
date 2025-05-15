
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 50 to equal 116', () => {
  expect(sum(66, 50)).toBe(116);
});
