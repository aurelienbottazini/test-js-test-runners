
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 38 to equal 89', () => {
  expect(sum(51, 38)).toBe(89);
});
