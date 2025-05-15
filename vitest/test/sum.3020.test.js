
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 61 to equal 82', () => {
  expect(sum(21, 61)).toBe(82);
});
