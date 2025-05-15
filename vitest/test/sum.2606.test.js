
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 13 to equal 82', () => {
  expect(sum(69, 13)).toBe(82);
});
