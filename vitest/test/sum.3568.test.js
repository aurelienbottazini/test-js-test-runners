
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 34 to equal 55', () => {
  expect(sum(21, 34)).toBe(55);
});
