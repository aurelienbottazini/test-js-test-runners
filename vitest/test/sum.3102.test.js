
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 16 to equal 105', () => {
  expect(sum(89, 16)).toBe(105);
});
