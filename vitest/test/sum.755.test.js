
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 74 to equal 82', () => {
  expect(sum(8, 74)).toBe(82);
});
