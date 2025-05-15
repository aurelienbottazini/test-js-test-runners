
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 69 to equal 89', () => {
  expect(sum(20, 69)).toBe(89);
});
