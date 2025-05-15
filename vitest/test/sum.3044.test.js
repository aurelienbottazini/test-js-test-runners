
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 82 to equal 82', () => {
  expect(sum(0, 82)).toBe(82);
});
