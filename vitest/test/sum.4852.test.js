
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 13 to equal 89', () => {
  expect(sum(76, 13)).toBe(89);
});
