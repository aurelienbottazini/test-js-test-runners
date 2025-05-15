
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 92 to equal 167', () => {
  expect(sum(75, 92)).toBe(167);
});
