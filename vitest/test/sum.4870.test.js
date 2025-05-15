
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 63 to equal 138', () => {
  expect(sum(75, 63)).toBe(138);
});
