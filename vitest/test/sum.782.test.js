
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 98 to equal 138', () => {
  expect(sum(40, 98)).toBe(138);
});
