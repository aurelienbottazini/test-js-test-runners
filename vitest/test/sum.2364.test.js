
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 80 to equal 89', () => {
  expect(sum(9, 80)).toBe(89);
});
