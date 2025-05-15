
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 0 to equal 82', () => {
  expect(sum(82, 0)).toBe(82);
});
