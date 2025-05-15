
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 97 to equal 105', () => {
  expect(sum(8, 97)).toBe(105);
});
