
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 50 to equal 53', () => {
  expect(sum(3, 50)).toBe(53);
});
