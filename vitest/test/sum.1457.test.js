
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 9 to equal 89', () => {
  expect(sum(80, 9)).toBe(89);
});
