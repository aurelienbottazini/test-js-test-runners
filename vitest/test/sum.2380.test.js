
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 8 to equal 82', () => {
  expect(sum(74, 8)).toBe(82);
});
