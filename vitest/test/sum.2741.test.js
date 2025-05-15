
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 91 to equal 167', () => {
  expect(sum(76, 91)).toBe(167);
});
