
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 90 to equal 167', () => {
  expect(sum(77, 90)).toBe(167);
});
