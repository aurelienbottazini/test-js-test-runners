
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 67 to equal 116', () => {
  expect(sum(49, 67)).toBe(116);
});
