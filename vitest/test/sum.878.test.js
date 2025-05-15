
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 66 to equal 105', () => {
  expect(sum(39, 66)).toBe(105);
});
