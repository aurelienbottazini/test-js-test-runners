
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 75 to equal 89', () => {
  expect(sum(14, 75)).toBe(89);
});
