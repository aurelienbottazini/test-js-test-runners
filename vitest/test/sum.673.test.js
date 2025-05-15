
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 76 to equal 167', () => {
  expect(sum(91, 76)).toBe(167);
});
