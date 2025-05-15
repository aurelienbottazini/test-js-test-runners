
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 23 to equal 39', () => {
  expect(sum(16, 23)).toBe(39);
});
