
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 85 to equal 167', () => {
  expect(sum(82, 85)).toBe(167);
});
