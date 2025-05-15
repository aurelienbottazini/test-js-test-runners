
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 36 to equal 105', () => {
  expect(sum(69, 36)).toBe(105);
});
