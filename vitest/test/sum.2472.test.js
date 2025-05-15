
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 66 to equal 82', () => {
  expect(sum(16, 66)).toBe(82);
});
