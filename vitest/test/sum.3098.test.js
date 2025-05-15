
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 41 to equal 53', () => {
  expect(sum(12, 41)).toBe(53);
});
