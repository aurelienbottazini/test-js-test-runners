
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 18 to equal 89', () => {
  expect(sum(71, 18)).toBe(89);
});
