
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 2 to equal 82', () => {
  expect(sum(80, 2)).toBe(82);
});
