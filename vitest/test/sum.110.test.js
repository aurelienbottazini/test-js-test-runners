
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 98 to equal 167', () => {
  expect(sum(69, 98)).toBe(167);
});
