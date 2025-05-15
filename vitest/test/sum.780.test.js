
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 83 to equal 99', () => {
  expect(sum(16, 83)).toBe(99);
});
