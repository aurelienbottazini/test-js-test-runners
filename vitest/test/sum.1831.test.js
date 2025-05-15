
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 37 to equal 82', () => {
  expect(sum(45, 37)).toBe(82);
});
